import acceptedPapersData from '@/data/acceptedPapers.json';

type AcceptedPaper = {
  number: string;
  forum: string;
  title: string;
  presentation: 'Oral' | 'Poster';
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

        <div className="mt-12 grid lg:grid-cols-2 gap-3">
          {sortedAcceptedPapers.map((paper) => (
            <a
              key={paper.forum}
              href={paper.forum}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded border border-neutral-200 bg-white p-4 hover:border-primary-300 hover:shadow-sm transition"
            >
              <span className="block text-sm font-medium text-neutral-800 hover:text-primary-700">
                {paper.title}
              </span>
              <span className="inline-block mt-2 text-xs font-semibold uppercase tracking-wider text-neutral-500">
                {paper.presentation}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
