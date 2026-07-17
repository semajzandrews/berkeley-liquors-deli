import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="relative px-5 pb-10 pt-14 sm:px-8">
      <div className="ticket ticket-perf mx-auto max-w-6xl p-7 pt-9 sm:p-10">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="font-[var(--font-display)] text-2xl font-bold text-[var(--navy)]">
              Berkeley Liquors{" "}
              <span className="text-[var(--red)]">& Deli</span>
            </p>
            <p className="mt-2 max-w-xs text-[0.92rem] text-[var(--ink-soft)]">
              The corner pours and stacks. {site.fullAddress}.
            </p>
            <a
              href={site.phoneHref}
              className="mt-3 inline-block font-[var(--font-mono)] text-[0.82rem] tracking-[0.04em] text-[var(--navy)] underline-offset-4 hover:underline"
            >
              {site.phone}
            </a>
          </div>

          <div className="grid grid-cols-2 gap-x-8 gap-y-2 font-[var(--font-mono)] text-[0.74rem] text-[var(--ink-soft)]">
            {site.hours.map((h) => (
              <div key={h.days} className="contents">
                <span className="uppercase tracking-[0.1em] text-[var(--ink-faint)]">
                  {h.days}
                </span>
                <span className="text-right text-[var(--ink)]">{h.time}</span>
              </div>
            ))}
          </div>

          <a href={site.phoneHref} className="btn btn-red self-start">
            Call the corner
          </a>
        </div>

        {/* the maker's mark — stamped in the corner of the receipt, unique to this site */}
        <div className="mt-9 flex flex-col items-start justify-between gap-3 border-t border-dashed border-[var(--line-2)] pt-5 sm:flex-row sm:items-center">
          <p className="font-[var(--font-mono)] text-[0.62rem] uppercase tracking-[0.16em] text-[var(--ink-faint)]">
            Bloomfield, NJ · est. {site.established}
          </p>
          <a
            href={site.builtBy}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 font-[var(--font-mono)] text-[0.62rem] uppercase tracking-[0.14em] text-[var(--ink-faint)] transition-colors hover:text-[var(--navy)]"
          >
            <span
              aria-hidden="true"
              className="inline-flex h-4 w-4 rotate-[-8deg] items-center justify-center rounded-[2px] border border-current text-[0.5rem] leading-none"
            >
              B
            </span>
            built bysemaj.com
          </a>
        </div>
      </div>
    </footer>
  );
}
