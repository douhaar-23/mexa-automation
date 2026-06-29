"use client";

import { useState } from "react";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      fullName: formData.get("fullName"),
      clinicName: formData.get("clinicName"),
      whatsapp: formData.get("whatsapp"),
      email: formData.get("email"),
      businessType: formData.get("businessType"),
      message: formData.get("message"),
      date: new Date().toISOString(),
    };

    await fetch("https://mexaautomation.com/webhook/contact-demo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    form.reset();
    setSuccess(true);
    window.scrollTo({
  top: 0,
  behavior: "smooth",
});

setTimeout(() => {
  setSuccess(false);
}, 5000);
    setLoading(false);
  };

  return (
    <main className="min-h-screen bg-[#020617] px-5 py-10 text-white md:px-10">
      <section className="mx-auto max-w-6xl rounded-[32px] border border-white/10 bg-white/[0.03] p-6 md:p-10">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <a href="/" className="text-sm text-cyan-300 hover:text-cyan-200">
              ← Back to Home
            </a>

            <p className="mt-10 text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">
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
              <p>✓ Response within 24 hours</p>
              <p>✓ No commitment required</p>
              <p>✓ Live personalized demo</p>
              <p>✓ Free automation consultation</p>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-[28px] border border-white/10 bg-[#061022] p-6 md:p-8"
          >
            {success && (
  <div className="mb-6 rounded-2xl border border-emerald-400/30 bg-emerald-500/10 p-4 text-emerald-300">
    <div className="flex items-center gap-3">
      <span className="text-xl">✅</span>
      <span>Demo request received. We'll contact you within 24 hours.</span>
    </div>
  </div>
)}

            <div className="grid gap-5">
              <input
                name="fullName"
                required
                className="rounded-xl border border-white/10 bg-white/5 px-4 py-4 outline-none placeholder:text-slate-500 focus:border-cyan-400/60"
                placeholder="Full name"
              />

              <input
                name="clinicName"
                required
                className="rounded-xl border border-white/10 bg-white/5 px-4 py-4 outline-none placeholder:text-slate-500 focus:border-cyan-400/60"
                placeholder="Clinic / business name"
              />

              <input
                name="whatsapp"
                required
                className="rounded-xl border border-white/10 bg-white/5 px-4 py-4 outline-none placeholder:text-slate-500 focus:border-cyan-400/60"
                placeholder="WhatsApp number"
              />

              <input
                name="email"
                type="email"
                required
                className="rounded-xl border border-white/10 bg-white/5 px-4 py-4 outline-none placeholder:text-slate-500 focus:border-cyan-400/60"
                placeholder="Business email"
              />

              <select
                name="businessType"
                required
                defaultValue=""
                className="rounded-xl border border-white/10 bg-white/5 px-4 py-4 text-slate-400 outline-none focus:border-cyan-400/60"
              >
                <option value="" disabled>
                  Business type
                </option>
                <option>Dental clinic</option>
                <option>Beauty clinic</option>
                <option>Dermatology clinic</option>
                <option>Medical center</option>
                <option>Other business</option>
              </select>

              <textarea
                name="message"
                required
                className="min-h-32 rounded-xl border border-white/10 bg-white/5 px-4 py-4 outline-none placeholder:text-slate-500 focus:border-cyan-400/60"
                placeholder="Tell us what you want to automate"
              />

              <p className="text-center text-sm text-slate-500">
                We usually reply within 24 hours.
              </p>

              <button
                type="submit"
                disabled={loading}
                className="btn-interactive rounded-xl bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-600 px-6 py-4 font-semibold disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? "Sending..." : "Request Free Demo →"}
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}