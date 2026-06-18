import { site } from "@/lib/site";

export default function Proof() {
  return (
    <section className="relative border-t border-[var(--line)] px-5 py-16 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="reveal">
          <span className="stamp text-[var(--ink-soft)]">What folks say</span>
          <h2 className="mt-3 max-w-2xl text-[clamp(1.8rem,6vw,3rem)] text-[var(--ink)]">
            {site.reputationLine}
          </h2>
          <p className="mt-3 font-[var(--font-mono)] text-[0.7rem] uppercase tracking-[0.14em] text-[var(--ink-faint)]">
            Family run since {site.established} · the same corner, the same hello
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
          {site.voices.map((v, i) => (
            <figure
              key={i}
              className="ticket ticket-perf reveal flex flex-col gap-4 p-6 pt-7"
              style={{ ["--d" as string]: `${0.06 * i}s` }}
            >
              <span
                aria-hidden="true"
                className="font-[var(--font-display)] text-3xl leading-none text-[var(--mustard)]"
              >
                &ldquo;
              </span>
              <blockquote className="text-[1.02rem] text-[var(--ink)]">
                {v.quote}
              </blockquote>
              <figcaption className="mt-auto font-[var(--font-mono)] text-[0.66rem] uppercase tracking-[0.12em] text-[var(--ink-faint)]">
                — {v.source}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
