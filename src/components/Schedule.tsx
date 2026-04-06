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
              Schedule Overview
            </h3>
            <div className="bg-white border border-neutral-300 overflow-hidden">
              <table className="w-full border-collapse">
                <thead className="bg-neutral-50 border-b border-neutral-300">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-neutral-500 w-28">
                      Time
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-neutral-500 w-44">
                      Activity
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-neutral-500">
                      Speaker
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {schedule.timeline.map((slot, i) => {
                    const activityLower = slot.activity.toLowerCase();
                    const isBreak = activityLower.includes('break');
                    const isLunch = activityLower.includes('lunch');
                    const muted = isBreak || isLunch;

                    return (
                      <tr
                        key={i}
                        className={`border-b border-neutral-100 align-top ${
                          muted ? 'bg-neutral-50' : ''
                        }`}
                      >
                        <td className="px-4 py-3 text-sm font-mono text-neutral-500">
                          {slot.time}
                        </td>
                        <td className={`px-4 py-3 text-sm ${muted ? 'text-neutral-500' : 'text-neutral-900 font-medium'}`}>
                          {slot.activity}
                        </td>
                        <td className="px-4 py-3 text-sm text-neutral-600">
                          {slot.speaker && <div>{slot.speaker}</div>}
                          {slot.details && (
                            <div className="mt-1 text-neutral-500">
                              {slot.details}
                            </div>
                          )}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
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
