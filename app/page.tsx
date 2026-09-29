import BetaSignupForm from "./BetaSignupForm";

export default function Home() {
  const workflow = [
    {
      number: "01",
      title: "Customer",
      copy: "Keep the customer and job details together from the start.",
      detail: "Store the customer, phone, service address, notes and job history in one place so the same information can carry forward into estimates, scheduling and completed work.",
      points: ["Contact details", "Service address", "Customer notes", "Job history", "Start scheduling from the customer record", "Keep future work tied to the same customer"],
    },
    {
      number: "02",
      title: "Estimate",
      copy: "Build the work from your saved services and rates.",
      detail: "Choose services from your master rate catalog, add quantities or hours, define the scope and build a clear total. An accepted estimate can move forward without rebuilding the job from scratch.",
      points: ["Saved Services & Rates", "Multiple services on one estimate", "Set pricing from the master catalog", "Quantity or hourly pricing", "Scope and job notes", "Clear estimate total"],
    },
    {
      number: "03",
      title: "Schedule",
      copy: "Turn approved work into a real job on the calendar.",
      detail: "Choose the service, date and time, add access or job notes and create one-time or recurring work while keeping the saved service rate connected to the job.",
      points: ["Choose the service", "Use the saved service rate", "Set date and time", "Create one-time or recurring jobs", "Add job and access notes", "Send the scheduled work into Dispatch"],
    },
    {
      number: "04",
      title: "Dispatch",
      copy: "Assign the crew and get the right person to the right job.",
      detail: "Connect the scheduled job to the field worker, move through assignment and acceptance, open the route when driving starts and keep the trip tied to the same work record.",
      points: ["Assign the job to a field worker", "Employee acceptance", "Start Drive workflow", "Open the route to the job", "Track travel time", "Carry the same job into field work"],
    },
    {
      number: "05",
      title: "Field Work",
      copy: "Run the job, track the work and capture what happened.",
      detail: "Give the worker the job details, checklist and field workflow they need while capturing before-and-after photos, notes and approved extra work as the job happens.",
      points: ["Job details in the field", "Work checklist", "Clock-in and work flow", "Before-and-after photos", "Job notes", "Approved extra work"],
    },
    {
      number: "06",
      title: "Complete",
      copy: "Finish the job with proof, approvals and closeout.",
      detail: "Bring the work to a clean finish with the final walkthrough, required proof, customer approval and the information needed to close out the job instead of leaving loose ends behind.",
      points: ["Final walkthrough", "Confirm completed work", "Customer approval", "Customer signature", "Payment and receipt record", "Close the job into history"],
    },
    {
      number: "07",
      title: "Records",
      copy: "Keep the finished work connected to the business history.",
      detail: "Preserve the completed job, price, photos, signatures and work history so owners can look back at what happened without searching through texts, paper notes or a camera roll.",
      points: ["Completed-job history", "Final job price", "Before-and-after photos", "Customer signatures", "Payment status and receipt record", "One place to review what happened"],
    },
  ];

  const industries = [
    {
      title: "Contractors",
      copy: "Jobs, crews, estimates and field records in one place.",
      detail: "Field Manager is built to keep the office side and the field side connected from the first customer conversation through the finished job.",
      points: ["Customer and job details", "Set-price estimates", "Scheduling and dispatch", "Crew and travel workflow", "Before-and-after job proof", "Completed work records"],
    },
    {
      title: "Cleaning",
      copy: "Recurring visits, scheduled work and job closeout.",
      detail: "Cleaning businesses can keep repeat customers, service pricing, access notes and completed work tied to the same job flow instead of spreading the day across separate tools.",
      points: ["Recurring customer visits", "Saved cleaning rates", "Access and job notes", "Cleaning work checklists", "Before-and-after photos", "Closeout and job history"],
    },
    {
      title: "Lawn & Property Care",
      copy: "Route crews from scheduled service through completion.",
      detail: "For mobile lawn and property crews, the same customer, service address and scheduled work can travel with the team from the route to the finished record.",
      points: ["Lawn and yard services", "Recurring property visits", "Service address routing", "Crew assignments", "Job photos and notes", "Completed property history"],
    },
    {
      title: "Handyman & Maintenance",
      copy: "Keep customers, work details and proof connected.",
      detail: "Handyman and maintenance work often changes from job to job, so Field Manager keeps the scope flexible while still connecting pricing, scheduling, proof and closeout.",
      points: ["Multiple services per estimate", "Saved service pricing", "Job and access notes", "Dispatch to the service address", "Approved extra work", "Photos and completion records"],
    },
    {
      title: "HVAC & Appliance",
      copy: "Coordinate service calls, employees and job history.",
      detail: "Service-call businesses can use the connected workflow to organize the customer, appointment, technician movement, field notes and completed service record.",
      points: ["Customer service history", "Quoted service work", "Appointment scheduling", "Technician dispatch", "Field notes and photos", "Completed service records"],
    },
    {
      title: "Plumbing & Electrical",
      copy: "Move quoted work into scheduling and field execution.",
      detail: "Field Manager can keep quoted service work attached to the customer as it moves into scheduling, dispatch, job documentation and final records.",
      points: ["Customer and site details", "Service estimates", "Scheduled appointments", "Worker and route assignment", "Job proof and notes", "Final work history"],
    },
    {
      title: "Delivery & Mobile Teams",
      copy: "Organize assignments, travel and work in the field.",
      detail: "Teams that spend the day moving between locations can use the same connected structure for assignments, destinations, travel steps, proof and finished records.",
      points: ["Daily assignments", "Destination details", "Worker acceptance", "Travel workflow", "Photos and field notes", "Completed assignment history"],
    },
    {
      title: "Your Field",
      copy: "A flexible foundation for businesses that work beyond a desk.",
      detail: "The core workflow is intentionally broader than one trade. Businesses can build around their own services and rates while keeping customers, people, movement and records connected.",
      points: ["Your own service catalog", "Your saved rates", "Customers and schedules", "Employees and dispatch", "Field proof and approvals", "Business records in one flow"],
    },
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
          {workflow.map(({ number, title, copy, detail, points }) => (
            <details className="workflow-card" name="workflow-step" key={title}>
              <summary>
                <span className="workflow-number">{number}</span>
                <h3>{title}</h3>
                <p>{copy}</p>
                <span className="workflow-open" aria-hidden="true">OPEN +</span>
              </summary>
              <div className="workflow-detail">
                <strong>What this does</strong>
                <p>{detail}</p>
                <div className="workflow-detail-list">
                  {points.map((point) => <span key={point}>{point}</span>)}
                </div>
              </div>
            </details>
          ))}
        </div>

        <p className="workflow-line">
          Customer <span>→</span> Estimate <span>→</span> Schedule <span>→</span>
          Dispatch <span>→</span> Field Work <span>→</span> Complete <span>→</span> Records
        </p>
      </section>

      <section className="job-proof-section">
        <figure className="job-proof-photo">
          <img
            src="/field-manager-job-photos.webp"
            alt="Field Manager user reviewing before and after job photos at a completed work site"
          />
        </figure>

        <div className="job-proof-copy">
          <p className="eyebrow">JOB PROOF</p>
          <h2>SHOW THE WORK. KEEP THE PROOF.</h2>
          <p>
            Before and after photos stay connected to the job so the finished work
            has a clear visual record instead of getting lost in a camera roll.
          </p>
          <div className="job-proof-points" aria-label="Job photo workflow">
            <span>BEFORE</span><i>→</i><span>WORK</span><i>→</i><span>AFTER</span><i>→</i><span>RECORD</span>
          </div>
        </div>
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

        <figure className="field-visibility-photo">
          <img
            src="/field-manager-live-map.webp"
            alt="Field Manager owner at the office reviewing crew locations and active jobs on a live map dashboard"
          />
          <figcaption>
            <span>OFFICE VISIBILITY</span>
            See crews, routes and active jobs from the office while the day is moving.
          </figcaption>
        </figure>

        <div className="field-visibility-grid">
          <details className="field-visibility-card" name="field-visibility-step">
            <summary>
              <span className="field-status">WORKING FLOW</span>
              <h3>Routing &amp; Drive Flow</h3>
              <p>
                Start Drive can open the route to the service address so the field
                worker can move from dispatch toward the job with less switching around.
              </p>
              <span className="field-card-open" aria-hidden="true">OPEN +</span>
            </summary>
            <div className="field-card-detail">
              <strong>What this does</strong>
              <p>
                The drive flow is built to keep the scheduled job, the worker and the
                route connected instead of making the employee rebuild the trip in another tool.
              </p>
              <div className="field-card-list">
                <span>Use the scheduled service address</span>
                <span>Keep the assigned worker connected</span>
                <span>Employee acceptance before travel</span>
                <span>Start Drive from the job flow</span>
                <span>Open the route to the service location</span>
                <span>Carry the same job forward on arrival</span>
              </div>
            </div>
          </details>

          <details className="field-visibility-card" name="field-visibility-step">
            <summary>
              <span className="field-status testing">IN TESTING</span>
              <h3>Live Map</h3>
              <p>
                Live location and job-map tools are being tested to give owners a
                clearer view of field activity while work is underway.
              </p>
              <span className="field-card-open" aria-hidden="true">OPEN +</span>
            </summary>
            <div className="field-card-detail">
              <strong>What is being tested</strong>
              <p>
                This layer is still under verification. The goal is an office view that
                connects field location to the active job without pretending the map is finished before it is.
              </p>
              <div className="field-card-list">
                <span>Field-location capture</span>
                <span>Active-job map context</span>
                <span>Connect location to the job record</span>
                <span>Office view of field activity</span>
                <span>Ongoing GPS update testing</span>
                <span>Backend and access controls still being verified</span>
              </div>
            </div>
          </details>

          <details className="field-visibility-card" name="field-visibility-step">
            <summary>
              <span className="field-status">CONNECTED RECORD</span>
              <h3>Travel Time</h3>
              <p>
                Drive time can stay connected to time history, helping the workday
                tell one continuous story from the road to the job.
              </p>
              <span className="field-card-open" aria-hidden="true">OPEN +</span>
            </summary>
            <div className="field-card-detail">
              <strong>What this keeps together</strong>
              <p>
                Travel belongs to the workday too. Field Manager keeps that drive segment
                connected to the same job history instead of leaving it as a separate guess later.
              </p>
              <div className="field-card-list">
                <span>Start the travel step from Dispatch</span>
                <span>Keep the destination tied to the job</span>
                <span>Record the road portion of the workday</span>
                <span>Transition from travel into the job</span>
                <span>Keep drive time in Time History</span>
                <span>Make later workday review clearer</span>
              </div>
            </div>
          </details>
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
          {industries.map(({ title, copy, detail, points }) => (
            <details className="industry-card" name="industry-step" key={title}>
              <summary>
                <span className="industry-mark">FM</span>
                <h3>{title}</h3>
                <p>{copy}</p>
                <span className="industry-card-open" aria-hidden="true">OPEN +</span>
              </summary>
              <div className="industry-detail">
                <strong>How Field Manager fits</strong>
                <p>{detail}</p>
                <div className="industry-detail-list">
                  {points.map((point) => <span key={point}>{point}</span>)}
                </div>
              </div>
            </details>
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
          <details className="automation-card" name="automation-step">
            <summary>
              <span className="automation-label">COMING</span>
              <h3>AI Assistant</h3>
              <p>Ask for business information, prepare actions and work across the same connected Field Manager records.</p>
              <span className="automation-card-open" aria-hidden="true">OPEN +</span>
            </summary>
            <div className="automation-detail">
              <strong>Planned capability</strong>
              <p>
                The AI Assistant is planned as a layer over the same Field Manager records,
                helping owners understand information and prepare work without creating a separate AI-only system.
              </p>
              <div className="automation-detail-list">
                <span>Ask questions about business records</span>
                <span>Find customer or job information</span>
                <span>Prepare routine actions for review</span>
                <span>Help build schedules and follow-up steps</span>
                <span>Work from the same connected data</span>
                <span>Require confirmation for consequential actions</span>
              </div>
            </div>
          </details>

          <details className="automation-card" name="automation-step">
            <summary>
              <span className="automation-label">COMING</span>
              <h3>Macros</h3>
              <p>Turn repeatable multi-step routines into reusable workflows for everyday field operations.</p>
              <span className="automation-card-open" aria-hidden="true">OPEN +</span>
            </summary>
            <div className="automation-detail">
              <strong>Planned capability</strong>
              <p>
                Macros are planned to package the steps a business repeats all the time
                so owners can run a familiar workflow without clicking through every step manually.
              </p>
              <div className="automation-detail-list">
                <span>Schedule an accepted estimate</span>
                <span>Prepare the morning dispatch</span>
                <span>Set up a new recurring customer</span>
                <span>Handle cancellations or address changes</span>
                <span>Prepare end-of-day closeout</span>
                <span>Build custom repeatable workflows</span>
              </div>
            </div>
          </details>

          <details className="automation-card" name="automation-step">
            <summary>
              <span className="automation-label">DESIGN PRINCIPLE</span>
              <h3>Human Approval</h3>
              <p>Consequential actions stay visible and confirmable instead of silently changing prices, payroll, charges or completed work.</p>
              <span className="automation-card-open" aria-hidden="true">OPEN +</span>
            </summary>
            <div className="automation-detail">
              <strong>How control stays with the owner</strong>
              <p>
                Automation should save steps without taking important decisions away from the business.
                The plan is to keep high-impact changes visible before they become final.
              </p>
              <div className="automation-detail-list">
                <span>No silent master-price changes</span>
                <span>No silent payroll changes</span>
                <span>No silent customer charges</span>
                <span>No silent job deletions</span>
                <span>No fake approvals or signatures</span>
                <span>Review and confirm important actions</span>
              </div>
            </div>
          </details>
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
