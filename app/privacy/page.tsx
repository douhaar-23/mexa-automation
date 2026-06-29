export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#020617] px-5 py-20 text-white md:px-10">
      <div className="mx-auto max-w-5xl">

        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">
          PRIVACY POLICY
        </p>

        <h1 className="mt-4 text-5xl font-bold">
          Privacy Policy
        </h1>

        <p className="mt-8 text-lg leading-8 text-slate-400">
          At Mexa Automation, protecting your business information and customer
          data is one of our highest priorities. This Privacy Policy explains
          what information we collect, how we use it, how we protect it, and
          the choices you have regarding your data when using our website,
          automation services, and AI-powered solutions.
        </p>

        <div className="mt-16 space-y-14">

          <section>
            <h2 className="text-3xl font-bold">
              1. Information We Collect
            </h2>

            <p className="mt-5 leading-8 text-slate-400">
              Depending on the services you use, we may collect business
              information, contact details, appointment data, communication
              records, technical information, and usage statistics required to
              operate and improve our platform.
            </p>

            <ul className="mt-6 list-disc space-y-3 pl-6 text-slate-400">
              <li>Business and clinic information</li>
              <li>Contact names, phone numbers and email addresses</li>
              <li>Appointment scheduling information</li>
              <li>WhatsApp communication metadata</li>
              <li>Website analytics and usage information</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-bold">
              2. How We Use Your Information
            </h2>

            <p className="mt-5 leading-8 text-slate-400">
              We use collected information only for legitimate business
              purposes, including providing automation services, appointment
              scheduling, customer support, AI improvements, analytics, and
              maintaining platform security.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold">
              3. Data Security
            </h2>

            <p className="mt-5 leading-8 text-slate-400">
              Mexa applies modern security practices designed to protect
              business information. Access is restricted to authorized users,
              communications are transmitted over encrypted connections, and
              sensitive credentials are stored securely.
            </p>

            <div className="mt-8 grid gap-5 md:grid-cols-2">
              <div className="card-interactive rounded-2xl border border-white/10 bg-white/[0.04] p-6">
                <h3 className="font-bold">🔒 Secure Connections</h3>
                <p className="mt-3 text-slate-400">
                  Data is transmitted using encrypted HTTPS connections.
                </p>
              </div>

              <div className="card-interactive rounded-2xl border border-white/10 bg-white/[0.04] p-6">
                <h3 className="font-bold">🛡 Restricted Access</h3>
                <p className="mt-3 text-slate-400">
                  Only authorized personnel can access protected information.
                </p>
              </div>

              <div className="card-interactive rounded-2xl border border-white/10 bg-white/[0.04] p-6">
                <h3 className="font-bold">☁ Secure Infrastructure</h3>
                <p className="mt-3 text-slate-400">
                  Infrastructure is designed to support secure and reliable
                  operation.
                </p>
              </div>

              <div className="card-interactive rounded-2xl border border-white/10 bg-white/[0.04] p-6">
                <h3 className="font-bold">💾 Backup Strategy</h3>
                <p className="mt-3 text-slate-400">
                  Business data may be protected using regular backup
                  procedures.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold">
              4. Third-Party Services
            </h2>

            <p className="mt-5 leading-8 text-slate-400">
              Our platform may integrate with trusted third-party providers such
              as WhatsApp Business, Google Calendar, cloud infrastructure,
              analytics platforms, and AI providers to deliver requested
              services.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold">
              5. Data Retention
            </h2>

            <p className="mt-5 leading-8 text-slate-400">
              Information is retained only for as long as necessary to provide
              services, comply with legal obligations, resolve disputes, and
              maintain business records.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold">
              6. Your Rights
            </h2>

            <p className="mt-5 leading-8 text-slate-400">
              Depending on your location and applicable laws, you may request
              access, correction, deletion, or export of your information by
              contacting our team.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold">
              7. Changes to This Policy
            </h2>

            <p className="mt-5 leading-8 text-slate-400">
              This Privacy Policy may be updated from time to time. Material
              updates will be reflected on this page together with the latest
              revision date.
            </p>
          </section>

          <section className="rounded-3xl border border-cyan-400/20 bg-gradient-to-r from-cyan-500/10 to-violet-600/10 p-8">
            <h2 className="text-3xl font-bold">
              Contact Us
            </h2>

            <p className="mt-5 leading-8 text-slate-300">
              If you have any questions regarding this Privacy Policy or how
              your information is handled, please contact the Mexa Automation
              team through our Contact page.
            </p>
          </section>

        </div>

      </div>
    </main>
  );
}