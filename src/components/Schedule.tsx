import { schedule } from '@/data/workshop';

export default function Schedule() {
  return (
    <section id="schedule" className="section-padding bg-primary-50">
      <div className="section-container">
        <h2 className="section-heading">{schedule.heading}</h2>
        <p className="section-lead">{schedule.lead}</p>

        <div className="mt-12 grid lg:grid-cols-5 gap-10 lg:gap-12">
          {/* Format overview */}
          <div className="lg:col-span-2 space-y-6">
            <h3 className="text-sm font-semibold text-neutral-500 uppercase tracking-wider">
              Program Components
            </h3>
            <div className="space-y-3">
              {schedule.format.map((item) => (
                <div key={item.type} className="bg-white border border-neutral-300 p-4">
                  <h4 className="text-sm font-semibold text-neutral-900">{item.type}</h4>
                  <p className="text-sm text-neutral-500 mt-1">{item.description}</p>
                </div>
              ))}
            </div>

            {/* Panel themes */}
            <div className="mt-8">
              <h3 className="text-sm font-semibold text-neutral-500 uppercase tracking-wider mb-4">
                Panel Discussion Themes
              </h3>
              <ul className="space-y-2">
                {schedule.panelThemes.map((theme) => (
                  <li
                    key={theme}
                    className="flex items-start gap-2.5 text-sm text-neutral-700 italic"
                  >
                    <span className="text-neutral-500 mt-0.5 flex-shrink-0">&ldquo;</span>
                    {theme}&rdquo;
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Timeline */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-semibold text-neutral-500 uppercase tracking-wider mb-4">
              Tentative Schedule
            </h3>
            <div className="bg-white border border-neutral-300 overflow-hidden">
              <div className="divide-y divide-neutral-100">
                {schedule.timeline.map((slot, i) => {
                  const isBreak = slot.event.toLowerCase().includes('break') || slot.event.toLowerCase().includes('lunch');
                  return (
                    <div
                      key={i}
                      className={`flex items-center gap-4 px-5 py-3.5 ${
                        isBreak ? 'bg-neutral-50' : ''
                      }`}
                    >
                      <span className="text-sm font-mono text-neutral-400 w-20 flex-shrink-0">
                        {slot.time}
                      </span>
                      <span className={`text-sm flex-1 ${
                        isBreak ? 'text-neutral-400' : 'text-neutral-800 font-medium'
                      }`}>
                        {slot.event}
                      </span>
                      <span className="text-xs text-neutral-400 flex-shrink-0">
                        {slot.duration}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
            <p className="mt-3 text-xs text-neutral-400 italic">
              Schedule is tentative and subject to change. All times are in local conference time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
