import { callForPapers } from '@/data/workshop';

export default function CallForPapers() {
  return (
    <section id="cfp" className="section-padding bg-primary-50">
      <div className="section-container">
        <h2 className="section-heading">{callForPapers.heading}</h2>
        <p className="section-lead">{callForPapers.lead}</p>

        <div className="mt-10 grid lg:grid-cols-3 gap-8">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-8">
            <p className="text-neutral-600 leading-relaxed [&_strong]:font-bold"
              dangerouslySetInnerHTML={{ __html: callForPapers.description }}
            />

            {/* Submission categories */}
            <div className="grid sm:grid-cols-2 gap-4">
              {callForPapers.categories.map((cat) => (
                <div key={cat.title} className="card">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-base font-semibold text-neutral-900">
                      {cat.title}
                    </h3>
                    <span className="text-xs font-medium text-neutral-700 bg-neutral-100 px-2 py-0.5 [&_a]:underline [&_a]:text-primary-600 hover:[&_a]:text-primary-800"
                      dangerouslySetInnerHTML={{ __html: cat.length }}
                    />
                  </div>
                  <p className="text-sm text-neutral-600 leading-relaxed">
                    {cat.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Review process */}
            <div>
              <h3 className="text-sm font-semibold text-neutral-500 uppercase tracking-wider mb-3">
                Review Process
              </h3>
              <ul className="space-y-2">
                {callForPapers.reviewProcess.map((item, i) => {
                  const isLast = i === callForPapers.reviewProcess.length - 1;
                  const isSecondLast = i === callForPapers.reviewProcess.length - 2;
                  const highlightColor = isLast ? '#d56062' : isSecondLast ? '#4361EE' : undefined;
                  return (
                    <li key={i} className={`flex items-start gap-2.5 text-sm ${highlightColor ? 'font-semibold' : 'text-neutral-700'}`} style={highlightColor ? { color: highlightColor } : undefined}>
                      <svg className={`w-4 h-4 mt-0.5 flex-shrink-0 ${highlightColor ? '' : 'text-neutral-600'}`} fill="currentColor" viewBox="0 0 20 20" style={highlightColor ? { color: highlightColor } : undefined}>
                        <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                      </svg>
                      {item}
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap gap-3">
              <a href={callForPapers.submissionUrl} className="btn-primary">
                Submit via OpenReview
              </a>
              <a href="mailto:scienceai26@gmail.com?subject=Interest%20in%20Serving%20as%20a%20Reviewer" className="btn-secondary">
                Contact to Serve as a Reviewer
              </a>
            </div>
          </div>

          {/* Key dates sidebar */}
          <div>
            <div className="bg-white border border-neutral-300 overflow-hidden sticky top-24">
              <div className="bg-secondary-500 px-6 py-4">
                <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
                  Key Dates
                </h3>
              </div>
              <div className="p-6">
                <ul className="space-y-4">
                  {callForPapers.keyDates.map((item) => (
                    <li key={item.event} className="flex flex-col">
                      {item.note ? (
                        <span className="group relative inline-flex items-center gap-1 self-start text-xs font-medium text-neutral-500 uppercase tracking-wider">
                          <span className="underline decoration-dotted decoration-neutral-400 underline-offset-2 cursor-help">
                            {item.event}
                          </span>
                          <button
                            type="button"
                            aria-label={`Details for ${item.event}`}
                            className="flex-shrink-0 text-neutral-400 hover:text-primary-600 focus:text-primary-600 focus:outline-none"
                          >
                            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M18 10A8 8 0 112 10a8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                            </svg>
                          </button>
                          <span
                            role="tooltip"
                            className="pointer-events-none absolute left-0 top-full z-20 mt-2 w-64 origin-top scale-95 rounded border border-neutral-300 bg-neutral-900 px-3 py-2 text-xs font-normal normal-case leading-relaxed tracking-normal text-white opacity-0 shadow-lg transition duration-150 group-hover:scale-100 group-hover:opacity-100 group-focus-within:scale-100 group-focus-within:opacity-100"
                          >
                            {item.note}
                          </span>
                        </span>
                      ) : (
                        <span className="text-xs font-medium text-neutral-500 uppercase tracking-wider">
                          {item.event}
                        </span>
                      )}
                      <span className={`text-base font-semibold mt-0.5 ${
                        item.date === 'TBA' ? 'text-neutral-400 italic' : 'text-neutral-900'
                      }`}>
                        {item.date}
                      </span>
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-xs text-neutral-400">
                  All deadlines are 11:59 PM AoE (Anywhere on Earth).
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
