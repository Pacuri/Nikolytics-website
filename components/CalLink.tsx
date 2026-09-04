"use client";

import { useEffect, type ReactNode } from "react";
import { getCalApi } from "@calcom/embed-react";
import { site } from "@/lib/site";

type Props = { className?: string; children: ReactNode };

/*
  Every "Let's talk" on the site. Opens the Cal.com booking page in a modal
  on top of the current page. The href is the real booking URL, so the link
  still works if the embed script has not loaded or JavaScript is off.
*/
export default function CalLink({ className, children }: Props) {
  useEffect(() => {
    (async () => {
      const cal = await getCalApi({ namespace: "discovery" });
      cal("ui", {
        theme: "light",
        cssVarsPerTheme: { light: { "cal-brand": "#102C26" }, dark: { "cal-brand": "#0099A4" } },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);

  return (
    <a
      href={site.calUrl}
      className={className}
      data-cal-namespace="discovery"
      data-cal-link={site.calLink}
      data-cal-config='{"layout":"month_view","theme":"light"}'
      target="_blank"
      rel="noopener"
    >
      {children}
    </a>
  );
}
