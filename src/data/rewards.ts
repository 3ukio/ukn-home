import type { Locale } from '../config/site';

export const rewardLinks = {
  official: 'https://aion2.plaync.com/en-us/twitchdrops/index',
  jaOfficial: 'https://aion2.plaync.com/ja-jp/twitchdrops/index',
  inventory: 'https://www.twitch.tv/drops/inventory',
  watch: 'https://www.twitch.tv/directory/category/aion-2',
  support: 'https://help.plaync.com/faq/aion2global?faqNo=7241',
  xunyou: 'https://partnerinfo.xunyou.com/366/69e9d459d5f55b2799522351.html',
  couponHelp: 'https://help.plaync.com/faq/aion2global?faqNo=7041',
};

export interface Coupon {
  code: string;
  reward: Record<Locale, string>;
  expiresAt: string | null;
  status: 'active' | 'expired';
  sourceUrl: string;
  verifiedAt: string;
  publishedAt: string | null;
  game: string;
  type: string;
  verificationBasis: string;
}

// Never delete expired entries. Unknown announcement times and reward details stay unknown.
export const coupons: Coupon[] = [{
  code: 'AION2SPOOKYDAEVA',
  game: 'AION 2 Global',
  type: 'Halloween Coupon',
  reward: {ja:'ハロウィンクーポン（報酬詳細未確認）',en:'Halloween coupon — reward details unconfirmed','zh-tw':'萬聖節兌換碼（獎勵明細尚未確認）'},
  expiresAt: '2026-11-04T06:30:00Z',
  status: 'active',
  sourceUrl: 'https://x.com/AION2_JP',
  publishedAt: null,
  verifiedAt: '2026-11-01T08:50:21.861Z',
  verificationBasis: 'User-confirmed official Japanese account announcement; exact post URL and publication timestamp not supplied.',
}];
export function couponStatus(item: Pick<Coupon,'status'|'expiresAt'>, now = Date.now()): 'active' | 'expired' {
  return item.status === 'expired' || (item.expiresAt !== null && Date.parse(item.expiresAt) <= now) ? 'expired' : 'active';
}
function verifiedCoupons(items: Coupon[], now: number) {
  return items.filter(item => item.sourceUrl.startsWith('https://') &&
    Number.isFinite(Date.parse(item.verifiedAt)) && Date.parse(item.verifiedAt) <= now &&
    (item.expiresAt === null || Number.isFinite(Date.parse(item.expiresAt))));
}
export function activeCoupons(items = coupons, now = Date.now()) {
  return verifiedCoupons(items,now).filter(item => couponStatus(item,now) === 'active');
}
export function expiredCoupons(items = coupons, now = Date.now()) {
  return verifiedCoupons(items,now).filter(item => couponStatus(item,now) === 'expired');
}

// Verified against the AION 2 official Steam announcement, not a third-party reward list.
export const dropsCampaign = {
  name: { ja: 'ハロウィン Twitch Drops', en: 'Global Halloween Twitch Drops', 'zh-tw': '萬聖節 Twitch Drops' },
  startsAt: '2026-10-28T17:00:00Z',
  endsAt: '2026-11-04T07:59:00Z',
  claimBy: '2026-11-18T07:59:00Z',
  sourceUrl: 'https://aion2.plaync.com/en-us/board/notice/view?articleId=6adb63578af865061f6b12b8',
  steamSource: 'https://steamstore-a.akamaihd.net/news/externalpost/steam_community_announcements/1847920302231105',
  // Keep exact official English item names until localized in-game names are verified.
  rewards: [
    { minutes: 60, name: 'Resurrection Spiritstone (Bound)', quantity: 15 },
    { minutes: 120, name: 'Appearance Change Voucher (Bound)', quantity: 1 },
    { minutes: 240, name: 'Customization Voucher (Bound)', quantity: 3 },
    { minutes: 360, name: 'Odyle Energy (Bound)', quantity: 4 },
    { minutes: 480, name: 'Chubby Panda (Helm)', quantity: 1 },
  ],
};

export function rewardDate(value: string, lang: Locale) {
  const zone = lang === 'ja' ? 'Asia/Tokyo' : lang === 'zh-tw' ? 'Asia/Taipei' : 'UTC';
  return new Intl.DateTimeFormat(lang === 'zh-tw' ? 'zh-TW' : lang === 'ja' ? 'ja-JP' : 'en-GB', {
    timeZone: zone, year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', hourCycle: 'h23',
  }).format(new Date(value)) + (lang === 'ja' ? ' JST' : lang === 'zh-tw' ? ' UTC+8' : ' UTC');
}

export function couponExpiryDate(value: string, lang: Locale) {
  if (lang !== 'en') return rewardDate(value,lang);
  const pacific = new Intl.DateTimeFormat('en-US', {
    timeZone:'America/Los_Angeles',year:'numeric',month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit',hourCycle:'h23',timeZoneName:'short',
  }).format(new Date(value));
  return `${rewardDate(value,lang)} / ${pacific}`;
}
