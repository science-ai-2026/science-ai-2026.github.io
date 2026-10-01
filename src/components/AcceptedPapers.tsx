import acceptedPapersData from '@/data/acceptedPapers.json';

type AcceptedPaper = {
  number: string;
  forum: string;
  title: string;
  presentation: 'Oral' | 'Poster';
  posterSession: 1 | 2;
};

const posterSessions = [
  { id: 1, label: 'Poster Session I', time: '12:00 - 13:30' },
  { id: 2, label: 'Poster Session II', time: '17:15 - 18:00' },
] as const;

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
          All accepted papers are presented as posters. Find your paper below to see its assigned
          poster session. Paper titles link to their OpenReview pages.
        </p>

        {posterSessions.map((session) => (
          <div key={session.id} id={`poster-session-${session.id}`} className="mt-12 scroll-mt-20">
            <h3 className="text-xl font-semibold text-neutral-900">
              {session.label}
              <span className="ml-3 text-base font-normal text-neutral-500">{session.time}</span>
            </h3>

            <div className="mt-4 grid lg:grid-cols-2 gap-3">
              {sortedAcceptedPapers
                .filter((paper) => paper.posterSession === session.id)
                .map((paper) => (
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
                      {paper.presentation} · {session.label}
                    </span>
                  </a>
                ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
