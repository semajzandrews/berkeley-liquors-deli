import { site } from "@/lib/site";

export default function Visit() {
  return (
    <section
      id="visit"
      className="relative px-5 py-16 sm:px-8 sm:py-24"
      style={{ background: "var(--navy)", color: "var(--paper)" }}
    >
      <div className="mx-auto max-w-6xl">
        <div className="reveal">
          <span className="stamp" style={{ color: "var(--mustard)" }}>
            Stop in on Franklin
          </span>
          <h2 className="mt-3 text-[clamp(2.1rem,8vw,3.6rem)] text-[var(--paper)]">
            The corner of Franklin Street.
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-[0.9fr_1.1fr]">
          {/* the ticket of facts */}
          <div className="reveal flex flex-col gap-7">
            <div>
              <p className="font-[var(--font-mono)] text-[0.66rem] uppercase tracking-[0.18em] text-[var(--mustard)]">
                Address
              </p>
              <a
                href={`https://www.google.com/maps?q=${site.mapQuery}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 block text-[1.1rem] text-[var(--paper)] underline-offset-4 hover:underline"
              >
                {site.street}
                <br />
                {site.city}, {site.state} {site.zip}
              </a>
            </div>

            <div>
              <p className="font-[var(--font-mono)] text-[0.66rem] uppercase tracking-[0.18em] text-[var(--mustard)]">
                Hours
              </p>
              <ul className="mt-2 flex flex-col gap-1.5">
                {site.hours.map((h) => (
                  <li
                    key={h.days}
                    className="flex items-baseline justify-between gap-4 border-b border-[rgba(243,234,216,0.14)] pb-1.5 text-[0.96rem]"
                  >
                    <span className="text-[rgba(243,234,216,0.85)]">{h.days}</span>
                    <span className="font-[var(--font-mono)] text-[0.86rem] text-[var(--paper)]">
                      {h.time}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap gap-3">
              <a href={site.phoneHref} className="btn btn-red">
                Call to confirm a bottle
              </a>
              <a
                href={`https://www.google.com/maps?q=${site.mapQuery}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
                style={{
                  background: "transparent",
                  color: "var(--paper)",
                  border: "1.5px solid rgba(243,234,216,0.4)",
                }}
              >
                Get directions
              </a>
            </div>
            <p className="font-[var(--font-mono)] text-[0.78rem] tracking-[0.04em] text-[var(--mustard)]">
              {site.phone}
            </p>
          </div>

          {/* the map as the venue panel */}
          <div className="map-frame reveal h-[320px] md:h-auto md:min-h-[420px]">
            <iframe
              title={`${site.name} location, ${site.fullAddress}`}
              src={`https://www.google.com/maps?q=${site.mapQuery}&z=16&output=embed`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
