"use client";

import { useEffect, useState } from "react";
import { site } from "@/lib/site";

function openNow(): boolean {
  const now = new Date();
  const h = now.getHours() + now.getMinutes() / 60;
  const slot = site.hoursByDay[now.getDay()];
  return h >= slot.open && h < slot.close;
}

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState<boolean | null>(null);

  useEffect(() => {
    setOpen(openNow());
    const onScroll = () => setScrolled(window.scrollY > 36);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className="fixed inset-x-0 top-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? "rgba(243,234,216,0.9)" : "transparent",
          backdropFilter: scrolled ? "blur(10px)" : "none",
          borderBottom: scrolled
            ? "1px solid var(--line)"
            : "1px solid transparent",
        }}
      >
        <nav
          className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3 sm:px-8"
          aria-label="Main"
        >
          <a href="#top" className="flex min-h-[44px] flex-col justify-center leading-none">
            <span className="font-[var(--font-display)] text-[1.35rem] font-bold tracking-[-0.02em] text-[var(--navy)]">
              Berkeley
            </span>
            <span className="font-[var(--font-mono)] text-[0.56rem] uppercase tracking-[0.28em] text-[var(--red)]">
              Liquors & Deli
            </span>
          </a>

          <div
            className="hidden items-center gap-7 font-[var(--font-mono)] text-[0.72rem] uppercase tracking-[0.12em] text-[var(--ink-soft)] sm:flex"
          >
            <a href="#shelves" className="py-3 transition-colors hover:text-[var(--navy)]">
              The Shelves
            </a>
            <a href="#counter" className="py-3 transition-colors hover:text-[var(--red)]">
              The Counter
            </a>
            <a href="#visit" className="py-3 transition-colors hover:text-[var(--ink)]">
              Visit
            </a>
          </div>

          {/* call: full label on >=sm, icon-only circle at 375px */}
          <a
            href={site.phoneHref}
            aria-label={`Call ${site.name} at ${site.phone}`}
            className="btn btn-red !min-h-[44px] !gap-2 !px-3 !py-2 max-sm:!h-[46px] max-sm:!w-[46px] max-sm:!rounded-full max-sm:!p-0"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M6.5 3h3l1.5 4-2 1.5a11 11 0 005 5L15.5 11l4 1.5v3a2 2 0 01-2 2A14 14 0 014.5 5a2 2 0 012-2z"
                fill="currentColor"
              />
            </svg>
            <span className="max-sm:hidden">Call</span>
          </a>
        </nav>
      </header>

      {/* open/closed status strip just under the bar; greets at the hero, then
          gets out of the way so it never overlaps section content on scroll */}
      <div
        className="pointer-events-none fixed left-1/2 top-[58px] z-40 -translate-x-1/2 transition-opacity duration-300 sm:left-auto sm:right-8 sm:translate-x-0"
        style={{ opacity: scrolled ? 0 : 1 }}
      >
        {open !== null && (
          <span
            className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-[var(--paper)] px-3 py-1 font-[var(--font-mono)] text-[0.62rem] uppercase tracking-[0.14em] text-[var(--ink-soft)] shadow-sm"
            style={{ pointerEvents: scrolled ? "none" : "auto" }}
          >
            <span className={`dot ${open ? "dot-open" : "dot-closed"}`} />
            {open ? "Open now" : "Closed now"}
          </span>
        )}
      </div>
    </>
  );
}
