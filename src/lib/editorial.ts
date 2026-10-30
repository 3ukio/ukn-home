// Future monitoring adapters may produce candidates only. Nothing is fetched or published here.
export interface OfficialCandidate {
  sourceUrl: string;
  discoveredAt: string;
  claimedRegion: string | null;
  officialPublishedAt: string | null;
  reviewState: 'needs-human-review';
}
// A human reviews source, region, dates, translation and any asset license,
// then writes a Content Collection Markdown entry as draft before publication.
