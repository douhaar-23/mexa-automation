"use client";
import {
  Bot,
  Calendar,
  CalendarDays,
  Bell,
  ChevronDown,
  CirclePlay,
  ShieldCheck,
  MessageCircle,
  Sparkles,
} from "lucide-react";
import ChatDemo from "@/components/ChatDemo";
import FadeIn from "@/components/FadeIn";
import { useState } from "react";
import Link from "next/link";

const logos = ["CLINIC+", "HealthCare Pro", "Smile Center", "DERMA CLINIC", "Wellness Hub", "PureCare"];

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const fadeUp = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};
  return (
    <main className="min-h-screen bg-[#020617] text-white overflow-hidden">
      <section className="relative min-h-screen overflow-hidden rounded-[28px] border border-white/10 bg-[#020617] mx-2 my-2">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_50%,#2563eb55,transparent_28%),radial-gradient(circle_at_92%_50%,#7c3aed66,transparent_28%),radial-gradient(circle_at_center,#0f172a,transparent_60%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:70px_70px]" />
        <div className="orbit orbit-one" />
        <div className="orbit orbit-two" />
        <div className="star-field" />

       <nav className="sticky top-4 z-50 mx-6 flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.05] px-8 py-7 backdrop-blur-2xl shadow-[0_8px_40px_rgba(0,0,0,.25)]">
          <div className="flex items-center gap-4">
            <div className="relative h-10 w-12">
              <div className="absolute left-0 top-2 h-8 w-3 rotate-[28deg] rounded-full bg-gradient-to-b from-violet-500 to-blue-500" />
              <div className="absolute left-4 top-2 h-8 w-3 -rotate-[28deg] rounded-full bg-gradient-to-b from-blue-400 to-violet-500" />
              <div className="absolute left-8 top-2 h-8 w-3 rotate-[28deg] rounded-full bg-gradient-to-b from-violet-500 to-blue-500" />
            </div>
            <div>
              <p className="text-[38px] font-black tracking-tight leading-none">
  Mexa
</p>
              <p className="mt-1 text-[11px] font-medium tracking-[0.45em] text-cyan-300 uppercase">
  AI AUTOMATION
</p>
            </div>
          </div>

          <div className="hidden items-center gap-10 text-[15px] font-medium text-white/70 md:flex">

  <a href="#products" className="group relative flex items-center gap-1 transition-all duration-300 hover:text-cyan-300">
    Products <ChevronDown size={14} />
    <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-cyan-300 transition-all duration-300 group-hover:w-full"></span>
  </a>

  <a href="#solutions" className="group relative flex items-center gap-1 transition-all duration-300 hover:text-cyan-300">
    Solutions <ChevronDown size={14} />
    <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-cyan-300 transition-all duration-300 group-hover:w-full"></span>
  </a>

  <a href="#pricing" className="group relative transition-all duration-300 hover:text-cyan-300">
    Pricing
    <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-cyan-300 transition-all duration-300 group-hover:w-full"></span>
  </a>

  <a href="#faq" className="group relative flex items-center gap-1 transition-all duration-300 hover:text-cyan-300">
    FAQs <ChevronDown size={14} />
    <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-cyan-300 transition-all duration-300 group-hover:w-full"></span>
  </a>

  <a href="/about" className="group relative transition-all duration-300 hover:text-cyan-300">
    About Us
    <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-cyan-300 transition-all duration-300 group-hover:w-full"></span>
  </a>

</div>

          <div className="hidden items-center gap-5 md:flex">
            <button className="btn-interactive rounded-xl border border-white/10 px-7 py-3 text-sm text-white/80 hover:border-cyan-400/40 hover:text-white">Log in</button>
           <a
  href="/contact"
  className="btn-interactive rounded-xl bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-600 px-9 py-4 text-base font-semibold shadow-[0_0_55px_rgba(59,130,246,.55)]"
>
  Book a Free Demo
</a>
          </div>
        </nav>

        <div className="relative z-10 flex min-h-[72vh] items-center justify-center px-6 text-center overflow-hidden">
          <div className="absolute left-1/2 top-1/2 -z-10 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[160px]" />

<div className="absolute right-0 top-24 -z-10 h-[420px] w-[420px] rounded-full bg-violet-500/10 blur-[150px]" />
          <div>
            <div className="mx-auto mb-10 flex w-fit items-center gap-3 rounded-full border border-cyan-400/20 bg-white/[0.04] px-6 py-3 text-xs font-medium tracking-[0.24em] text-white/90 backdrop-blur-xl">
              <span className="h-2 w-2 rounded-full bg-violet-400" />
              AI EMPLOYEES THAT NEVER SLEEP
            </div>

           <h1 className="mx-auto max-w-5xl text-5xl md:text-7xl font-bold leading-[1.05] tracking-[-0.06em]">
              While you sleep,
              <br />
              your business{" "}
              <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(59,130,246,.35)]">
                keeps working.
              </span>
            </h1>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-400 md:text-xl">
              AI employees that answer customers, schedule appointments,
              <br className="hidden md:block" />
              automate daily operations, and help your business grow — 24/7.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-5 sm:flex-row">
              <a
  href="/contact"
  className="btn-interactive rounded-2xl bg-gradient-to-r from-blue-500 to-violet-600 px-9 py-4 text-base font-semibold shadow-[0_0_45px_rgba(59,130,246,.45)]"
>
  Book a Free Demo →
</a>
              <Link
  href="/demo"
  className="btn-interactive flex items-center gap-4 rounded-2xl border border-white/20 px-9 py-4"
>
  Watch Demo
  <CirclePlay size={22} />
</Link>
            </div>
          </div>
        </div>

        <FloatingCard className="left-8 top-40" icon={<CalendarDays />} title="Appointments Booked" value="1,248" sub="+28% this week" />
        <FloatingCard className="right-8 top-60" icon={<MessageCircle />} title="Messages Handled" value="3,682" sub="+28% this week" green />
        <FloatingCard className="bottom-24 left-24" icon={<Bot />} title="AI Receptionist" value="Online" sub="Responding now" small />
        <FloatingCard className="bottom-24 right-20" icon={<ShieldCheck />} title="Trusted & Secure" value="98%" sub="Excellent" />

        <div className="relative z-10 -mt-4 mb-10 text-center">
          <p className="mb-5 text-xs tracking-[0.45em] text-white/45">TRUSTED BY MODERN BUSINESSES</p>
          <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-10 text-white/45">
            {logos.map((logo) => (
              <div key={logo} className="flex items-center gap-2 text-base md:text-lg">
                <Sparkles size={22} />
                {logo}
              </div>
            ))}
          </div>
        </div>
      </section>
<section className="relative z-10 mx-2 mt-4 rounded-[28px] border border-white/10 bg-white/[0.03] px-5 py-20 text-white backdrop-blur-xl md:px-8">
  <div className="mx-auto max-w-6xl text-center">
    <h2 className="text-4xl font-bold leading-tight tracking-[-0.05em] md:text-6xl">
      Why businesses choose{" "}
      <span className="bg-gradient-to-r from-blue-400 to-violet-500 bg-clip-text text-transparent">
        Mexa
      </span>
    </h2>

    <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-slate-400 md:text-xl">
      Our AI Receptionist helps clinics answer patients instantly, automate bookings, reduce missed appointments, and keep every conversation secure.
    </p>

    <div className="mt-16 grid gap-8 md:grid-cols-4">
      {[
        {
          icon: Bot,
          title: "24/7 AI Receptionist",
          text: "Patients receive instant replies any time of the day without waiting.",
        },
        {
          icon: Calendar,
          title: "Automatic Appointment Booking",
          text: "Book, reschedule, and cancel appointments automatically through WhatsApp.",
        },
        {
          icon: Bell,
          title: "Reduce No-Shows",
          text: "Automatic reminders help reduce missed appointments and save clinic time.",
        },
        {
          icon: ShieldCheck,
          title: "Secure Patient Data",
          text: "Patient conversations and booking information are encrypted and securely stored.",
        },
      ].map(({ icon: Icon, title, text }) => (
        <div
          key={title}
          className="card-interactive rounded-3xl border border-white/10 bg-white/[0.04] p-6 text-left"
        >
          <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500/20 to-violet-500/20 ring-1 ring-cyan-400/20 shadow-[0_10px_30px_rgba(34,211,238,0.12)]">
  <Icon className="h-8 w-8 text-cyan-300" />
</div>

          <h3 className="text-2xl font-bold">{title}</h3>
          <p className="mt-4 text-sm leading-6 text-slate-400">{text}</p>
        </div>
      ))}
    </div>
  </div>
</section>

<section id="products" className="mx-2 mt-4 rounded-[28px] border border-white/10 bg-[#040816] px-5 md:px-8 py-24 text-white">
  <div className="mx-auto max-w-7xl">
    <p className="mb-4 text-center text-sm font-medium uppercase tracking-[0.35em] text-cyan-300">
      OUR PRODUCTS
    </p>

    <h2 className="text-center text-3xl md:text-5xl font-bold tracking-tight">
      Explore Our AI Products
    </h2>

    <p className="mx-auto mt-6 max-w-3xl text-center text-base md:text-lg leading-8 text-slate-300">
      Start with our first AI product, then explore more automation solutions built for modern businesses.
    </p>

    <div className="mt-16 grid gap-8 lg:grid-cols-2">
      <div className="rounded-[30px] border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02] p-8">
     <ChatDemo />

<h3 className="text-3xl font-bold">
  AI Receptionist For Clinics
</h3>

        <p className="mt-5 leading-8 text-slate-300">
          A 24/7 AI receptionist that answers patient inquiries, books appointments, sends reminders, follows up automatically, and integrates with WhatsApp and Google Calendar.
        </p>

        <button className="btn-interactive mt-8 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-600 px-6 py-3 font-semibold">
          View Product →
        </button>
      </div>

      <div className="rounded-[30px] border border-dashed border-white/10 bg-white/[0.02] p-8">
        <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 text-3xl">
          ✨
        </div>

        <h3 className="text-3xl font-bold">Coming Soon</h3>

        <p className="mt-5 leading-8 text-slate-400">
         <span className="block">• AI Sales Agent</span>
<span className="block mt-2">• AI Customer Support</span>
<span className="block mt-2">• AI Internal Assistant</span>
<span className="block mt-2">• Custom AI Workflows</span>
        </p>

        <span className="mt-8 inline-block rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300">
          Coming Soon
        </span>
      </div>
    </div>
  </div>
</section>
      <style>{`
        .orbit {
          position: absolute;
          left: 50%;
          top: 50%;
          border: 1px solid rgba(59,130,246,.22);
          border-radius: 9999px;
          transform: translate(-50%, -50%) rotate(-12deg);
          pointer-events: none;
        }

        .orbit-one {
          width: 1180px;
          height: 520px;
          box-shadow: 0 0 45px rgba(59,130,246,.25);
          animation: floatOrbit 18s ease-in-out infinite;
        }

        .orbit-two {
          width: 980px;
          height: 420px;
          border-color: rgba(124,58,237,.18);
          animation: floatOrbit 25s ease-in-out infinite reverse;
        }

        .star-field {
          position: absolute;
          inset: 0;
          background-image:
            radial-gradient(circle, rgba(96,165,250,.8) 1px, transparent 1px),
            radial-gradient(circle, rgba(168,85,247,.7) 1px, transparent 1px);
          background-size: 180px 180px, 260px 260px;
          background-position: 20px 40px, 80px 120px;
          opacity: .45;
        }

        .floating-card {
          animation: cardFloat 5.5s ease-in-out infinite;
        }

       @keyframes cardFloat {
  0%,100% {
    transform: translateY(0px) scale(1);
  }

  50% {
    transform: translateY(16px) scale(1.03);
  }
}

        @keyframes floatOrbit {
          0%, 100% { transform: translate(-50%, -50%) rotate(-12deg) scale(1); }
          50% { transform: translate(-50%, -50%) rotate(-8deg) scale(1.04); }
        }
      `}</style>
      <section id="solutions" className="mx-2 mt-4 rounded-[28px] border border-white/10 bg-[#040816] px-5 py-24 text-white md:px-8">
  <div className="mx-auto max-w-6xl">
    <p className="text-center text-sm uppercase tracking-[0.35em] text-cyan-300">
      HOW IT WORKS
    </p>

    <h2 className="mt-4 text-center text-4xl font-bold">
      From WhatsApp Message
      <br />
      To Confirmed Appointment
    </h2>

    <div className="mt-16 grid gap-8 lg:grid-cols-4">

      <div className="card-interactive rounded-3xl border border-white/10 bg-white/[0.04] p-7">
        <div className="text-4xl">💬</div>
        <h3 className="mt-4 text-xl font-semibold">
          Patient Messages
        </h3>
        <p className="mt-3 text-slate-400">
          Patients contact your clinic through WhatsApp.
        </p>
      </div>

      <div className="card-interactive rounded-3xl border border-white/10 bg-white/[0.04] p-7">
        <div className="text-4xl">🤖</div>
        <h3 className="mt-4 text-xl font-semibold">
          AI Answers
        </h3>
        <p className="mt-3 text-slate-400">
          The AI answers questions and collects booking details.
        </p>
      </div>

      <div className="card-interactive rounded-3xl border border-white/10 bg-white/[0.03] p-6">
        <div className="text-4xl">📅</div>
        <h3 className="mt-4 text-xl font-semibold">
          Appointment Created
        </h3>
        <p className="mt-3 text-slate-400">
          Google Calendar is updated automatically.
        </p>
      </div>

      <div className="card-interactive rounded-3xl border border-white/10 bg-white/[0.03] p-6">
        <div className="text-4xl">✅</div>
        <h3 className="mt-4 text-xl font-semibold">
          Automatic Follow-up
        </h3>
        <p className="mt-3 text-slate-400">
          Confirmation and reminder messages are sent automatically.
        </p>
      </div>

    </div>
  </div>
</section>
<section id="pricing" className="mx-2 mt-4 rounded-[28px] border border-white/10 bg-[#040816] px-5 py-24 text-white md:px-8">
  <div className="mx-auto max-w-7xl">
    <p className="text-center text-sm font-medium uppercase tracking-[0.35em] text-cyan-300">
      PRICING
    </p>

    <h2 className="mt-4 text-center text-4xl font-bold text-3xl md:text-5xl">
      Simple plans for growing businesses
    </h2>

    <p className="mx-auto mt-6 max-w-3xl text-center text-base md:text-lg leading-8 text-slate-300">
      Choose the solution that best fits your clinic. Contact us for a personalized quote.
    </p>

    <div className="mt-16 grid gap-8 lg:grid-cols-3">
      {/* Starter */}
      <div className="card-interactive rounded-[30px] border border-white/10 bg-white/[0.03] p-8">
        <h3 className="text-2xl font-bold">Starter</h3>
        <p className="mt-4 text-slate-400">For small clinics and businesses starting with AI automation.</p>

        <div className="mt-8">
  <span className="text-2xl md:text-4xl font-bold">
    Starting from
  </span>
  <br />
  <span className="text-4xl md:text-6xl font-bold">
    $99
  </span>
</div>

        <ul className="mt-8 space-y-4 text-slate-300">
          <li>✓ WhatsApp AI Receptionist</li>
          <li>✓ Appointment Booking</li>
          <li>✓ Google Calendar Integration</li>
          <li>✓ Basic Support</li>
        </ul>

        <button className="btn-interactive mt-10 w-full rounded-xl border border-white/10 px-6 py-3 font-semibold hover:bg-white/10">
          Contact Sales
        </button>
      </div>

      {/* Professional */}
      <div className="card-interactive relative scale-[1.04] rounded-[30px] border border-cyan-400/40 bg-gradient-to-br from-cyan-500/10 to-violet-600/10 p-8 shadow-[0_0_50px_rgba(59,130,246,.20)]">
        <span className="absolute right-6 top-6 rounded-full border border-cyan-400/40 bg-gradient-to-r from-cyan-500/15 to-violet-500/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300 backdrop-blur">
  Most Popular
</span>

        <h3 className="text-2xl font-bold">Professional</h3>
        <p className="mt-4 text-slate-300">For businesses that want full automation and better customer follow-up.</p>

        <div className="mt-8">
          <span className="text-3xl md:text-5xl font-bold">Contact for Pricing</span>
          
        </div>

        <ul className="mt-8 space-y-4 text-slate-200">
          <li>✓ Everything in Starter</li>
          <li>✓ Appointment Reminders</li>
          <li>✓ Follow-up Messages</li>
          <li>✓ Analytics Dashboard</li>
          <li>✓ Priority Support</li>
        </ul>

        <button className="btn-interactive mt-10 w-full rounded-xl bg-gradient-to-r from-cyan-500 to-violet-600 px-6 py-3 font-semibold">
          Book Free Consultation
        </button>
      </div>

      {/* Enterprise */}
      <div className="card-interactive rounded-[30px] border border-white/10 bg-white/[0.03] p-8">
        <h3 className="text-2xl font-bold">Enterprise</h3>
        <p className="mt-4 text-slate-400">For companies that need custom AI workflows and advanced integrations.</p>

        <div className="mt-8">
          <span className="text-3xl md:text-5xl font-bold">Custom Quote</span>
        </div>

        <ul className="mt-8 space-y-4 text-slate-300">
          <li>✓ Multi-location Support</li>
          <li>✓ Custom AI Agents</li>
          <li>✓ CRM Integration</li>
          <li>✓ Dedicated Support</li>
        </ul>

        <button className="btn-interactive mt-10 w-full rounded-xl border border-white/10 px-6 py-3 font-semibold hover:bg-white/10">
          Book Free Consultation
        </button>
      </div>
    </div>
  </div>
</section>


<section id="faq" className="mx-2 mt-4 rounded-[28px] border border-white/10 bg-[#040816] px-5 py-24 text-white md:px-8">
  <div className="mx-auto max-w-4xl">
    <p className="text-center text-sm font-medium uppercase tracking-[0.35em] text-cyan-300">
      FAQ
    </p>

    <h2 className="mt-4 text-center text-3xl font-bold md:text-5xl">
      Common questions
    </h2>

    <div className="mt-14 space-y-5">
      {[
  [
    "How long does setup take?",
    "Most clinics can go live within 5–7 business days. During setup, we configure the WhatsApp workflow, booking process, clinic services, working hours, Google Calendar connection, and reminder messages. Before launch, we test the full booking flow to make sure everything works correctly.",
  ],
  [
    "Does Mexa work with WhatsApp?",
    "Yes. Mexa can connect with WhatsApp Business to answer patient questions, collect booking details, send appointment reminders, and notify your team when a new request arrives.",
  ],
  [
    "Can it connect to Google Calendar?",
    "Yes. Confirmed appointments can be added automatically to Google Calendar, helping your team stay updated without manually copying booking details.",
  ],
  [
    "Is patient data secure?",
    "Security is a core part of the system. We use secure connections, controlled access, and protected cloud infrastructure to help keep clinic and patient information private.",
  ],
  [
    "Can I request a custom system?",
    "Yes. Every clinic has a different workflow. Mexa can be customized based on your services, booking rules, languages, staff process, and follow-up needs.",
  ],
  [
    "Do you provide support after launch?",
    "Yes. After deployment, we can help monitor the system, adjust automations, improve responses, and add new features as your clinic grows.",
  ],
].map(([q, a], index) => (
  <div
    key={q}
    className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition-all duration-300 hover:border-cyan-400/40"
  >
    <button
      onClick={() => setOpenFaq(openFaq === index ? null : index)}
      className="flex w-full items-center justify-between p-6 text-left"
    >
      <span className="text-lg font-semibold">{q}</span>

      <ChevronDown
        className={`transition-transform duration-300 ${
          openFaq === index ? "rotate-180 text-cyan-300" : ""
        }`}
      />
    </button>

    <div
      className={`grid transition-all duration-300 ${
        openFaq === index
          ? "grid-rows-[1fr]"
          : "grid-rows-[0fr]"
      }`}
    >
      <div className="overflow-hidden">
        <p className="px-6 pb-6 text-slate-400">
          {a}
        </p>
      </div>
    </div>
  </div>
))}
    </div>
  </div>
</section>

<section id="contact" className="mx-2 mt-4 rounded-[28px] border border-cyan-400/30 bg-gradient-to-br from-cyan-500/10 to-violet-600/10 px-5 py-24 text-center text-white md:px-8">
  <h2 className="mx-auto max-w-4xl text-3xl font-bold md:text-6xl">
    Ready to automate your business?
  </h2>

  <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
    Start with a free demo and see how Mexa can answer customers, book appointments, and automate daily operations.
  </p>

  <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
    <a
  href="/contact"
  className="btn-interactive rounded-2xl bg-gradient-to-r from-cyan-500 to-violet-600 px-8 py-4 font-semibold shadow-[0_0_45px_rgba(59,130,246,.35)]"
>
  Book a Free Demo →
</a>

<a
  href="/contact"
  className="btn-interactive rounded-2xl border border-white/10 px-8 py-4 font-semibold hover:bg-white/10"
>
  Contact Sales
</a>
  </div>
</section>

<footer className="mx-2 mt-4 rounded-t-[28px] border border-white/10 bg-[#020617] px-5 py-10 text-white md:px-8">
  <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
    <div>
      <p className="text-2xl font-black">Mexa</p>
      <p className="mt-1 text-xs tracking-[0.35em] text-cyan-300">AI AUTOMATION</p>
    </div>

    <div className="flex flex-wrap gap-6 text-sm text-slate-400">
      <div className="flex flex-wrap gap-6 text-sm text-slate-400">
  <a href="#products" className="hover:text-cyan-300 transition">
    Products
  </a>

  <a href="#pricing" className="hover:text-cyan-300 transition">
    Pricing
  </a>

  <a href="/about" className="hover:text-cyan-300 transition">
    About
  </a>

  <a href="/testimonials" className="hover:text-cyan-300 transition">
    Testimonials
  </a>

  <a href="/contact" className="hover:text-cyan-300 transition">
    Contact
  </a>

  <a href="/privacy" className="hover:text-cyan-300 transition">
    Privacy Policy
  </a>

  <a href="/terms" className="hover:text-cyan-300 transition">
    Terms
  </a>
</div>
    </div>

    <p className="text-sm text-slate-500">
      © 2026 Mexa Automation
    </p>
  </div>
</footer>
    </main>
  );
}

function FloatingCard({
  className,
  icon,
  title,
  value,
  sub,
  green,
  small,
}: {
  className: string;
  icon: React.ReactNode;
  title: string;
  value: string;
  sub: string;
  green?: boolean;
  small?: boolean;
}) {
  return (
    <div className={`floating-card absolute z-20 hidden w-[250px] rounded-3xl border border-white/10 bg-white/[0.06] p-5 shadow-[0_0_40px_rgba(15,23,42,.7)] backdrop-blur-xl lg:block ${className}`}>
      <div className="flex items-center gap-4">
        <div className={`flex h-14 w-14 items-center justify-center rounded-full ${green ? "bg-emerald-500/20 text-emerald-300" : "bg-blue-500/20 text-blue-300"}`}>
          {icon}
        </div>
        <div>
          <p className="text-sm text-slate-400">{title}</p>
          <p className={`${small ? "text-xl" : "text-3xl"} mt-1 font-semibold`}>{value}</p>
          <p className={`${green ? "text-emerald-400" : "text-emerald-400"} mt-1 text-sm`}>{sub}</p>
        </div>
      </div>
      <div className="mt-4 h-8 rounded-full bg-gradient-to-r from-blue-500/30 via-violet-500/30 to-transparent opacity-70" />
    </div>
  );
}