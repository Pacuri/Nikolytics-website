import CalLink from "./CalLink";

export default function Closing() {
  return (
    <section className="close" aria-labelledby="close-title">
      <div className="wrap">
        <h2 className="close-title" id="close-title">
          If your team is holding your systems together <em>by hand</em>, we should talk.
        </h2>
        <div className="close-side">
          <p>
            A first conversation is about how your organization runs today: the tools, the handoffs, and where the
            hours go. Nothing is proposed until that is understood.
          </p>
          <CalLink className="cta light">Let&rsquo;s talk</CalLink>
        </div>
      </div>
    </section>
  );
}
