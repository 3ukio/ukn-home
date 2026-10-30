import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import { createRequire } from 'node:module';
const require=createRequire(import.meta.url);
const {transformSync}=require('esbuild');
const z=require('zod');
const config=transformSync(fs.readFileSync('src/content.config.ts','utf8'),{loader:'ts',format:'cjs'}).code;
const mod={exports:{}};
new Function('require','module','exports',config)(name=>name==='astro:content'?{z,defineCollection:v=>v}:name==='astro/loaders'?{glob:v=>v}:require(name),mod,mod.exports);
const schema=mod.exports.collections.articles.schema;
const sample={uid:'test',translationKey:'test',slug:'test',lang:'en',title:'Testing validation',summary:'A test-only record, never published on the website.',category:'guide',sourceUrl:'https://aion2.plaync.com/en-us/board/notice/list',edition:'Global',region:'GLOBAL',platforms:['Steam'],officialPublishedAt:null,publishedAt:'2026-01-01T00:00:00Z',updatedAt:'2026-01-01T00:00:00Z',verifiedAt:'2026-01-01T00:00:00Z',status:'draft'};
assert(schema.safeParse(sample).success);
for(const bad of [{edition:'KR'},{lang:'zh-cn'},{slug:'../unsafe'},{sourceUrl:'https://example.com/not-official'},{updatedAt:'2025-01-01T00:00:00Z'},{publishedAt:'2999-01-01T00:00:00Z'},{category:'maintenance'},{category:'enforcement'},{image:{src:'/x.webp',alt:'x'}}])assert(!schema.safeParse({...sample,...bad}).success,JSON.stringify(bad));
const m={...sample,category:'maintenance',officialPublishedAt:'2026-01-01T00:00:00Z',maintenance:{region:'Test only',timeZone:'Asia/Tokyo',startsAt:'2026-01-02T00:00:00Z',expectedEndsAt:'2026-01-02T01:00:00Z',status:'completed',actualEndsAt:null,completionSourceUrl:null}};
assert(!schema.safeParse(m).success,'No auto-completion without official confirmation');
m.maintenance.status='scheduled';assert(schema.safeParse(m).success,'Past scheduled end must not force completed status');
const ds=transformSync(fs.readFileSync('src/lib/dates.ts','utf8'),{loader:'ts',format:'cjs'}).code;const dm={exports:{}};new Function('module','exports',ds)(dm,dm.exports);
assert.equal(dm.exports.formatDate('2026-10-28T12:00:00Z','ja'),'2026年10月28日（水）');
assert.equal(dm.exports.formatDate('2026-10-28T12:00:00Z','en'),'October 28, 2026');
assert.equal(dm.exports.formatDate('2026-10-28T12:00:00Z','zh-tw'),'2026年10月28日');
assert.equal(dm.exports.formatNoticeDate('2026-10-28T12:00:00Z','ja'),'10月28日（水）');
assert.equal(dm.exports.formatNoticeDate('2026-10-28T12:00:00Z','en'),'October 28, 2026');
assert(dm.exports.maintenanceTime('2026-01-01T00:00:00Z','ja','America/New_York').includes('09:00 (JST'));
assert(dm.exports.maintenanceTime('2026-01-01T00:00:00Z','en','America/New_York').includes('19:00 (America/New_York)'));
let pages=[];function walk(dir){for(const f of fs.readdirSync(dir)){const p=path.join(dir,f);if(fs.statSync(p).isDirectory())walk(p);else if(p.endsWith('.html'))pages.push(p)}}walk('dist');
let indexable=0;const titles=new Set(),descs=new Set();
for(const p of pages){const html=fs.readFileSync(p,'utf8');
 assert(html.includes('rel="canonical"'),`canonical: ${p}`);
 for(const match of html.matchAll(/(?:href|src)="(\/[^"#?]*)/g)){const target=path.join('dist',decodeURI(match[1]));assert(fs.existsSync(target)||fs.existsSync(path.join(target,'index.html')),`${p} -> ${match[1]}`)}
 if(html.includes('name="robots" content="noindex,follow"'))continue;
 indexable++;
 const title=html.match(/<title>(.*?)<\/title>/s)?.[1],desc=html.match(/name="description" content="([^"]*)"/)?.[1];
 assert(title&&!titles.has(title),`unique title: ${p}`);titles.add(title);
 assert(desc&&!descs.has(desc),`unique description: ${p}`);descs.add(desc);
 assert(html.includes('property="og:url"'),`OG: ${p}`);
 assert(!html.includes('/art0.webp')&&!html.includes('/art1.webp')&&!html.includes('/art2.webp')&&!html.includes('/art3.webp'),`unlicensed artwork referenced: ${p}`);
}
for(const lang of ['ja','en','zh-tw'])assert(fs.existsSync(`dist/${lang}/articles/official-sources/index.html`));
const ja=fs.readFileSync('dist/ja/articles/maintenance-check/index.html','utf8');assert(ja.includes('/en/guides/?translation=missing'));assert(!ja.includes('hreflang="en" href="https://ukn-home.pages.dev/en/articles/maintenance-check/"'));
assert(fs.readFileSync('dist/robots.txt','utf8').startsWith('User-agent:'));
const sitemap=fs.readFileSync('dist/sitemap.xml','utf8');assert(sitemap.startsWith('<?xml'));assert(!sitemap.includes('/articles/first-day/'));
const articlePath=fs.readFileSync('dist/en/articles/official-sources/index.html','utf8');assert(articlePath.includes('property="og:type" content="article"'));assert(!articlePath.includes('application/ld+json'),'Do not invent missing author metadata');
console.log(`PASS: schema safeguards, timezone conversion, localized dates, missing translations, ${pages.length} HTML pages, ${indexable} indexable pages, internal asset links and SEO metadata.`);
// A visual edit's update time must not reorder original publication dates.
const fixtures=[{id:'older',body:'Editorial test',data:{...sample,uid:'older',slug:'older',translationKey:'older',status:'published',updatedAt:'2026-01-10T00:00:00Z'}},{id:'newer',body:'Editorial test',data:{...sample,uid:'newer',slug:'newer',translationKey:'newer',status:'published',publishedAt:'2026-01-02T00:00:00Z',updatedAt:'2026-01-02T00:00:00Z'}}];
const cs=transformSync(fs.readFileSync('src/lib/content.ts','utf8'),{loader:'ts',format:'cjs'}).code,cm={exports:{}};
new Function('require','module','exports',cs)(()=>({getCollection:async()=>fixtures}),cm,cm.exports);
assert.deepEqual((await cm.exports.publishedArticles()).map(a=>a.id),['newer','older']);
assert.equal(cm.exports.articlePublishedAt({data:{...sample,category:'patch',officialPublishedAt:'2026-01-03T00:00:00Z'}}),'2026-01-03T00:00:00Z');
for(const lang of ['ja','en','zh-tw']){
 const home=fs.readFileSync(`dist/${lang}/index.html`,'utf8');assert(home.includes('AION2 NOW'));assert(home.includes('data-theme="dark"'));assert(!home.includes('home-intro'));
 const article=fs.readFileSync(`dist/${lang}/articles/official-sources/index.html`,'utf8');assert(article.includes('<strong>'),'Markdown emphasis must render');assert(article.includes('notice-detail-meta'));assert(article.includes('article-notice-banner'));
}
console.log('PASS: publication order, honest official dates, default dark theme, centralized brand, compact home and Markdown emphasis.');
