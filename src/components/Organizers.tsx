import { organizers } from '@/data/workshop';

function InitialsAvatar({ initials }: { initials: string }) {
  return (
    <div className="w-24 h-24 rounded-full bg-neutral-200 flex items-center justify-center">
      <span className="text-lg font-semibold text-neutral-600">
        {initials}
      </span>
    </div>
  );
}

export default function Organizers() {
  return (
    <section id="organizers" className="section-padding bg-white">
      <div className="section-container">
        <h2 className="section-heading">{organizers.heading}</h2>
        <p className="section-lead">{organizers.lead}</p>

        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8">
          {organizers.list.map((org) => (
            <div key={org.name} className="text-center group rounded-lg border border-neutral-200 bg-white p-4">
              <div className="flex justify-center mb-3">
                {org.imageUrl ? (
                  <img
                    src={org.imageUrl}
                    alt={org.name}
                    className="w-24 h-24 object-cover rounded-full"
                  />
                ) : (
                  <InitialsAvatar initials={org.initials} />
                )}
              </div>
              <h3 className="text-base font-semibold text-neutral-900">
                {org.name}
              </h3>
              {org.affiliation && (
                <p className="text-xs text-neutral-500 mt-1">
                  {org.affiliation}
                </p>
              )}
              {org.website && org.website !== '#' && (
                <a
                  href={org.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs text-neutral-900 hover:underline mt-1"
                >
                  Website
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                  </svg>
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
