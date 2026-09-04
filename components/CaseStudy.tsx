const proofs = [
  ["Shane no longer needs to build a large operations team just to keep the foundation running.", "A team of 5 now handles what 15 used to do."],
  ["No more chasing forms, updating spreadsheets or entering the same information more than once.", "What used to take hours now takes minutes."],
  ["The numbers are already there when Shane needs them.", "What used to take a week is now review and send."],
  ["Previously, the administrative team entered the same information multiple times across separate systems.", "Nine different tools now work together as one."],
  ["The foundation can stay lean as it grows.", "More funding can go toward athletes and programs instead of administration."],
];

const testimonial = [
  "At the beginning of the American Paragons Foundation journey, the work I actually cared about, getting Team USA athletes the support they need, was maybe a fourth of my week. The rest was administrative. I was constantly chasing athlete information across forms and spreadsheets, re-entering the same data into three different tools, answering the same questions from donors and partners over and over, and manually keeping track of who was in which program and what stage they were at.",
  "The realistic alternatives were to make the nonprofit my full-time job at 50 to 60 hours a week, or hire a team of four or five people to manage operations. Neither was possible at our size.",
  "What Nikolytics built with us was transformational.",
  "The first improvement was operational. They took a set of disconnected tools and stitched them into one system. Athlete intake, roster management, program enrollment, and status tracking now live in one place and talk to each other. Information is entered once and flows everywhere it's needed. Work that used to take me hours a week now takes minutes, and the ambiguity that caused most of our internal confusion is simply gone.",
  "They also went and got us direct API access with our partner organizations, which involved sitting down with their technical teams, working through their requirements, and integrating our back end with theirs so the data moves between us automatically. Athlete records, program participation, and eligibility information stay in sync without anyone emailing a spreadsheet. Those integrations are the kind of thing most small nonprofits never get, because they don't have anyone who can hold both the relationship conversation and the technical one. Nikolytics handled both.",
  "They then built KPI tracking into the platform itself, so the numbers come out of the system in real time rather than having to consolidate anything. I can see how many athletes we're serving, which programs are actually producing outcomes, where athletes are dropping off, and what each dollar is supporting. All of our board reports generate from that same data. What used to be a week of assembling slides is now something I review and send. More importantly, I know where to put our next dollar, because I can see with real clarity which parts of the organization are producing impact and which need investment.",
  "The final door they unlocked for us was financial. Because the platform absorbs so much work, the money that would have gone to staffing goes into programs instead. Our expansion roadmap used to assume roughly fifteen hires to cover operations, partner coordination, reporting, and support. We can now do the same work with five people. This is a complete game changer for our target population, because now we can put a majority of what we raise directly into athletes rather than into admin bloat.",
  "The thing I'd tell anyone considering working with Nikolytics: they didn't take an order for a website. They spent time truly getting to understand how my organization actually ran, found the places where effort was being wasted, and designed something incredible around them. I genuinely cannot comprehend how creative, empathetic, and capable this crew is at Nikolytics. They came up with solutions to problems I didn't even know I had, and now our foundation is operating like a powerhouse with only 5 employees.",
];

export default function CaseStudy() {
  return (
    <section className="wrap" aria-labelledby="case-title" id="work">
      <div className="field-head">
        <span className="mono">How we make a difference</span>
        <span className="mono">American Paragons Foundation</span>
      </div>
      <div className="field">
        <div className="field-intro reveal">
          <h2 className="section-title" id="case-title">
            Nine tools, one system, and a foundation that stays <em>lean</em> as it grows.
          </h2>
          <p className="lede">
            Shane runs the American Paragons Foundation, which supports Team USA athletes. Before Nikolytics, the work he
            cared about took roughly a quarter of his week.
          </p>
        </div>

        <div className="spread">
          <div className="spread-media reveal">
            <div className="video" role="img" aria-label="Reserved space for the on-camera testimonial, currently in production">
              <div className="wash" />
              <div className="video-play" aria-hidden="true">
                <svg viewBox="0 0 16 16" fill="currentColor"><path d="M3 1.5v13l11-6.5z" /></svg>
              </div>
              <span className="name">Shane, American Paragons Foundation</span>
              <span className="mono">Testimonial in production</span>
            </div>
            <blockquote className="quote quote-slot">
              <p>
                Information is entered once and flows everywhere it&rsquo;s needed. Work that used to take me hours a week now
                takes minutes.
              </p>
              <cite>Shane, American Paragons Foundation</cite>
            </blockquote>
          </div>

          <div className="spread-list reveal">
            <ul className="proofs">
              {proofs.map(([a, b]) => (
                <li className="proof" key={b}>
                  {a} <b>{b}</b>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <details className="account reveal">
          <summary>
            Read Shane&rsquo;s complete testimonial <span className="plus" aria-hidden="true" />
          </summary>
          <div className="account-body">
            <div className="who">Supplied testimonial, reproduced unedited.</div>
            <div className="account-text">
              {testimonial.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </details>
      </div>
    </section>
  );
}
