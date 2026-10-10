import type { AwardKind } from '@/data/awards';

const STAR_ON_CUP =
  'M12 5.1 12.57 6.72 14.28 6.76 12.92 7.8 13.41 9.44 12 8.47 10.59 9.44 11.08 7.8 9.72 6.76 11.43 6.72Z';
const STAR_ON_MEDAL =
  'M12 12.4 12.62 14.15 14.47 14.2 13 15.32 13.53 17.1 12 16.05 10.47 17.1 11 15.32 9.53 14.2 11.38 14.15Z';

function Trophy({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M7 5H4.5v1.5a3.5 3.5 0 0 0 3.6 3.5M17 5h2.5v1.5a3.5 3.5 0 0 1-3.6 3.5"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.6}
        strokeLinecap="round"
      />
      <path d="M7 3h10v5a5 5 0 0 1-10 0V3Z" fill="currentColor" />
      <path d="M11 12.5h2V17h-2z" fill="currentColor" />
      <rect x="7.5" y="17" width="9" height="3.5" rx="0.75" fill="currentColor" />
      <path d={STAR_ON_CUP} fill="#fff" />
    </svg>
  );
}

function Medal({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path d="M6.5 2h3.6l2.6 7.5H9.1Z" fill="currentColor" opacity={0.55} />
      <path d="M17.5 2h-3.6l-2.6 7.5h3.6Z" fill="currentColor" opacity={0.8} />
      <circle cx="12" cy="15" r="6" fill="currentColor" />
      <circle cx="12" cy="15" r="4.4" fill="none" stroke="#fff" strokeWidth={0.8} opacity={0.7} />
      <path d={STAR_ON_MEDAL} fill="#fff" />
    </svg>
  );
}

const styles: Record<AwardKind, { icon: string; ink: string }> = {
  'Best Paper': { icon: 'text-award-gold', ink: 'text-award-gold-ink' },
  'Best Paper Runner-up': { icon: 'text-award-silver', ink: 'text-award-silver-ink' },
};

export function AwardIcon({ award, className = 'w-4 h-4' }: { award: AwardKind; className?: string }) {
  const Icon = award === 'Best Paper' ? Trophy : Medal;
  return <Icon className={`${className} ${styles[award].icon} flex-shrink-0`} />;
}

export function AwardLabel({ award, size = 'sm' }: { award: AwardKind; size?: 'sm' | 'xs' }) {
  const text = size === 'sm' ? 'text-sm' : 'text-xs';
  const icon = size === 'sm' ? 'w-[1.1rem] h-[1.1rem]' : 'w-4 h-4';
  return (
    <span className={`inline-flex items-center gap-1.5 font-semibold ${text} ${styles[award].ink}`}>
      <AwardIcon award={award} className={icon} />
      {award}
    </span>
  );
}
