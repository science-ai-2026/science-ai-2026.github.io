import { hero } from '@/data/workshop';

function MetaIcon({ type }: { type: string }) {
  if (type === 'location') {
    return (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    );
  }
  if (type === 'stream') {
    return (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.348 14.651a3.75 3.75 0 010-5.303m5.304 0a3.75 3.75 0 010 5.303m-7.425 2.122a6.75 6.75 0 010-9.546m9.546 0a6.75 6.75 0 010 9.546M5.106 18.894c-3.808-3.808-3.808-9.98 0-13.789m13.788 0c3.808 3.808 3.808 9.981 0 13.79M12 12h.008v.007H12V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
      </svg>
    );
  }
  return (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section id="home" className="relative bg-white pt-28 pb-16 sm:pt-36 sm:pb-20 lg:pt-40 lg:pb-24 border-b border-neutral-200">
      <div className="section-container relative">
        <div className="max-w-4xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-900 tracking-tight leading-[1.1]">
            {hero.title}
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-neutral-700 leading-relaxed max-w-3xl">
            {hero.statement}
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            {hero.ctas.map((cta) => (
              <a
                key={cta.label}
                href={cta.href}
                className={cta.primary ? 'btn-primary' : 'btn-secondary'}
              >
                {cta.label}
              </a>
            ))}
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4">
            {hero.metadata.map((meta) => (
              <div
                key={meta.label}
                className="flex items-center gap-2 text-sm text-neutral-600"
              >
                <MetaIcon type={meta.icon} />
                <span>{meta.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
