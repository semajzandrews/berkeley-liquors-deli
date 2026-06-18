import { site } from "@/lib/site";

export default function Counter() {
  return (
    <section
      id="counter"
      className="lane-counter relative px-5 py-16 sm:px-8 sm:py-24"
      style={{ background: "var(--paper-2)" }}
    >
      <div className="mx-auto max-w-6xl">
        <div className="reveal flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="stamp text-[var(--red)]">Sandwich Counter</span>
            <h2 className="mt-3 text-[clamp(2.1rem,8vw,3.6rem)] text-[var(--red)]">
              The counter
            </h2>
          </div>
          <p className="max-w-xs text-[0.98rem] text-[var(--ink-soft)] sm:text-right">
            Sliced to order, wrapped to go. Grab the sandwich, grab the bottle, out
            the door on Franklin.
          </p>
        </div>

        {/* the hero sub on the left, two plates right */}
        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-[1fr_1.3fr]">
          <div className="order-2 grid grid-cols-2 gap-4 md:order-1 md:grid-cols-1">
            <div className="plate reveal h-[200px]">
              <img
                src="/img/counter.jpg"
                alt="Subs wrapped in paper and tied with twine on the counter"
                loading="lazy"
              />
              <span
                className="tag absolute bottom-4 left-4"
                style={{ background: "var(--red)" }}
              >
                Wrapped to go
              </span>
            </div>
            <div
              className="plate reveal h-[200px]"
              style={{ ["--d" as string]: "0.08s" }}
            >
              <img
                src="/img/board.jpg"
                alt="A board of sliced cold cuts and cured meats"
                loading="lazy"
              />
              <span
                className="tag absolute bottom-4 left-4"
                style={{ background: "var(--red)" }}
              >
                By the pound
              </span>
            </div>
          </div>
          <div
            className="plate reveal order-1 h-[300px] md:order-2 md:h-full md:min-h-[420px]"
            style={{ ["--d" as string]: "0.04s" }}
          >
            <img
              src="/img/stack.jpg"
              alt="A tall stacked Italian sub layered with meats, cheese, and tomato"
              loading="lazy"
            />
            <span
              className="tag absolute bottom-4 left-4"
              style={{ background: "var(--red)" }}
            >
              Built to order
            </span>
          </div>
        </div>

        {/* counter tickets */}
        <div className="mt-4 grid grid-cols-1 gap-px overflow-hidden rounded border border-[rgba(192,57,43,0.3)] bg-[rgba(192,57,43,0.3)] sm:grid-cols-3">
          {site.counter.map((c, i) => (
            <div
              key={c.tag}
              className="reveal bg-[var(--paper-2)] p-6"
              style={{ ["--d" as string]: `${0.05 * i}s` }}
            >
              <p className="font-[var(--font-mono)] text-[0.7rem] uppercase tracking-[0.16em] text-[var(--red)]">
                0{i + 1} / {c.tag}
              </p>
              <p className="mt-3 text-[0.98rem] text-[var(--ink-soft)]">{c.line}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
