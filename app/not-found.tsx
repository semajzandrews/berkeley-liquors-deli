import { site } from "@/lib/site";

export default function NotFound() {
  return (
    <main className="flex min-h-[100svh] flex-col items-center justify-center px-6 text-center">
      <span className="stamp text-[var(--red)]">Berkeley Liquors & Deli</span>
      <h1 className="mt-5 text-[clamp(2.4rem,10vw,4.5rem)] text-[var(--navy)]">
        Wrong aisle.
      </h1>
      <p className="mt-3 max-w-sm text-[1.05rem] text-[var(--ink-soft)]">
        That page is not on our shelves. The corner is back this way.
      </p>
      <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
        <a href="/" className="btn btn-red">
          Back to the corner
        </a>
        <a href={site.phoneHref} className="btn btn-navy">
          Call {site.phone}
        </a>
      </div>
    </main>
  );
}
