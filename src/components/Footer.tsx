import { footer, siteConfig } from '@/data/workshop';

export default function Footer() {
  return (
    <footer id="contact" className="bg-neutral-900 text-neutral-300">
      <div className="section-container py-16">
        <div>
          {/* Branding */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded bg-secondary-500 flex items-center justify-center">
                <span className="text-white font-semibold text-xs">SF</span>
              </div>
              <span className="font-semibold text-white text-sm">
                {siteConfig.shortTitle}
              </span>
            </div>
            <h3 className="text-lg font-semibold text-white">
              {footer.title}
            </h3>
            <p className="text-sm text-neutral-400 mt-1">
              {footer.conference}
            </p>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-neutral-800">
          <p className="text-xs text-neutral-500">
            {footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
