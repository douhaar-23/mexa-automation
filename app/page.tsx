import {
  Bot,
  CalendarDays,
  ChevronDown,
  CirclePlay,
  ShieldCheck,
  MessageCircle,
  Sparkles,
} from "lucide-react";
import ChatDemo from "@/components/ChatDemo";

const logos = ["CLINIC+", "HealthCare Pro", "Smile Center", "DERMA CLINIC", "Wellness Hub", "PureCare"];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#020617] text-white overflow-hidden">
      <section className="relative min-h-screen overflow-hidden rounded-[28px] border border-white/10 bg-[#020617] mx-2 my-2">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_50%,#2563eb55,transparent_28%),radial-gradient(circle_at_92%_50%,#7c3aed66,transparent_28%),radial-gradient(circle_at_center,#0f172a,transparent_60%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:70px_70px]" />
        <div className="orbit orbit-one" />
        <div className="orbit orbit-two" />
        <div className="star-field" />

        <nav className="relative z-20 flex items-center justify-between px-10 py-7">
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

          <div className="hidden items-center gap-10 text-sm font-medium text-white/95 md:flex">
            <span className="flex items-center gap-1">Products <ChevronDown size={14} /></span>
            <span className="flex items-center gap-1">Solutions <ChevronDown size={14} /></span>
            <span>Pricing</span>
            <span className="flex items-center gap-1">Resources <ChevronDown size={14} /></span>
            <span>About Us</span>
          </div>

          <div className="hidden items-center gap-4 md:flex">
            <button className="rounded-xl border border-white/10 px-7 py-3 text-sm">Log in</button>
            <button className="rounded-xl bg-gradient-to-r from-blue-500 to-violet-600 px-7 py-3 text-sm shadow-[0_0_35px_rgba(59,130,246,.45)]">
              Book a Free Demo
            </button>
          </div>
        </nav>

        <div className="relative z-10 flex min-h-[72vh] items-center justify-center px-6 text-center">
          <div>
            <div className="mx-auto mb-10 flex w-fit items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-xs tracking-[0.22em] text-white/80 backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-violet-400" />
              AI EMPLOYEES THAT NEVER SLEEP
            </div>

            <h1 className="mx-auto max-w-5xl text-5xl font-semibold leading-tight tracking-[-0.04em] md:text-7xl">
              While you sleep,
              <br />
              your business{" "}
              <span className="bg-gradient-to-r from-blue-400 to-violet-500 bg-clip-text text-transparent">
                keeps working.
              </span>
            </h1>

            <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-slate-300">
              AI employees that answer customers, schedule appointments,
              <br className="hidden md:block" />
              automate daily operations, and help your business grow — 24/7.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-5 sm:flex-row">
              <button className="rounded-2xl bg-gradient-to-r from-blue-500 to-violet-600 px-10 py-4 font-medium shadow-[0_0_45px_rgba(59,130,246,.45)]">
                Book a Free Demo →
              </button>
              <button className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 px-10 py-4 font-medium backdrop-blur">
                Watch 60s Demo <CirclePlay size={22} />
              </button>
            </div>
          </div>
        </div>

        <FloatingCard className="left-14 top-56" icon={<CalendarDays />} title="Appointments Booked" value="1,248" sub="+28% this week" />
        <FloatingCard className="right-16 top-64" icon={<MessageCircle />} title="Messages Handled" value="3,682" sub="+28% this week" green />
        <FloatingCard className="bottom-48 left-40" icon={<Bot />} title="AI Receptionist" value="Online" sub="Responding now" small />
        <FloatingCard className="bottom-48 right-32" icon={<ShieldCheck />} title="Trusted & Secure" value="98%" sub="Excellent" />

        <div className="relative z-10 mb-8 text-center">
          <p className="mb-7 text-xs tracking-[0.45em] text-white/45">TRUSTED BY MODERN BUSINESSES</p>
          <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-10 text-white/45">
            {logos.map((logo) => (
              <div key={logo} className="flex items-center gap-2 text-lg">
                <Sparkles size={22} />
                {logo}
              </div>
            ))}
          </div>
        </div>
      </section>
<section className="relative z-10 mx-2 mt-4 rounded-[28px] border border-white/10 bg-white/[0.03] px-8 py-20 text-white backdrop-blur-xl">
  <div className="mx-auto max-w-6xl text-center">
    <h2 className="text-4xl font-semibold tracking-[-0.04em] md:text-5xl">
      Why businesses choose{" "}
      <span className="bg-gradient-to-r from-blue-400 to-violet-500 bg-clip-text text-transparent">
        Mexa
      </span>
    </h2>

    <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 font-medium text-slate-400">
      Our AI Receptionist helps clinics answer patients instantly, automate bookings, reduce missed appointments, and keep every conversation secure.
    </p>

    <div className="mt-14 grid gap-6 md:grid-cols-4">
      {[
  [
    "24/7 AI Receptionist",
    "Patients receive instant replies any time of the day without waiting."
  ],
  [
    "Automatic Appointment Booking",
    "Book, reschedule, and cancel appointments automatically through WhatsApp."
  ],
  [
    "Reduce No-Shows",
    "Automatic reminders help reduce missed appointments and save clinic time."
  ],
  [
    "Secure Patient Data",
    "Patient conversations and booking information are encrypted and securely stored."
  ]
].map(([title, text]) => (
        <div
          key={title}
          className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 text-left transition hover:-translate-y-1 hover:bg-white/[0.07]"
        >
          <div className="mb-6 h-12 w-12 rounded-2xl bg-gradient-to-br from-blue-500/30 to-violet-500/30" />
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="mt-4 text-sm leading-6 text-slate-400">{text}</p>
        </div>
      ))}
    </div>
  </div>
</section>
<section className="mx-2 mt-4 rounded-[28px] border border-white/10 bg-[#040816] px-8 py-24 text-white">
  <div className="mx-auto max-w-7xl">
    <p className="mb-4 text-center text-sm font-medium uppercase tracking-[0.35em] text-cyan-300">
      OUR PRODUCTS
    </p>

    <h2 className="text-center text-5xl font-bold tracking-tight">
      Explore Our AI Products
    </h2>

    <p className="mx-auto mt-6 max-w-3xl text-center text-lg leading-8 text-slate-300">
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

        <button className="mt-8 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-600 px-6 py-3 font-semibold">
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
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-16px); }
        }

        @keyframes floatOrbit {
          0%, 100% { transform: translate(-50%, -50%) rotate(-12deg) scale(1); }
          50% { transform: translate(-50%, -50%) rotate(-8deg) scale(1.04); }
        }
      `}</style>
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