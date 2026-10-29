import { getCollection, type CollectionEntry } from 'astro:content';
import type { Locale } from '../config/site';
export type Article = CollectionEntry<'articles'>;
export async function publishedArticles() {
  const all = await getCollection('articles');
  const ids = new Set<string>(), routes = new Set<string>(), translations = new Set<string>();
  for (const a of all) {
    const route = `${a.data.lang}/${a.data.slug}`, translation = `${a.data.lang}/${a.data.translationKey}`;
    if (ids.has(a.data.uid) || routes.has(route) || translations.has(translation)) throw new Error(`Duplicate article UID, route or translation: ${a.id}`);
    ids.add(a.data.uid); routes.add(route); translations.add(translation);
    if (!a.body?.trim()) throw new Error(`Article body is empty: ${a.id}`);
  }
  return all.filter(a => a.data.status === 'published').sort((a,b) => Date.parse(b.data.updatedAt)-Date.parse(a.data.updatedAt) || a.data.uid.localeCompare(b.data.uid));
}
export function articlePath(a: Article) { return `/${a.data.lang}/articles/${a.data.slug}/`; }
export function translatedArticle(all: Article[], key: string, lang: Locale) { return all.find(a => a.data.translationKey === key && a.data.lang === lang); }
export function inSection(a: Article, section: string) {
  return section === 'news' ? ['patch','event'].includes(a.data.category) :
    section === 'maintenance' ? a.data.category === 'maintenance' :
    section === 'operations' ? a.data.category === 'enforcement' :
    section === 'guides' ? a.data.category === 'guide' : false;
}
