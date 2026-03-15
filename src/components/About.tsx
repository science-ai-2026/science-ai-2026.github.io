import { about } from '@/data/workshop';

export default function About() {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="section-container">
        <h2 className="section-heading">{about.heading}</h2>
        <p className="section-lead">{about.lead}</p>

        <div className="mt-10 grid lg:grid-cols-5 gap-10 lg:gap-16">
          <div className="lg:col-span-3 space-y-4">
            {about.body.map((paragraph, i) => (
              <p key={i} className="text-neutral-600 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="lg:col-span-2">
            <div className="bg-primary-50 border border-neutral-300 p-6">
              <h3 className="text-sm font-semibold text-neutral-900 uppercase tracking-wider mb-4">
                Motivating Questions
              </h3>
              <ul className="space-y-3">
                {about.questions.map((q, i) => (
                  <li key={i} className="flex gap-3 text-sm text-neutral-700 leading-relaxed">
                    <span className="flex-shrink-0 w-5 h-5 rounded bg-secondary-500 text-white flex items-center justify-center text-xs font-medium mt-0.5">
                      {i + 1}
                    </span>
                    {q}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
