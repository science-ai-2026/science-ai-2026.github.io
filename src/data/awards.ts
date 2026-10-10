import acceptedPapersData from './acceptedPapers.json';

export type AwardKind = 'Best Paper' | 'Best Paper Runner-up';

export type AwardedPaper = {
  forum: string;
  title: string;
  authors: string[];
  presentation: 'Oral' | 'Poster';
  award: AwardKind;
};

const awardRank: Record<AwardKind, number> = {
  'Best Paper': 0,
  'Best Paper Runner-up': 1,
};

export const awardedPapers = (acceptedPapersData as Array<Partial<AwardedPaper>>)
  .filter((paper): paper is AwardedPaper => Boolean(paper.award))
  .sort((a, b) => awardRank[a.award] - awardRank[b.award] || a.title.localeCompare(b.title));

export const awardByForum = new Map(awardedPapers.map((paper) => [paper.forum, paper.award]));
