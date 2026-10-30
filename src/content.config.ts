import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
const instant = z.string().datetime({ offset: true });
const source = z.string().url().refine((value) => {
  const u = new URL(value);
  return u.protocol === 'https:' && ['aion2.plaync.com', 'aion2.ncsoft.jp', 'store.steampowered.com', 'steamcommunity.com'].includes(u.hostname);
}, 'Only verified HTTPS official AION2 / Steam sources are accepted.');
const articles = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/articles', generateId: ({entry}) => entry.replace(/\.md$/, '') }),
  schema: z.object({
    uid: z.string().min(1),
    translationKey: z.string().min(1),
    slug: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
    lang: z.enum(['ja', 'en', 'zh-tw']),
    title: z.string().min(5),
    summary: z.string().min(15),
    category: z.enum(['patch', 'maintenance', 'enforcement', 'event', 'guide']),
    sourceUrl: source,
    edition: z.literal('Global'),
    region: z.enum(['GLOBAL', 'ASIA', 'NA', 'EU', 'SA']),
    platforms: z.array(z.enum(['Steam', 'PURPLE'])).min(1),
    officialPublishedAt: instant.nullable(),
    publishedAt: instant,
    updatedAt: instant,
    verifiedAt: instant,
    status: z.enum(['draft', 'published']).default('draft'),
    author: z.string().min(1).optional(),
    image: z.object({
      src: z.string().startsWith('/'), alt: z.string().min(5), caption: z.string().min(1),
      sourceUrl: z.string().url(), license: z.enum(['owned', 'permission', 'open-license']),
      licenseEvidence: z.string().min(10), width: z.number().int().positive(), height: z.number().int().positive(),
    }).optional(),
    maintenance: z.object({
      region: z.string().min(1),
      timeZone: z.enum(['Asia/Tokyo','UTC','America/New_York','America/Los_Angeles','Europe/Berlin','America/Sao_Paulo']),
      startsAt: instant, expectedEndsAt: instant,
      status: z.enum(['scheduled','ongoing','extended','completed','cancelled','unconfirmed']),
      actualEndsAt: instant.nullable(), completionSourceUrl: source.nullable(),
    }).optional(),
    enforcement: z.object({
      reason: z.string().min(1), accountRestrictions: z.number().int().nonnegative(),
      countingNote: z.string().min(5),
    }).optional(),
  }).superRefine((a, ctx) => {
    const err = (message: string) => ctx.addIssue({ code: z.ZodIssueCode.custom, message });
    if (Date.parse(a.updatedAt) < Date.parse(a.publishedAt)) err('updatedAt must not precede publishedAt');
    for (const field of ['publishedAt','updatedAt','verifiedAt','officialPublishedAt'] as const) {
      if (a[field] && Date.parse(a[field]!) > Date.now()) err(`${field} cannot be in the future`);
    }
    if (a.category === 'maintenance' && !a.maintenance) err('Maintenance records require schedule and explicit status');
    if (a.category === 'enforcement' && (!a.enforcement || !a.officialPublishedAt)) err('Enforcement records require an official date, reason and published restriction count');
    if (a.category !== 'guide' && !a.officialPublishedAt) err('Official news requires a verified official publication date');
    if (a.officialPublishedAt && Date.parse(a.verifiedAt) < Date.parse(a.officialPublishedAt)) err('Verification must not precede the official publication');
    if (a.maintenance) {
      const m = a.maintenance;
      if (Date.parse(m.expectedEndsAt) <= Date.parse(m.startsAt)) err('Expected end must be after start');
      if (m.status === 'completed' && (!m.actualEndsAt || !m.completionSourceUrl)) err('Completion requires official confirmation, never infer from the clock');
      if (m.actualEndsAt && Date.parse(m.actualEndsAt) < Date.parse(m.startsAt)) err('Actual end must be after start');
      if (m.actualEndsAt && Date.parse(m.actualEndsAt) > Date.now()) err('An actual completion cannot be in the future');
    }
  }),
});
export const collections = { articles };
