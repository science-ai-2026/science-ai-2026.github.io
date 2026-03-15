'use client';

import { useState, useEffect } from 'react';
import { navigation, siteConfig } from '@/data/workshop';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-neutral-100'
          : 'bg-transparent'
      }`}
    >
      <div className="section-container">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded bg-secondary-500 flex items-center justify-center">
              <span className="text-white font-semibold text-xs">SF</span>
            </div>
            <span className="font-semibold text-sm text-neutral-900 hidden sm:inline">
              {siteConfig.shortTitle}
              <span className="text-neutral-500 font-normal ml-1.5">
                @ {siteConfig.conference}
              </span>
            </span>
          </a>

          <nav className="hidden lg:flex items-center gap-1">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-3 py-2 text-sm text-neutral-700 hover:text-neutral-900
                           hover:underline transition-colors duration-150"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-md text-neutral-600 hover:bg-neutral-100"
            aria-label="Toggle navigation"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-white border-b border-neutral-100 shadow-lg">
          <nav className="section-container py-4 flex flex-col gap-1">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="px-4 py-2.5 text-sm text-neutral-700 hover:text-neutral-900
                           hover:underline transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
