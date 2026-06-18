"use client";

import { useEffect, useRef, useState } from "react";
import { site } from "@/lib/site";

/* THE SIGNATURE — POUR.
   Drag down on the glass (or just scroll the hero) and wine fills it empty->full.
   At 92% the glass tops off and the "See the shelves" CTA stamps in.
   Idle: reactive-on-approach (a composed ~20% rest pour, brightens on pointer enter).
   Reduced motion / no-JS: a pre-filled glass at ~70%, CTA visible from load.

   Perf (§S4): rect cached at pointer capture; pointer events ENQUEUE a target,
   a single rAF DRAINS toward it; no getBoundingClientRect or allocations in the tick. */

const IDLE = 0.2;
const THRESHOLD = 0.92;

export default function Hero() {
  const glassRef = useRef<HTMLDivElement>(null);
  const fillRectRef = useRef<SVGRectElement>(null);
  const meniscusRef = useRef<SVGEllipseElement>(null);
  const streamRef = useRef<SVGRectElement>(null);

  // mutable animation state (no re-render per frame)
  const target = useRef(IDLE);
  const current = useRef(IDLE);
  const raf = useRef(0);
  const dragging = useRef(false);
  const toppedRef = useRef(false);
  const capRect = useRef({ top: 0, height: 1 });

  const [topped, setTopped] = useState(false);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) {
      setReduced(true);
      paint(0.7);
      return;
    }
    paint(IDLE); // composed idle pour; fills only when a finger drags it
    return () => cancelAnimationFrame(raf.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function paint(v: number) {
    // bowl interior: y 26 (top) .. 156 (bottom), height 130
    const top = 156 - v * 130;
    const rect = fillRectRef.current;
    const men = meniscusRef.current;
    if (rect) {
      rect.setAttribute("y", top.toFixed(1));
      rect.setAttribute("height", (156 - top).toFixed(1));
    }
    if (men) {
      men.setAttribute("cy", top.toFixed(1));
      men.setAttribute("rx", (16 + v * 60).toFixed(1));
      men.setAttribute("opacity", v > IDLE + 0.02 ? "0.9" : "0.5");
    }
  }

  function ensureLoop() {
    if (raf.current) return;
    const tick = () => {
      const t = target.current;
      const c = current.current;
      const next = c + (t - c) * 0.18;
      current.current = Math.abs(t - c) < 0.001 ? t : next;
      paint(current.current);

      const stream = streamRef.current;
      if (stream) {
        const flowing = dragging.current && t > c + 0.004;
        stream.setAttribute("opacity", flowing ? "0.85" : "0");
      }

      // ref-compare so the threshold state is never read stale from the closure
      const isTopped = current.current >= THRESHOLD;
      if (isTopped !== toppedRef.current) {
        toppedRef.current = isTopped;
        setTopped(isTopped);
      }

      if (Math.abs(target.current - current.current) < 0.001) {
        raf.current = 0;
        return;
      }
      raf.current = requestAnimationFrame(tick);
    };
    raf.current = requestAnimationFrame(tick);
  }

  // pointer drag on the glass: the finger becomes the bottle
  function onPointerDown(e: React.PointerEvent) {
    if (reduced) return;
    const el = glassRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    capRect.current = { top: r.top, height: r.height || 1 };
    dragging.current = true;
    (e.target as Element).setPointerCapture?.(e.pointerId);
    updateFromPointer(e.clientY);
  }
  function onPointerMove(e: React.PointerEvent) {
    if (!dragging.current) return;
    updateFromPointer(e.clientY);
  }
  function onPointerUp(e: React.PointerEvent) {
    dragging.current = false;
    (e.target as Element).releasePointerCapture?.(e.pointerId);
  }
  function updateFromPointer(clientY: number) {
    const { top, height } = capRect.current;
    const p = (clientY - top) / height; // 0 top .. 1 bottom of glass box
    target.current = Math.max(IDLE, Math.min(1, IDLE + p * 1.1));
    ensureLoop();
  }

  return (
    <section
      id="top"
      className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-2 px-5 pb-10 pt-28 sm:px-8 md:grid-cols-[1.05fr_0.95fr] md:gap-8 md:pt-32"
    >
      {/* left: the words */}
      <div className="reveal relative z-10">
        <span className="stamp text-[var(--red)]">
          Bottle Shop · Sandwich Counter
        </span>
        <h1 className="mt-5 text-[clamp(2.9rem,12vw,5.6rem)] text-[var(--ink)]">
          The corner
          <br />
          <span className="text-[var(--navy)]">pours</span>{" "}
          <span className="text-[var(--ink-soft)]">&</span>{" "}
          <span className="text-[var(--red)]">stacks</span>.
        </h1>
        <p className="mt-5 max-w-md text-[1.05rem] text-[var(--ink-soft)]">
          Wine, beer, and a real sandwich, one stop on Franklin Street. We will
          have it poured and stacked by the time you get here.
        </p>

        <div className="mt-7 flex flex-wrap items-center gap-3">
          <a href={site.phoneHref} className="btn btn-red">
            Call the corner
          </a>
          <a
            href="#shelves"
            className="btn btn-navy"
            data-topped={topped ? "1" : "0"}
            style={{
              borderColor: topped ? "var(--navy)" : undefined,
              background: topped ? "rgba(26,47,74,0.08)" : undefined,
            }}
          >
            {topped ? "Topped off · see the shelves" : "See the shelves"}
          </a>
        </div>

        <p className="mt-5 font-[var(--font-mono)] text-[0.7rem] uppercase tracking-[0.16em] text-[var(--ink-faint)]">
          129 Franklin St · Bloomfield, NJ · est. 1993
        </p>
      </div>

      {/* right: the glass (the signature surface) */}
      <div
        ref={glassRef}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        className="reveal relative mx-auto flex h-[58vw] max-h-[420px] min-h-[300px] w-full max-w-[340px] cursor-grab touch-none select-none items-center justify-center active:cursor-grabbing"
        style={{ ["--d" as string]: "0.1s" }}
        role="img"
        aria-label="A wine glass that fills as you drag"
      >
        <svg
          viewBox="0 0 200 320"
          className="h-full w-full overflow-visible"
          aria-hidden="true"
        >
          <defs>
            <clipPath id="bowl">
              {/* interior of the goblet bowl */}
              <path d="M40 26 C40 110 70 156 100 156 C130 156 160 110 160 26 Z" />
            </clipPath>
            <linearGradient id="wine" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="var(--wine-2)" />
              <stop offset="1" stopColor="var(--wine)" />
            </linearGradient>
          </defs>

          {/* poured stream from the bottle lip (only while flowing) */}
          <rect
            ref={streamRef}
            x="97"
            y="-6"
            width="6"
            height="40"
            rx="3"
            fill="var(--wine-2)"
            opacity="0"
          />

          {/* the liquid, clipped to the bowl */}
          <g clipPath="url(#bowl)">
            <rect
              ref={fillRectRef}
              x="34"
              y={(156 - IDLE * 130).toFixed(1)}
              width="132"
              height={(IDLE * 130).toFixed(1)}
              fill="url(#wine)"
            />
            <ellipse
              ref={meniscusRef}
              cx="100"
              cy={(156 - IDLE * 130).toFixed(1)}
              rx={(16 + IDLE * 60).toFixed(1)}
              ry="5"
              fill="var(--wine-2)"
              opacity="0.5"
            />
          </g>

          {/* glass outline */}
          <path
            d="M38 22 C38 112 68 160 100 160 C132 160 162 112 162 22 Z"
            fill="none"
            stroke="var(--navy)"
            strokeWidth="3"
          />
          {/* highlight */}
          <path
            d="M52 34 C52 96 66 132 84 146"
            fill="none"
            stroke="rgba(255,255,255,0.6)"
            strokeWidth="3"
            strokeLinecap="round"
          />
          {/* stem + base */}
          <rect x="96" y="160" width="8" height="118" fill="var(--navy)" />
          <ellipse cx="100" cy="286" rx="44" ry="9" fill="var(--navy)" />
          <ellipse
            cx="100"
            cy="283"
            rx="44"
            ry="7"
            fill="none"
            stroke="rgba(255,255,255,0.25)"
            strokeWidth="2"
          />
        </svg>

        {/* hint */}
        <span className="pointer-events-none absolute -bottom-1 left-1/2 -translate-x-1/2 whitespace-nowrap font-[var(--font-mono)] text-[0.62rem] uppercase tracking-[0.22em] text-[var(--ink-faint)]">
          {reduced ? "poured" : "drag to pour"}
        </span>
      </div>
    </section>
  );
}
