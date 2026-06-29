export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#020617] px-5 py-20 text-white md:px-10">
      <div className="mx-auto max-w-5xl">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">
          TERMS OF SERVICE
        </p>

        <h1 className="mt-4 text-5xl font-bold">Terms of Service</h1>

        <p className="mt-8 text-lg leading-8 text-slate-400">
          These Terms of Service explain the rules and responsibilities that apply
          when using Mexa Automation services, website, automation workflows, and
          AI-powered tools.
        </p>

        <div className="mt-16 space-y-14">
          {[
            [
              "1. Use of Services",
              "Mexa provides automation systems designed to support business communication, appointment scheduling, customer follow-up, and operational workflows. You agree to use the services only for lawful business purposes.",
            ],
            [
              "2. Client Responsibilities",
              "Clients are responsible for providing accurate business information, maintaining access to connected accounts such as WhatsApp Business or Google Calendar, and ensuring their use of automation complies with applicable laws.",
            ],
            [
              "3. Service Availability",
              "We aim to provide reliable service, but temporary interruptions may occur due to maintenance, third-party providers, hosting infrastructure, or technical issues outside our control.",
            ],
            [
              "4. Third-Party Integrations",
              "Mexa may connect with third-party services such as WhatsApp Business, Google Calendar, cloud hosting platforms, analytics tools, and AI providers. Use of those services may also be subject to their own terms.",
            ],
            [
              "5. Data and Privacy",
              "Business and customer information is handled according to our Privacy Policy. Clients must ensure they have the right to collect and process any customer information submitted through the automation system.",
            ],
            [
              "6. Payments and Subscriptions",
              "If a paid plan or custom implementation is agreed upon, payment terms, billing cycles, setup fees, and cancellation conditions will be defined in the specific service agreement or invoice.",
            ],
            [
              "7. Custom Development",
              "Custom workflows, dashboards, integrations, and automation features may require additional setup time and may be priced separately depending on complexity.",
            ],
            [
              "8. Limitations of Liability",
              "Mexa is not responsible for losses caused by incorrect client data, third-party service outages, misuse of the automation system, or actions taken outside the agreed scope of service.",
            ],
            [
              "9. Changes to Terms",
              "We may update these Terms of Service from time to time. The latest version will always be available on this page.",
            ],
          ].map(([title, text]) => (
            <section key={title}>
              <h2 className="text-3xl font-bold">{title}</h2>
              <p className="mt-5 leading-8 text-slate-400">{text}</p>
            </section>
          ))}

          <section className="rounded-3xl border border-cyan-400/20 bg-gradient-to-r from-cyan-500/10 to-violet-600/10 p-8">
            <h2 className="text-3xl font-bold">Contact</h2>
            <p className="mt-5 leading-8 text-slate-300">
              If you have questions about these Terms, please contact the Mexa
              Automation team through our Contact page.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}