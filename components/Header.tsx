import Link from "next/link";
import Image from "next/image";
import { site } from "@/lib/site";
import CalLink from "./CalLink";

export default function Header() {
  return (
    <header className="wrap header">
      <div className="brand">
        <Link href="/" aria-label="Nikolytics home">
          <Image src="/images/logo-dark.png" alt="Nikolytics" width={1400} height={308} priority style={{ height: "100%", width: "auto" }} />
        </Link>
        <span className="motto">{site.motto}</span>
      </div>
      <nav className="nav" aria-label="Primary">
        {site.nav.map((n) => (
          <Link key={n.href} href={n.href}>{n.label}</Link>
        ))}
      </nav>
      <CalLink className="cta">Let&rsquo;s talk</CalLink>
    </header>
  );
}
