const steps = [
  ["Step one", "Understand", "We sit with your team and map every system, form, spreadsheet and handoff, then follow the information through them to find where it is re-entered, where it waits, and where it gets lost."],
  ["Step two", "Structure", "We design one operational structure around how your organization actually runs: which information lives where, who touches it, and where it needs to flow on its own."],
  ["Step three", "Build", "We connect, automate and build what the structure calls for, integrate directly with partner organizations, and put reporting inside the system so the numbers are there when you need them."],
];

export default function Approach() {
  return (
    <section className="wrap" aria-labelledby="how-title" id="approach">
      <div className="field-head">
        <span className="mono">Approach</span>
        <span className="mono">Understand, structure, build</span>
      </div>
      <div className="block">
        <div className="block-intro reveal">
          <h2 className="block-title" id="how-title">
            Every organization runs differently. The structure has to be built around <em>yours</em>.
          </h2>
          <p className="lede">
            The same people hold the relationship conversation and the technical one, from the first mapping session to
            the last integration.
          </p>
        </div>
        <div className="steps reveal">
          {steps.map(([n, h, p]) => (
            <div className="step" key={h}>
              <span className="n mono">{n}</span>
              <h3>{h}</h3>
              <p>{p}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
