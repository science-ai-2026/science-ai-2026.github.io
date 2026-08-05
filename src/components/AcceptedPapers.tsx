import acceptedPapersData from '@/data/acceptedPapers.json';
import { siteConfig } from '@/data/workshop';

type AcceptedPaper = {
  number: string;
  forum: string;
  title: string;
  presentation: 'Oral' | 'Poster';
  authors?: string[];
};

const acceptedPapers = acceptedPapersData as AcceptedPaper[];
const sortedAcceptedPapers = [...acceptedPapers].sort((a, b) =>
  a.title.localeCompare(b.title)
);

export default function AcceptedPapers() {
  return (
    <section id="accepted-papers" className="section-padding bg-white">
      <div className="section-container">
        <h2 className="section-heading">Accepted Papers</h2>
        <p className="section-lead">
          Accepted workshop papers are listed below. Paper titles link to their OpenReview pages.
        </p>

        <a
          href={siteConfig.openReviewUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-primary-700 hover:text-primary-800 focus:outline-none focus:ring-1 focus:ring-primary-600"
        >
          View all submissions on OpenReview
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
          </svg>
        </a>

        <div className="mt-12 grid lg:grid-cols-2 gap-3">
          {sortedAcceptedPapers.map((paper) => (
            <a
              key={paper.forum}
              href={paper.forum}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded border border-neutral-200 bg-white p-4 hover:border-primary-300 hover:shadow-sm transition"
            >
              <span
                className={`block text-base leading-snug hover:text-primary-700 ${
                  paper.presentation === 'Oral'
                    ? 'font-bold text-neutral-900'
                    : 'font-medium text-neutral-800'
                }`}
              >
                {paper.title}
              </span>
              {paper.authors && paper.authors.length > 0 && (
                <span className="block mt-1.5 text-sm leading-snug text-neutral-600">
                  {paper.authors.join(', ')}
                </span>
              )}
              <span
                className={`inline-block mt-2 text-xs uppercase tracking-wider ${
                  paper.presentation === 'Oral'
                    ? 'font-bold text-primary-700'
                    : 'font-semibold text-neutral-500'
                }`}
              >
                {paper.presentation}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
