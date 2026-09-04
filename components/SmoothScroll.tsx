"use client";

import { useEffect, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";
import Lenis from "lenis";

const HEADER_OFFSET = -24;

/*
  Inertial scrolling for the whole site, plus two behaviours that keep
  navigation feeling like one continuous page:
  1. Opening a new page starts at the top. If the address carries a hash,
     the page starts at the top and glides down to that section.
  2. Clicking a link to a section on the current page scrolls to it
     instead of jumping.
  All of it is disabled for people who prefer reduced motion.
*/
export default function SmoothScroll() {
  const pathname = usePathname();
  const router = useRouter();
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if ("scrollRestoration" in history) history.scrollRestoration = "manual";

    const lenis = new Lenis({ lerp: 0.085, wheelMultiplier: 0.9, smoothWheel: true });
    lenisRef.current = lenis;
    let frame = 0;
    const raf = (t: number) => {
      lenis.raf(t);
      frame = requestAnimationFrame(raf);
    };
    frame = requestAnimationFrame(raf);

    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const a = (e.target as HTMLElement).closest("a[href]") as HTMLAnchorElement | null;
      if (!a) return;
      const url = new URL(a.href, location.href);
      if (url.origin !== location.origin || !url.hash) return;
      if (a.target && a.target !== "_self") return;
      if (url.pathname !== location.pathname) {
        /* A section on another page: go there without the browser's jump, then glide (see the effect below). */
        e.preventDefault();
        e.stopPropagation();
        router.push(url.pathname + url.search + url.hash, { scroll: false });
        return;
      }
      const target = document.querySelector(url.hash);
      if (!target) return;
      e.preventDefault();
      e.stopPropagation();
      history.pushState(null, "", url.hash);
      lenis.scrollTo(target as HTMLElement, { offset: HEADER_OFFSET, duration: 1.4 });
    };
    /* Capture phase, so this runs before Next's own link handling. */
    document.addEventListener("click", onClick, true);

    return () => {
      document.removeEventListener("click", onClick, true);
      cancelAnimationFrame(frame);
      lenis.destroy();
      lenisRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /* Runs on every route change: start at the top, then glide to a hash if there is one. */
  useEffect(() => {
    const lenis = lenisRef.current;
    const hash = window.location.hash;
    if (!lenis) {
      if (hash) document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" });
      else window.scrollTo(0, 0);
      return;
    }
    lenis.scrollTo(0, { immediate: true });
    if (hash) {
      const target = document.querySelector(hash) as HTMLElement | null;
      if (target) {
        const t = setTimeout(() => lenis.scrollTo(target, { offset: HEADER_OFFSET, duration: 1.6 }), 120);
        return () => clearTimeout(t);
      }
    }
  }, [pathname]);

  return null;
}
