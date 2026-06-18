import { site } from "@/lib/site";

export default function Shelves() {
  return (
    <section
      id="shelves"
      className="lane-shelves relative border-t border-[var(--line)] px-5 py-16 sm:px-8 sm:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <div className="reveal flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="stamp text-[var(--navy)]">Bottle Shop</span>
            <h2 className="mt-3 text-[clamp(2.1rem,8vw,3.6rem)] text-[var(--navy)]">
              The shelves
            </h2>
          </div>
          <p className="max-w-xs text-[0.98rem] text-[var(--ink-soft)] sm:text-right">
            What the night asks for, we already stocked. Walk the aisle or call and
            we will set it aside.
          </p>
        </div>

        {/* big plate + stacked smaller plates */}
        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-[1.4fr_1fr]">
          <div className="plate reveal h-[260px] md:h-full md:min-h-[420px]">
            <img
              src="/img/shelves.jpg"
              alt="A bright aisle of wine and bottles on the shelves at Berkeley Liquors"
              loading="lazy"
            />
            <span className="tag absolute bottom-4 left-4">The wall of wine</span>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-1">
            <div className="plate reveal h-[200px]" style={{ ["--d" as string]: "0.06s" }}>
              <img
                src="/img/beer.jpg"
                alt="A stocked cold case of beer, singles to cases"
                loading="lazy"
              />
              <span className="tag absolute bottom-4 left-4">Cold case</span>
            </div>
            <div className="plate reveal h-[200px]" style={{ ["--d" as string]: "0.12s" }}>
              <img
                src="/img/pour.jpg"
                alt="A glass of red wine being poured"
                loading="lazy"
              />
              <span className="tag absolute bottom-4 left-4">Poured right</span>
            </div>
          </div>
        </div>

        {/* category tickets */}
        <div className="mt-4 grid grid-cols-1 gap-px overflow-hidden rounded border border-[var(--navy-line)] bg-[var(--navy-line)] sm:grid-cols-3">
          {site.shelves.map((s, i) => (
            <div
              key={s.tag}
              className="reveal bg-[var(--paper)] p-6"
              style={{ ["--d" as string]: `${0.05 * i}s` }}
            >
              <p className="font-[var(--font-mono)] text-[0.7rem] uppercase tracking-[0.16em] text-[var(--navy)]">
                0{i + 1} / {s.tag}
              </p>
              <p className="mt-3 text-[0.98rem] text-[var(--ink-soft)]">{s.line}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
