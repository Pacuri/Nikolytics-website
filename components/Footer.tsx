import Link from "next/link";
import Image from "next/image";
import { site } from "@/lib/site";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="brand">
          <Link href="/" aria-label="Nikolytics home">
            <Image src="/images/logo-dark.png" alt="Nikolytics" width={1400} height={308} style={{ height: "100%", width: "auto" }} />
          </Link>
          <span className="motto">{site.motto}</span>
        </div>
        <nav aria-label="Footer">
          {site.nav.map((n) => (
            <Link key={n.href} href={n.href}>{n.label}</Link>
          ))}
        </nav>
        <div className="meta">
          <span>Technology and operational structure for U.S. nonprofit organizations, charities and NGOs.</span>
          <a href={site.calUrl} target="_blank" rel="noopener">Book a discovery call</a>
        </div>
        <div className="legal">
          <span className="mono">Nikolytics, {year}</span>
          <span className="mono">Privacy and terms to follow</span>
        </div>
      </div>
    </footer>
  );
}
