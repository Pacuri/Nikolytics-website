import Image from "next/image";
import CalLink from "./CalLink";

export default function Hero() {
  return (
    <section className="hero" aria-label="Introduction">
      <div className="wrap">
        <div className="plate-wrap">
          <div className="hero-plate">
            <Image
              src="/images/hero-seedlings.jpg"
              alt="Seedlings on forest moss, with a larger plant drawn above the tallest one"
              fill
              priority
              sizes="(max-width: 1360px) 100vw, 1360px"
              className="hero-img"
            />
            <div className="hero-blur" aria-hidden="true" />
            <div className="hero-copy">
              <p className="statement">
                Using innovative technologies to <b>streamline nonprofit data and operations</b>, keeping{" "}
                <b>administrative staffing lean</b> as the mission scales.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="wrap hero-actions">
        <CalLink className="textlink">Let&rsquo;s talk</CalLink>
      </div>
      <div className="hero-after" />
    </section>
  );
}
