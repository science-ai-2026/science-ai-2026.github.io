import { topics } from '@/data/workshop';

const colorMap: Record<string, { bg: string; border: string; icon: string; dot: string }> = {
  blue: {
    bg: 'bg-blue-50',
    border: 'border-blue-200',
    icon: 'text-blue-600',
    dot: 'bg-blue-400',
  },
  indigo: {
    bg: 'bg-indigo-50',
    border: 'border-indigo-200',
    icon: 'text-indigo-600',
    dot: 'bg-indigo-400',
  },
  violet: {
    bg: 'bg-violet-50',
    border: 'border-violet-200',
    icon: 'text-violet-600',
    dot: 'bg-violet-400',
  },
};

function PillarIcon({ type, className }: { type: string; className: string }) {
  if (type === 'theory') {
    return (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
      </svg>
    );
  }
  if (type === 'empirical') {
    return (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    );
  }
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" />
    </svg>
  );
}

export default function Topics() {
  return (
    <section id="topics" className="section-padding bg-white">
      <div className="section-container">
        <h2 className="section-heading">{topics.heading}</h2>
        <p className="section-lead">{topics.lead}</p>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {topics.pillars.map((pillar) => {
            const colors = colorMap[pillar.color] || colorMap.blue;
            return (
              <div
                key={pillar.title}
                className={`rounded border ${colors.border} ${colors.bg} p-6`}
              >
                <div className="flex items-center gap-3 mb-5">
                  <PillarIcon type={pillar.icon} className={`w-6 h-6 ${colors.icon}`} />
                  <h3 className="text-lg font-semibold text-neutral-900">
                    {pillar.title}
                  </h3>
                </div>
                <ul className="space-y-2.5">
                  {pillar.subtopics.map((subtopic) => (
                    <li
                      key={subtopic}
                      className="flex items-start gap-2.5 text-sm text-neutral-700 leading-relaxed"
                    >
                      <span className={`w-1.5 h-1.5 rounded-full ${colors.dot} mt-1.5 flex-shrink-0`} />
                      {subtopic}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="mt-10 bg-primary-50 border border-neutral-300 rounded p-6 text-center max-w-3xl mx-auto">
          <p className="text-sm text-neutral-700 leading-relaxed italic">
            {topics.note}
          </p>
        </div>
      </div>
    </section>
  );
}
