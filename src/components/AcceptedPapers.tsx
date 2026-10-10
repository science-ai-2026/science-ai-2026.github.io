import acceptedPapersData from '@/data/acceptedPapers.json';
import { awardedPapers, type AwardKind } from '@/data/awards';
import { AwardLabel } from '@/components/AwardIcon';

type AcceptedPaper = {
  number: string;
  forum: string;
  title: string;
  presentation: 'Oral' | 'Poster';
  posterSession: 1 | 2;
  award?: AwardKind;
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

        <div id="paper-awards" className="mt-12 scroll-mt-20">
          <h3 className="text-xl font-semibold text-neutral-900">
            Paper Awards
            <span className="ml-3 text-base font-normal text-neutral-500">
              Presented at the closing session, 17:15 - 18:00
            </span>
          </h3>
          <ul className="mt-4 grid lg:grid-cols-2 gap-3">
            {awardedPapers.map((paper) => (
              <li key={paper.forum} className="border border-neutral-300 bg-neutral-50 p-4">
                <AwardLabel award={paper.award} />
                <a
                  href={paper.forum}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1.5 block text-sm font-semibold text-neutral-900 hover:text-primary-700"
                >
                  {paper.title}
                </a>
                <span className="mt-1 block text-xs text-neutral-500">{paper.authors.join(', ')}</span>
              </li>
            ))}
          </ul>
        </div>

        {posterSessions.map((session) => (
          <div key={session.id} id={`poster-session-${session.id}`} className="mt-12 scroll-mt-20">
            <h3 className="text-xl font-semibold text-neutral-900">
              {session.label}
              <span className="ml-3 text-base font-normal text-neutral-500">{session.time}</span>
            </h3>

            <div className="mt-4 grid lg:grid-cols-2 gap-3">
              {sortedAcceptedPapers
                .filter((paper) => paper.posterSession === session.id)
                .map((paper) => {
                  const isOral = paper.presentation === 'Oral';
                  return (
                    <a
                      key={paper.forum}
                      href={paper.forum}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded border border-neutral-200 bg-white p-4 hover:border-primary-300 hover:shadow-sm transition"
                    >
                      <span
                        className={`block text-sm hover:text-primary-700 ${
                          isOral ? 'font-bold text-neutral-900' : 'font-medium text-neutral-800'
                        }`}
                      >
                        {paper.title}
                      </span>
                      <span className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1">
                        <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                          <span className={isOral ? 'font-extrabold text-neutral-900' : undefined}>
                            {paper.presentation}
                          </span>{' '}
                          · {session.label}
                        </span>
                        {paper.award && <AwardLabel award={paper.award} size="xs" />}
                      </span>
                    </a>
                  );
                })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
