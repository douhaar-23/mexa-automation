export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#020617] px-5 py-10 text-white md:px-10">
      <section
        id="about"
        className="mx-2 mt-4 rounded-[28px] border border-white/10 bg-[#040816] px-5 py-24 text-white md:px-8"
      >
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">
              ABOUT MEXA
            </p>

            <h2 className="mt-5 text-4xl font-bold leading-tight tracking-[-0.05em] md:text-6xl">
              We build AI employees
              <br />
              that help businesses grow.
            </h2>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-400">
              Mexa develops AI-powered automation systems that help clinics and
              service businesses answer customers, schedule appointments, manage
              repetitive tasks, and operate more efficiently.
            </p>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-400">
              Our goal is simple: eliminate repetitive work so business owners
              can focus on growth while AI handles daily operations 24/7.
            </p>

            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {[
                ["🤖", "AI Automation", "Automate repetitive business tasks with intelligent AI workflows."],
                ["💬", "Customer Communication", "Respond to customers instantly through WhatsApp and other channels."],
                ["📅", "Smart Scheduling", "Manage appointments automatically with calendar synchronization."],
                ["📈", "Business Growth", "Reduce manual work and improve customer experience with automation."],
              ].map(([icon, title, text]) => (
                <div
                  key={title}
                  className="card-interactive rounded-2xl border border-white/10 bg-white/[0.04] p-5"
                >
                  <div className="text-3xl">{icon}</div>
                  <h3 className="mt-4 text-xl font-bold">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[32px] border border-white/10 bg-white/[0.04] p-6 shadow-[0_0_60px_rgba(59,130,246,.12)]">
            <div className="rounded-[24px] border border-white/10 bg-[#020617] p-5">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-400">Mexa Dashboard</p>
                  <h3 className="mt-1 text-2xl font-bold">AI Operations Hub</h3>
                </div>
                <span className="rounded-full bg-emerald-500/15 px-4 py-2 text-sm text-emerald-300">
                  AI Online
                </span>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl bg-white/[0.04] p-4">
                  <p className="text-sm text-slate-400">Messages handled</p>
                  <p className="mt-2 text-3xl font-bold">3,682</p>
                </div>

                <div className="rounded-2xl bg-white/[0.04] p-4">
                  <p className="text-sm text-slate-400">Appointments booked</p>
                  <p className="mt-2 text-3xl font-bold">1,248</p>
                </div>
              </div>

              <div className="mt-5 rounded-2xl border border-cyan-400/20 bg-cyan-500/10 p-4">
                <p className="text-sm text-cyan-300">WhatsApp Automation</p>
                <p className="mt-2 text-slate-300">
                  Patient asked for an appointment. AI collected details and
                  updated Google Calendar.
                </p>
              </div>

              <div className="mt-5 space-y-3">
                {["Google Calendar synced", "Reminder scheduled", "Clinic notified"].map((item) => (
                  <div
                    key={item}
                    className="flex items-center justify-between rounded-xl bg-white/[0.04] px-4 py-3"
                  >
                    <span className="text-slate-300">{item}</span>
                    <span className="text-emerald-300">✓</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mx-2 mt-4 rounded-[28px] border border-white/10 bg-[#020617] px-5 py-24 text-white md:px-8">
  <div className="mx-auto max-w-7xl">
    <p className="text-center text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">
      WHY MEXA ?
    </p>

    <h2 className="mt-4 text-center text-4xl font-bold md:text-5xl">
      Why clinics choose Mexa ?
    </h2>

    <p className="mx-auto mt-6 max-w-3xl text-center text-lg text-slate-400">
      We help clinics reduce missed appointments, answer patients instantly,
      and automate repetitive work so staff can focus on patient care.
    </p>

    <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

      <div className="card-interactive rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/40 hover:bg-white/[0.06]">
        <div className="text-4xl">🤖</div>
        <h3 className="mt-5 text-xl font-bold">24/7 AI Assistant</h3>
        <p className="mt-3 text-slate-400">
          Answer patients instantly any time of the day.
        </p>
      </div>

      <div className="card-interactive rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/40 hover:bg-white/[0.06]">
        <div className="text-4xl">💬</div>
        <h3 className="mt-5 text-xl font-bold">WhatsApp Integration</h3>
        <p className="mt-3 text-slate-400">
          Automatically respond and collect appointment requests.
        </p>
      </div>

      <div className="card-interactive rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/40 hover:bg-white/[0.06]">
        <div className="text-4xl">📅</div>
        <h3 className="mt-5 text-xl font-bold">Google Calendar</h3>
        <p className="mt-3 text-slate-400">
          Every confirmed booking is synced automatically.
        </p>
      </div>

      <div className="card-interactive rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/40 hover:bg-white/[0.06]">
        <div className="text-4xl">⚡</div>
        <h3 className="mt-5 text-xl font-bold">Fast Deployment</h3>
        <p className="mt-3 text-slate-400">
          Your automation can be live in just a few days.
        </p>
      </div>

    </div>
  </div>
</section>
<section className="mt-24">
  <div className="text-center">
    <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">
      SECURITY
    </p>

    <h2 className="mt-4 text-4xl font-bold md:text-5xl">
      Your clinic's data is protected
    </h2>

    <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
      Security is built into every automation. Patient information, appointments,
      and business data are protected using modern security practices.
    </p>
  </div>

  <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">

    <div className="card-interactive rounded-2xl border border-white/10 bg-white/[0.04] p-6">
      <div className="text-4xl">🔒</div>
      <h3 className="mt-4 text-xl font-bold">Encrypted Data</h3>
      <p className="mt-3 text-slate-400">
        All sensitive information is encrypted during transmission.
      </p>
    </div>

    <div className="card-interactive rounded-2xl border border-white/10 bg-white/[0.04] p-6">
      <div className="text-4xl">🛡️</div>
      <h3 className="mt-4 text-xl font-bold">Private Access</h3>
      <p className="mt-3 text-slate-400">
        Only authorized staff can access clinic information.
      </p>
    </div>

    <div className="card-interactive rounded-2xl border border-white/10 bg-white/[0.04] p-6">
      <div className="text-4xl">☁️</div>
      <h3 className="mt-4 text-xl font-bold">Secure Cloud</h3>
      <p className="mt-3 text-slate-400">
        Your automation runs on reliable cloud infrastructure with backups.
      </p>
    </div>

    <div className="card-interactive rounded-2xl border border-white/10 bg-white/[0.04] p-6">
      <div className="text-4xl">📋</div>
      <h3 className="mt-4 text-xl font-bold">Full Activity Logs</h3>
      <p className="mt-3 text-slate-400">
        Every booking and action is recorded for complete transparency.
      </p>
    </div>

  </div>
</section>
<section className="mt-24">
  <div className="text-center">
    <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">
      OUR PROCESS
    </p>

    <h2 className="mt-4 text-4xl font-bold md:text-5xl">
      From consultation to automation
    </h2>

    <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
      We make the implementation process simple and fast so your clinic can
      start saving time within days.
    </p>
  </div>

  <div className="mt-14 grid gap-6 md:grid-cols-4">
    {[
      ["1", "Consultation", "We understand your clinic and workflow."],
      ["2", "Setup", "We connect WhatsApp, Calendar and your automation."],
      ["3", "Testing", "Everything is tested before going live."],
      ["4", "Go Live", "Your AI assistant starts working 24/7."],
    ].map(([step, title, text]) => (
      <div
        key={step}
        className="card-interactive rounded-2xl border border-white/10 bg-white/[0.04] p-6"
      >
        <div className="text-5xl font-bold text-cyan-300">{step}</div>

        <h3 className="mt-5 text-2xl font-bold">
          {title}
        </h3>

        <p className="mt-3 text-slate-400">
          {text}
        </p>
      </div>
    ))}
  </div>
</section>
<section className="mt-24">
  <div className="rounded-3xl border border-cyan-400/20 bg-gradient-to-r from-cyan-500/10 to-violet-600/10 p-10">

    <div className="text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">
        TRUST METRICS
      </p>

      <h2 className="mt-4 text-4xl font-bold md:text-5xl">
        Built for reliability
      </h2>
    </div>

    <div className="mt-14 grid gap-8 md:grid-cols-4">

      <div className="text-center">
        <h3 className="text-5xl font-bold text-cyan-300">24/7</h3>
        <p className="mt-3 text-slate-400">AI Availability</p>
      </div>

      <div className="text-center">
        <h3 className="text-5xl font-bold text-cyan-300">&lt;7 Days</h3>
        <p className="mt-3 text-slate-400">Average Deployment</p>
      </div>

      <div className="text-center">
        <h3 className="text-5xl font-bold text-cyan-300">99.9%</h3>
        <p className="mt-3 text-slate-400">System Uptime</p>
      </div>

      <div className="text-center">
        <h3 className="text-5xl font-bold text-cyan-300">100%</h3>
        <p className="mt-3 text-slate-400">Automated Booking Tracking</p>
      </div>

    </div>

  </div>
</section>
<section className="mt-24 mb-16">
  <div className="rounded-3xl border border-cyan-400/20 bg-gradient-to-r from-cyan-500/10 to-violet-600/10 px-8 py-20 text-center">

    <h2 className="text-4xl font-bold md:text-6xl">
      Ready to automate your clinic?
    </h2>

    <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
      Let Mexa handle patient communication, appointment scheduling, reminders,
      and repetitive tasks while your team focuses on delivering exceptional care.
    </p>

    <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">

      <a
        href="/contact"
        className="btn-interactive rounded-2xl bg-gradient-to-r from-cyan-500 to-violet-600 px-10 py-5 text-lg font-semibold"
      >
        Book a Free Demo →
      </a>

      <a
        href="/contact"
        className="btn-interactive rounded-2xl border border-white/10 px-10 py-5 text-lg font-semibold hover:bg-white/10"
      >
        Contact Sales
      </a>

    </div>

  </div>
</section>
    </main>
  );
}