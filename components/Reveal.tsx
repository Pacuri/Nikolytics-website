"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/* Gentle opacity reveal for sections below the fold. Content is readable at rest. */
export default function Reveal() {
  const pathname = usePathname();
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!("IntersectionObserver" in window)) return;
    const els = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    els.forEach((el) => {
      if (el.getBoundingClientRect().top > window.innerHeight * 0.92) el.classList.add("pending");
    });
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.remove("pending");
            io.unobserve(e.target);
          }
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.1 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [pathname]);
  return null;
}
