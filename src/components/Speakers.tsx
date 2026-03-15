import { speakers } from '@/data/workshop';

function InitialsAvatar({ initials }: { initials: string }) {
  return (
    <div className="w-full aspect-square bg-neutral-200 flex items-center justify-center">
      <span className="text-3xl font-semibold text-neutral-600">
        {initials}
      </span>
    </div>
  );
}

export default function Speakers() {
  return (
    <section id="speakers" className="section-padding bg-white">
      <div className="section-container">
        <h2 className="section-heading">{speakers.heading}</h2>
        <p className="section-lead">{speakers.lead}</p>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {speakers.list.map((speaker) => (
            <div key={speaker.name} className="card group">
              <div className="mb-4 overflow-hidden">
                {speaker.imageUrl ? (
                  <img
                    src={speaker.imageUrl}
                    alt={speaker.name}
                    className="w-full aspect-square object-cover"
                  />
                ) : (
                  <InitialsAvatar initials={speaker.initials} />
                )}
              </div>
              <h3 className="text-lg font-semibold text-neutral-900">
                {speaker.name}
              </h3>
              {speaker.affiliation && (
                <p className="text-sm text-neutral-600 font-medium mt-0.5">
                  {speaker.affiliation}
                </p>
              )}
              <p className="text-sm text-neutral-700 leading-relaxed mt-2">
                {speaker.bio}
              </p>
              {speaker.website && speaker.website !== '#' && (
                <a
                  href={speaker.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm text-neutral-900 hover:underline mt-3 font-medium"
                >
                  Website
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                  </svg>
                </a>
              )}
            </div>
          ))}
        </div>

        {speakers.additionalNote && (
          <div className="mt-8 text-center">
            <p className="text-sm text-neutral-500 italic">
              {speakers.additionalNote}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
