export default function Services() {
  return (
    <section className="wrap" aria-labelledby="work-title" id="about">
      <div className="field-head">
        <span className="mono">What we do</span>
        <span className="mono">Three kinds of work</span>
      </div>
      <div className="block">
        <div className="block-intro reveal">
          <h2 className="block-title" id="work-title">
            The technology and operational structure behind an <em>efficient</em> nonprofit.
          </h2>
          <p className="lede">
            Nikolytics connects data, tools and workflows, removes repeated administration, and builds platforms around
            the real work of an organization, so a small team can run more capacity as the mission grows.
          </p>
        </div>
        <div className="services reveal">
          <div className="service">
            <h3>Operational systems and integrations</h3>
            <p>
              We study how your organization actually operates, map the systems and handoffs your team touches, and find
              where effort is wasted. Then we connect and restructure those systems so information is entered once and
              used everywhere.
            </p>
            <p className="typical">
              Donor CRMs, case management, accounting, payroll, volunteer databases, email tools, intake forms, scheduling
              and spreadsheets connected. Movement of information automated. Real-time KPI and board reporting. Direct
              integrations with partner organizations.
            </p>
          </div>
          <div className="service">
            <h3>Purpose-built platforms</h3>
            <p>
              We build websites and operational platforms around the workflows your team already runs, so the system fits
              the work from the first day.
            </p>
            <p className="typical">
              Intake portals. Program enrollment and management. Participant and beneficiary records. Partner portals.
              Roster and status management. Eligibility systems. Reporting dashboards. Custom internal tools.
              Public-facing websites.
            </p>
          </div>
          <div className="service">
            <h3>Digital foundations for new nonprofits</h3>
            <p>
              For people establishing a new organization, we build the website, platform and operational structure needed
              to begin properly, so administration stays light from the start.
            </p>
            <p className="typical">
              Legal formation, filings and registration are handled by your attorney or formation service. Nikolytics
              builds the digital and operational foundation that runs alongside them.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
