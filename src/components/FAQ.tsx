'use client';

import { useState } from 'react';
import { faq } from '@/data/workshop';

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-neutral-300 overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-neutral-50 transition-colors"
      >
        <span className="text-sm font-medium text-neutral-900 pr-4">
          {question}
        </span>
        <svg
          className={`w-4 h-4 text-neutral-400 flex-shrink-0 transition-transform duration-200 ${
            open ? 'rotate-180' : ''
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </button>
      {open && (
        <div className="px-5 pb-4">
          <p className="text-sm text-neutral-700 leading-relaxed">
            {answer}
          </p>
        </div>
      )}
    </div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="section-padding bg-primary-50">
      <div className="section-container">
        <div className="max-w-3xl mx-auto">
          <h2 className="section-heading text-center">{faq.heading}</h2>

          <div className="mt-10 space-y-3">
            {faq.items.map((item) => (
              <FAQItem
                key={item.question}
                question={item.question}
                answer={item.answer}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
