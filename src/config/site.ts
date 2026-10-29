// Change the temporary brand here. No official logo or game artwork is used in v2.
export const site = {
  name: 'AION2 Global',
  origin: 'https://ukn-home.pages.dev',
  edition: 'Global',
  official: 'https://aion2.plaync.com/en-us/index?redirect=false',
  notices: 'https://aion2.plaync.com/en-us/board/notice/list',
  steam: 'https://store.steampowered.com/news/app/3393110',
  contactEmail: '', // Add the owner's real public email; never invent one.
  mascotEnabled: false,
};
export const locales = ['ja', 'en', 'zh-tw'] as const;
export type Locale = typeof locales[number];
export const languageNames = { ja: '日本語', en: 'English', 'zh-tw': '繁體中文' };
export const htmlLanguages = { ja: 'ja', en: 'en', 'zh-tw': 'zh-TW' };
export const sections = ['news', 'maintenance', 'operations', 'guides', 'tools'] as const;
export const infoPages = ['about', 'contact', 'privacy'] as const;
