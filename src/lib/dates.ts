import type { Locale } from '../config/site';
export function formatDate(value: string, lang: Locale) {
  const d = new Date(value);
  // Publication dates use UTC consistently. Maintenance clocks are formatted separately.
  if (lang === 'ja') {
    const parts = new Intl.DateTimeFormat('ja-JP', {year:'numeric',month:'numeric',day:'numeric',weekday:'short',timeZone:'UTC'}).formatToParts(d);
    const p = (type: string) => parts.find(v => v.type === type)?.value;
    return `${p('year')}年${p('month')}月${p('day')}日（${p('weekday')}）`;
  }
  if (lang === 'zh-tw') return new Intl.DateTimeFormat('zh-TW',{year:'numeric',month:'long',day:'numeric',timeZone:'UTC'}).format(d);
  return new Intl.DateTimeFormat('en-US',{year:'numeric',month:'long',day:'numeric',timeZone:'UTC'}).format(d);
}
export function formatNoticeDate(value: string, lang: Locale) {
  const date = formatDate(value, lang);
  return lang === 'ja' ? date.replace(/^\d{4}年/, '') : date;
}
export function maintenanceTime(value: string, lang: Locale, zone: string) {
  const displayZone = lang === 'ja' ? 'Asia/Tokyo' : zone;
  const locale = lang === 'ja' ? 'ja-JP' : lang === 'zh-tw' ? 'zh-TW' : 'en-US';
  return new Intl.DateTimeFormat(locale,{year:'numeric',month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit',hourCycle:'h23',timeZone:displayZone}).format(new Date(value)) + ` (${displayZone === 'Asia/Tokyo' ? 'JST · UTC+09:00' : displayZone})`;
}
