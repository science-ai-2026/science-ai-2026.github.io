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
            <p className="text-neutral-600 leading-relaxed">
              {callForPapers.description}
            </p>

            {/* Submission categories */}
            <div className="grid sm:grid-cols-2 gap-4">
              {callForPapers.categories.map((cat) => (
                <div key={cat.title} className="card">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-base font-semibold text-neutral-900">
                      {cat.title}
                    </h3>
                    <span className="text-xs font-medium text-neutral-700 bg-neutral-100 px-2 py-0.5">
                      {cat.length}
                    </span>
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
                {callForPapers.reviewProcess.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-neutral-700">
                    <svg className="w-4 h-4 text-neutral-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap gap-3">
              <a href={callForPapers.submissionUrl} className="btn-primary">
                Submit via OpenReview
              </a>
              <a href={callForPapers.guidelinesUrl} className="btn-secondary">
                Submission Guidelines
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
                      <span className="text-xs font-medium text-neutral-500 uppercase tracking-wider">
                        {item.event}
                      </span>
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
