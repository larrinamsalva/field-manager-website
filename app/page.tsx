import BetaSignupForm from "./BetaSignupForm";

export default function Home() {
  const workflow = [
    ["01", "Customer", "Keep the customer and job details together from the start."],
    ["02", "Estimate", "Build the work from your saved services and rates."],
    ["03", "Schedule", "Turn approved work into a real job on the calendar."],
    ["04", "Dispatch", "Assign the crew and get the right person to the right job."],
    ["05", "Field Work", "Run the job, track the work and capture what happened."],
    ["06", "Complete", "Finish the job with proof, approvals and closeout."],
    ["07", "Records", "Keep the finished work connected to the business history."],
  ];

  const industries = [
    ["Contractors", "Jobs, crews, estimates and field records in one place."],
    ["Cleaning", "Recurring visits, scheduled work and job closeout."],
    ["Lawn & Property Care", "Route crews from scheduled service through completion."],
    ["Handyman & Maintenance", "Keep customers, work details and proof connected."],
    ["HVAC & Appliance", "Coordinate service calls, employees and job history."],
    ["Plumbing & Electrical", "Move quoted work into scheduling and field execution."],
    ["Delivery & Mobile Teams", "Organize assignments, travel and work in the field."],
    ["Your Field", "A flexible foundation for businesses that work beyond a desk."],
  ];

  return (
    <main className="site-shell">
      <header className="site-header">
        <a className="brand" href="#" aria-label="Field Manager home">
          <span className="brand-mark">FM</span>
          <span className="brand-name">FIELD MANAGER</span>
        </a>

        <nav className="site-nav" aria-label="Main navigation">
          <a href="#product">Product</a>
          <a href="#industries">Industries</a>
          <a href="#automation">Automation</a>
          <a href="#about">About</a>
          <a href="#beta">Beta Testing</a>
        </nav>

        <a className="nav-cta" href="#beta">Become a Beta Tester</a>
      </header>

      <section className="hero" id="product">
        <div className="hero-copy">
          <p className="eyebrow">FIELD SERVICE BUSINESS SOFTWARE</p>
          <h1>BIG IDEAS<br />DON&apos;T FIT IN<br />SMALL POCKETS.</h1>
          <p className="tagline">Any Field. Any Road. Any Business.</p>
          <p className="intro">
            Manage customers, estimates, scheduling, dispatch, field work,
            employees and business records from one connected platform.
          </p>
          <div className="actions">
            <a className="button primary" href="#beta">Become a Beta Tester</a>
            <a className="button secondary" href="#workflow">Explore Field Manager</a>
          </div>
          <p className="built-for">Built for the people who actually do the work.</p>
        </div>

        <div className="hero-visual" aria-label="Field Manager product preview">
          <div className="sun-glow" />
          <div className="mountain mountain-back" />
          <div className="mountain mountain-front" />
          <div className="road" />

          <div className="device laptop">
            <div className="device-bar"><span>FM</span><span>FIELD MANAGER</span></div>
            <div className="dashboard">
              <div className="dash-card wide">
                <small>TODAY&apos;S FIELD WORK</small>
                <strong>12 Jobs</strong>
              </div>
              <div className="dash-card"><small>CREW</small><strong>8 Active</strong></div>
              <div className="dash-card"><small>ESTIMATES</small><strong>5 Open</strong></div>
              <div className="dash-lines"><i /><i /><i /><i /></div>
            </div>
          </div>

          <div className="device phone">
            <div className="phone-notch" />
            <span className="phone-logo">FM</span>
            <small>FIELD WORK</small>
            <div className="phone-job">Next Job<br /><strong>9:00 AM</strong></div>
            <div className="phone-action">START DRIVE</div>
          </div>

          <div className="feature-tags" aria-hidden="true">
            <span>BUILT FOR REAL WORK</span>
            <span>ANY INDUSTRY</span>
            <span>ANY DEVICE</span>
          </div>
        </div>
      </section>

      <section className="workflow-section" id="workflow">
        <div className="workflow-heading">
          <p className="eyebrow">ONE CONNECTED WORKDAY</p>
          <h2>FROM FIRST CALL TO FINISHED JOB.</h2>
          <p>
            Field Manager keeps the work moving forward instead of making your
            team rebuild the same information at every step.
          </p>
        </div>

        <div className="workflow-track">
          {workflow.map(([number, title, copy]) => (
            <article className="workflow-card" key={title}>
              <span className="workflow-number">{number}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>

        <p className="workflow-line">
          Customer <span>→</span> Estimate <span>→</span> Schedule <span>→</span>
          Dispatch <span>→</span> Field Work <span>→</span> Complete <span>→</span> Records
        </p>
      </section>

      <section className="field-visibility-section">
        <div className="field-visibility-heading">
          <p className="eyebrow">FIELD VISIBILITY</p>
          <h2>KNOW WHERE THE WORK IS MOVING.</h2>
          <p>
            Dispatch is more than assigning a job. Field Manager is being built to
            connect the road, the worker and the job record so owners can keep the
            day moving without chasing updates.
          </p>
        </div>

        <div className="field-visibility-grid">
          <article className="field-visibility-card">
            <span className="field-status">WORKING FLOW</span>
            <h3>Routing &amp; Drive Flow</h3>
            <p>
              Start Drive can open the route to the service address so the field
              worker can move from dispatch toward the job with less switching around.
            </p>
          </article>

          <article className="field-visibility-card">
            <span className="field-status testing">IN TESTING</span>
            <h3>Live Map</h3>
            <p>
              Live location and job-map tools are being tested to give owners a
              clearer view of field activity while work is underway.
            </p>
          </article>

          <article className="field-visibility-card">
            <span className="field-status">CONNECTED RECORD</span>
            <h3>Travel Time</h3>
            <p>
              Drive time can stay connected to time history, helping the workday
              tell one continuous story from the road to the job.
            </p>
          </article>
        </div>
      </section>

      <section className="industries-section" id="industries">
        <div className="industries-heading">
          <p className="eyebrow">BUILT TO FLEX WITH THE WORK</p>
          <h2>YOUR BUSINESS DOESN&apos;T HAVE TO FIT A TEMPLATE.</h2>
          <p>
            Different industries do different work. Field Manager is being built
            around the connected workflow they share: customers, jobs, people,
            movement and records.
          </p>
        </div>

        <div className="industry-grid">
          {industries.map(([title, copy]) => (
            <article className="industry-card" key={title}>
              <span className="industry-mark">FM</span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>

        <p className="industry-statement">ANY FIELD. ANY ROAD. ANY BUSINESS.</p>
      </section>

      <section className="automation-section" id="automation">
        <div className="automation-heading">
          <div><p className="eyebrow">THE NEXT LAYER</p><h2>LESS BUSYWORK. MORE CONTROL.</h2></div>
          <span className="development-badge">IN DEVELOPMENT</span>
        </div>
        <p className="automation-intro">Field Manager&apos;s automation layer is planned to help owners move routine work forward while keeping important decisions in human hands.</p>
        <div className="automation-grid">
          <article className="automation-card"><span className="automation-label">COMING</span><h3>AI Assistant</h3><p>Ask for business information, prepare actions and work across the same connected Field Manager records.</p></article>
          <article className="automation-card"><span className="automation-label">COMING</span><h3>Macros</h3><p>Turn repeatable multi-step routines into reusable workflows for everyday field operations.</p></article>
          <article className="automation-card"><span className="automation-label">DESIGN PRINCIPLE</span><h3>Human Approval</h3><p>Consequential actions stay visible and confirmable instead of silently changing prices, payroll, charges or completed work.</p></article>
        </div>
        <p className="automation-note">Automation features shown here are part of the product roadmap and are not yet live.</p>
      </section>

      <section className="about-section" id="about">
        <div className="about-grid">
          <div className="about-heading">
            <p className="eyebrow">WHY FIELD MANAGER</p>
            <h2>BUILT FROM THE WORK OUT.</h2>
          </div>

          <div className="about-story">
            <p className="about-lead">
              Field Manager is being shaped around a simple idea: business software
              should follow the way real field work happens.
            </p>
            <p>
              Customers, estimates, schedules, crews, travel, job details and
              records belong to one connected story—not a pile of disconnected
              tools that make people enter the same information again and again.
            </p>
            <p>
              The goal is straightforward: give owners serious capability while
              keeping the experience clear for the people using it in the field.
            </p>
            <div className="about-principle">
              <span>THE PRINCIPLE</span>
              <strong>Powerful underneath. Simple on the screen.</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="beta-section" id="beta">
        <div className="beta-grid">
          <div className="beta-copy">
            <p className="eyebrow">HELP SHAPE FIELD MANAGER</p>
            <h2>PUT IT TO WORK.</h2>
            <p className="beta-lead">
              We&apos;re looking for a small group of real field-service businesses
              to test the workflow, tell us where it gets in the way and help us
              make Field Manager better before a wider release.
            </p>

            <div className="beta-expectations">
              <div><span>01</span><strong>Use it like you work</strong><p>Try real customer-to-job workflows instead of a scripted demo.</p></div>
              <div><span>02</span><strong>Tell us what feels rough</strong><p>Clear feedback matters more than saying everything looks good.</p></div>
              <div><span>03</span><strong>Help shape what comes next</strong><p>Early testers help us see which improvements matter in the field.</p></div>
            </div>
          </div>

          <div className="beta-form-wrap">
            <div className="beta-form-heading">
              <span className="industry-mark">FM</span>
              <div>
                <small>BETA TESTING</small>
                <h3>Tell us about your work.</h3>
              </div>
            </div>
            <BetaSignupForm />
          </div>
        </div>
      </section>
    </main>
  );
}
