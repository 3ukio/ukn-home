import {site,locales,sections,infoPages,htmlLanguages} from '../config/site';
import {publishedArticles,articlePath} from '../lib/content';
export async function GET(){
 const all=await publishedArticles();
 const groups=[locales.map(lang=>({lang,path:`/${lang}/`})),...[...sections,...infoPages].map(s=>locales.map(lang=>({lang,path:`/${lang}/${s}/`})) )];
 const keys=[...new Set(all.map(a=>a.data.translationKey))];
 for(const key of keys)groups.push(all.filter(a=>a.data.translationKey===key).map(a=>({lang:a.data.lang,path:articlePath(a)})));
 const esc=(s:string)=>s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/"/g,'&quot;');
 const urls=[`<url><loc>${site.origin}/</loc></url>`];
 for(const group of groups)for(const entry of group){const a=all.find(a=>articlePath(a)===entry.path);urls.push(`<url><loc>${site.origin}${entry.path}</loc>${a?`<lastmod>${a.data.updatedAt}</lastmod>`:''}${group.map(x=>`<xhtml:link rel="alternate" hreflang="${htmlLanguages[x.lang]}" href="${esc(site.origin+x.path)}"/>`).join('')}</url>`)}
 return new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">${urls.join('')}</urlset>`,{headers:{'Content-Type':'application/xml; charset=utf-8'}});
}
