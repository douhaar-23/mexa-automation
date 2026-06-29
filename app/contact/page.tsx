"use client";

import { useState } from "react";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [fullName, setFullName] = useState("");
  const [clinicName, setClinicName] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [email, setEmail] = useState("");
  const [businessType, setBusinessType] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async () => {
    if (!fullName || !clinicName || !whatsapp || !email) {
      alert("Please fill in name, clinic, WhatsApp, and email.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(
        "https://mexaautomation.com/webhook/contact-demo",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            fullName,
            clinicName,
            whatsapp,
            email,
            businessType,
            message,
            source: "Mexa website contact page",
          }),
        }
      );

      if (response.ok) {
        alert("✅ Thank you! We'll contact you within 24 hours.");
        setFullName("");
        setClinicName("");
        setWhatsapp("");
        setEmail("");
        setBusinessType("");
        setMessage("");
      } else {
        alert("❌ Something went wrong. Please try again.");
      }
    } catch {
      alert("❌ Connection failed. Please try again.");
    }

    setLoading(false);
  };

  return (
    <main className="min-h-screen bg-[#020617] px-5 py-10 text-white md:px-10">
      <section className="mx-auto max-w-6xl rounded-[32px] border border-white/10 bg-white/[0.03] p-6 md:p-10">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">
              BOOK A DEMO
            </p>

            <h1 className="mt-5 text-4xl font-bold leading-tight md:text-6xl">
              Let’s automate your clinic.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-400">
              Tell us about your clinic and we’ll show you how Mexa can answer
              patients, book appointments, and reduce missed visits.
            </p>

            <div className="mt-10 space-y-5 text-slate-300">
              <p>✓ WhatsApp AI receptionist</p>
              <p>✓ Appointment booking automation</p>
              <p>✓ Google Calendar integration</p>
              <p>✓ Demo setup in 7 days</p>
            </div>
          </div>

          <form className="rounded-[28px] border border-white/10 bg-[#061022] p-6 md:p-8">
            <div className="grid gap-5">
              <input
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="rounded-xl border border-white/10 bg-white/5 px-4 py-4 outline-none placeholder:text-slate-500 focus:border-cyan-400/60"
                placeholder="Full name"
              />

              <input
                value={clinicName}
                onChange={(e) => setClinicName(e.target.value)}
                className="rounded-xl border border-white/10 bg-white/5 px-4 py-4 outline-none placeholder:text-slate-500 focus:border-cyan-400/60"
                placeholder="Clinic / business name"
              />

              <input
                value={whatsapp}
                onChange={(e) => setWhatsapp(e.target.value)}
                className="rounded-xl border border-white/10 bg-white/5 px-4 py-4 outline-none placeholder:text-slate-500 focus:border-cyan-400/60"
                placeholder="WhatsApp number"
              />

              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="rounded-xl border border-white/10 bg-white/5 px-4 py-4 outline-none placeholder:text-slate-500 focus:border-cyan-400/60"
                placeholder="Email address"
              />

              <select
                value={businessType}
                onChange={(e) => setBusinessType(e.target.value)}
                className="rounded-xl border border-white/10 bg-white/5 px-4 py-4 text-slate-400 outline-none focus:border-cyan-400/60"
              >
                <option value="">Business type</option>
                <option value="Dental clinic">Dental clinic</option>
                <option value="Beauty clinic">Beauty clinic</option>
                <option value="Dermatology clinic">Dermatology clinic</option>
                <option value="Other business">Other business</option>
              </select>

              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="min-h-32 rounded-xl border border-white/10 bg-white/5 px-4 py-4 outline-none placeholder:text-slate-500 focus:border-cyan-400/60"
                placeholder="What do you want to automate?"
              />

              <p className="text-center text-sm text-slate-500">
                We usually reply within 24 hours.
              </p>

              <button
                type="button"
                onClick={handleSubmit}
                disabled={loading}
                className="btn-interactive rounded-xl bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-600 px-6 py-4 font-semibold shadow-[0_0_45px_rgba(59,130,246,.45)] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? "Sending..." : "Get My Free Demo →"}
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}