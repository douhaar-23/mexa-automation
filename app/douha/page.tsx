import Link from "next/link";
import {
  ArrowRight,
  Bot,
  BriefcaseBusiness,
  CalendarDays,
  Code2,
  Download,
  ExternalLink,
  GraduationCap,
  Mail,
  MapPin,
  Workflow,
} from "lucide-react";

const projects = [
  {
    title: "MexaAutomation",
    category: "AI Automation Platform",
    description:
      "An AI automation platform that helps clinics answer patients, manage bookings, send reminders, and automate daily operations through WhatsApp and Google Calendar.",
    technologies: [
      "Next.js",
      "TypeScript",
      "n8n",
      "WhatsApp API",
      "Google Calendar",
      "Google Sheets",
    ],
    liveUrl: "https://mexaautomation.com",
    githubUrl: "https://github.com/douhaar-23/mexa-automation",
    icon: Bot,
  },
  {
    title: "AI Clinic Booking System",
    category: "Workflow Automation",
    description:
      "A complete clinic booking workflow that collects patient information, checks available appointments, requests clinic approval, creates calendar events, and sends automatic reminders.",
    technologies: [
      "n8n",
      "REST APIs",
      "WhatsApp API",
      "Google Calendar",
      "Google Sheets",
    ],
    liveUrl: "https://mexaautomation.com/demo",
    githubUrl: "https://github.com/douhaar-23/mexa-clinic",
    icon: CalendarDays,
  },
  {
    title: "University Portal",
    category: "Web Development",
    description:
      "A modern Arabic university portal designed to help students explore universities, programs, scholarships, and admission services through a responsive interface.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
    ],
    liveUrl: "#contact",
    githubUrl: "https://github.com/douhaar-23",
    icon: GraduationCap,
  },
];

const skills = [
  {
    title: "AI Automation",
    icon: Workflow,
    items: [
      "n8n",
      "AI Workflows",
      "Business Process Automation",
      "API Integration",
      "AI Agents",
    ],
  },
  {
    title: "Web Development",
    icon: Code2,
    items: [
      "Next.js",
      "React",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "HTML",
      "CSS",
    ],
  },
  {
    title: "APIs & Infrastructure",
    icon: Bot,
    items: [
      "WhatsApp API",
      "Google Calendar API",
      "Google Sheets API",
      "REST APIs",
      "Docker",
      "Git",
      "GitHub",
    ],
  },
  {
    title: "Engineering Tools",
    icon: BriefcaseBusiness,
    items: [
      "SolidWorks",
      "MATLAB",
      "Proteus",
      "Arduino",
      "C++",
      "Python",
    ],
  },
];

const timeline = [
  {
    year: "2022",
    title: "Started Mechatronics Engineering",
    description:
      "Began studying Mechatronics Engineering at KTO Karatay University in Türkiye.",
  },
  {
    year: "2025",
    title: "Started Building Web Applications",
    description:
      "Developed practical experience with Next.js, React, TypeScript, and modern responsive interfaces.",
  },
  {
    
  year: "2026",
  title: "Designed and Built MexaAutomation",
  description:
    "Designed and developed a complete AI-powered clinic automation platform integrating WhatsApp, Google Calendar, Google Sheets, n8n, and Next.js.",
},
  {
  year: "Now",
  title: "Open to Remote Opportunities",
  description:
    "Available for remote roles, internships, and freelance projects in AI automation, workflow development, API integration, and web development.",
},
];

export default function DouhaPortfolioPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#020617] text-white">
      {/* Background */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute left-[-160px] top-[-120px] h-[460px] w-[460px] rounded-full bg-blue-600/20 blur-[150px]" />
        <div className="absolute right-[-180px] top-[180px] h-[500px] w-[500px] rounded-full bg-violet-600/20 blur-[170px]" />
        <div className="absolute bottom-[-180px] left-1/3 h-[450px] w-[450px] rounded-full bg-cyan-500/10 blur-[160px]" />
      </div>

      {/* Navigation */}
      <nav className="fixed left-1/2 top-4 z-50 flex w-[calc(100%-32px)] max-w-5xl -translate-x-1/2 items-center justify-between rounded-2xl border border-white/10 bg-[#020617]/90 px-5 py-3 shadow-2xl backdrop-blur-2xl md:px-6">
        <Link href="/douha" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 via-blue-500 to-violet-600 text-lg font-black">
            D
          </div>

          <div>
            <p className="font-bold leading-none">Douha Arab</p>
            <p className="mt-1 text-[10px] uppercase tracking-[0.25em] text-cyan-300">
              Portfolio
            </p>
          </div>
        </Link>

        <div className="hidden items-center gap-6 text-sm text-slate-300 lg:flex">
          <a href="#about" className="transition hover:text-cyan-300">
            About
          </a>

          <a href="#projects" className="transition hover:text-cyan-300">
            Projects
          </a>

          <a href="#skills" className="transition hover:text-cyan-300">
            Skills
          </a>

          <a href="#experience" className="transition hover:text-cyan-300">
            Experience
          </a>
        </div>

        <a
          href="#contact"
          className="rounded-xl bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-600 px-5 py-3 text-sm font-semibold shadow-[0_0_35px_rgba(59,130,246,.35)] transition hover:scale-[1.03]"
        >
          Contact Me
        </a>
      </nav>

      {/* Hero */}
      <section className="relative mx-2 mt-2 min-h-screen overflow-hidden rounded-[28px] border border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_50%,#2563eb55,transparent_28%),radial-gradient(circle_at_92%_50%,#7c3aed66,transparent_28%),radial-gradient(circle_at_center,#0f172a,transparent_65%)]" />

        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:70px_70px]" />

        <div className="relative z-10 mx-auto grid min-h-screen max-w-7xl items-center gap-16 px-6 pb-20 pt-32 xl:grid-cols-[1.15fr_0.85fr] lg:px-10">
          {/* Hero left */}
          <div>
            <div className="mb-8 flex w-fit items-center gap-3 rounded-full border border-cyan-400/20 bg-white/[0.04] px-5 py-3 text-xs font-medium tracking-[0.2em] text-white/90 backdrop-blur-xl">
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
              AVAILABLE FOR REMOTE OPPORTUNITIES
            </div>
<p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">
  AI Automation Developer
</p>

<h1 className="mt-5 max-w-4xl text-5xl font-black leading-[1.02] tracking-[-0.055em] sm:text-6xl lg:text-7xl">
  Building AI automation that helps businesses{" "}
  <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 bg-clip-text text-transparent">
    save time and grow.
  </span>
</h1>

<p className="mt-8 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">
  Hi, I&apos;m Douha Arab, an AI Automation Developer and
  Mechatronics Engineering student. I build intelligent workflows,
  API integrations, and modern web applications for real business needs.
</p>
<div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
  <a
    href="#projects"
    className="flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-600 px-8 py-4 font-semibold shadow-[0_0_45px_rgba(59,130,246,.4)] transition hover:scale-[1.03]"
  >
    View My Projects
    <ArrowRight size={18} />
  </a>

  <a
    href="https://mexaautomation.com"
    target="_blank"
    rel="noreferrer"
    className="flex items-center justify-center gap-2 rounded-2xl border border-cyan-400/30 bg-cyan-500/10 px-8 py-4 font-semibold text-cyan-100 transition hover:border-cyan-300 hover:bg-cyan-500/20"
  >
    Visit MexaAutomation
    <ExternalLink size={18} />
  </a>

  <a
    href="/douha-arab-cv.pdf"
    download
    className="flex items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/[0.04] px-8 py-4 font-semibold transition hover:border-cyan-400/40 hover:bg-white/[0.08]"
  >
    Download CV
    <Download size={18} />
  </a>
</div>

            <div className="mt-10 flex flex-wrap gap-5 text-sm text-slate-400">
              <a
                href="https://www.linkedin.com/in/douhaarab"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 transition hover:text-cyan-300"
              >
               <ExternalLink size={18} />
                LinkedIn
              </a>

              <a
                href="https://github.com/douhaar-23"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 transition hover:text-cyan-300"
              >
                <ExternalLink size={18} />
                GitHub
              </a>

              <a
                href="mailto:hello@mexaautomation.com"
                className="flex items-center gap-2 transition hover:text-cyan-300"
              >
                <Mail size={18} />
                Email
              </a>
            </div>
          </div>

          {/* Hero right */}
          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute -inset-8 rounded-[50px] bg-gradient-to-br from-cyan-500/20 via-blue-500/10 to-violet-500/20 blur-3xl" />

            <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-white/[0.05] p-7 shadow-2xl backdrop-blur-2xl">
              <div className="flex items-center justify-between">
                <div className="flex gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-400" />
                  <span className="h-3 w-3 rounded-full bg-yellow-400" />
                  <span className="h-3 w-3 rounded-full bg-green-400" />
                </div>

                <span className="text-xs text-slate-500">profile.tsx</span>
              </div>

              <div className="mt-8 rounded-3xl border border-white/10 bg-[#020617]/70 p-6">
                <p className="text-sm text-violet-300">const developer = {"{"}</p>

                <div className="mt-4 space-y-3 pl-5 font-mono text-sm leading-7">
                  <p>
                    <span className="text-cyan-300">name:</span>{" "}
                    <span className="text-emerald-300">
                      &quot;Douha Arab&quot;
                    </span>
                  </p>

                  <p>
                    <span className="text-cyan-300">role:</span>{" "}
                    <span className="text-emerald-300">
                      &quot;AI Automation Developer&quot;
                    </span>
                  </p>

                  <p>
                    <span className="text-cyan-300">location:</span>{" "}
                    <span className="text-emerald-300">
                      &quot;Türkiye&quot;
                    </span>
                  </p>

                  <p>
                    <span className="text-cyan-300">focus:</span> [
                  </p>

                  <div className="pl-5 text-emerald-300">
                    <p>&quot;AI Workflows&quot;,</p>
                    <p>&quot;Web Applications&quot;,</p>
                    <p>&quot;Business Automation&quot;</p>
                  </div>

                  <p>]</p>

                  <p>
                    <span className="text-cyan-300">available:</span>{" "}
                    <span className="text-violet-300">true</span>
                  </p>
                </div>

                <p className="mt-4 text-sm text-violet-300">{"};"}</p>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                  <p className="text-xs text-slate-500">Main Focus</p>
                  <p className="mt-2 font-semibold">AI Automation</p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                  <p className="text-xs text-slate-500">Core Stack</p>
                  <p className="mt-2 font-semibold">Next.js + n8n</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="mx-2 mt-4 rounded-[28px] border border-white/10 bg-white/[0.03] px-6 py-24 backdrop-blur-xl md:px-10"
      >
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.35em] text-cyan-300">
              About Me
            </p>

            <h2 className="mt-5 text-4xl font-bold tracking-tight md:text-6xl">
              Engineering mindset.
              <br />
              Digital solutions.
            </h2>
          </div>

          <div>
            <p className="text-lg leading-9 text-slate-300">
              I am a Mechatronics Engineering student and AI Automation
              Developer based in Türkiye. I combine engineering problem-solving
              with software development to build practical systems for real
              business needs.
            </p>

            <p className="mt-6 text-lg leading-9 text-slate-400">
              My work focuses on AI automation, workflow design, API
              integrations, and modern web development. I have developed
              appointment booking systems, WhatsApp automations, customer
              service workflows, dashboards, and responsive business websites.
            </p>

            <div className="mt-10 grid gap-4 md:grid-cols-3">
              <InfoCard icon={MapPin} title="Location" value="Konya, Türkiye" />

              <InfoCard
                icon={GraduationCap}
                title="Education"
                value="Mechatronics Engineering"
              />

              <InfoCard
                icon={BriefcaseBusiness}
                title="Status"
                value="Open to Opportunities"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="mx-2 mt-4 rounded-[28px] border border-white/10 bg-[#040816] px-6 py-16 md:px-10">
  <div className="mx-auto grid max-w-7xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
    {[
      {
        value: "3+",
        label: "Completed Projects",
      },
      {
        value: "10+",
        label: "API & Tool Integrations",
      },
      {
        value: "2",
        label: "Automation Systems",
      },
      {
        value: "15+",
        label: "Technologies Used",
      },
    ].map((item) => (
      <div
        key={item.label}
        className="rounded-[24px] border border-white/10 bg-white/[0.04] p-7 text-center transition hover:-translate-y-1 hover:border-cyan-400/30"
      >
        <p className="bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 bg-clip-text text-4xl font-black text-transparent md:text-5xl">
          {item.value}
        </p>

        <p className="mt-3 text-sm font-medium text-slate-400">
          {item.label}
        </p>
      </div>
    ))}
  </div>
</section>

      {/* Projects */}
      <section
        id="projects"
        className="mx-2 mt-4 rounded-[28px] border border-white/10 bg-[#040816] px-6 py-24 md:px-10"
      >
        <div className="mx-auto max-w-7xl">
          <p className="text-center text-sm font-medium uppercase tracking-[0.35em] text-cyan-300">
            Selected Work
          </p>

          <h2 className="mt-5 text-center text-4xl font-bold tracking-tight md:text-6xl">
            Featured Projects
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-center text-lg leading-8 text-slate-400">
            Real systems designed to automate operations, improve customer
            communication, and solve practical business problems.
          </p>

          <div className="mt-16 grid gap-8 lg:grid-cols-3">
            {projects.map((project) => {
              const Icon = project.icon;

              return (
                <article
                  key={project.title}
                  className="group flex h-full flex-col rounded-[30px] border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02] p-7 transition duration-300 hover:-translate-y-2 hover:border-cyan-400/30"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500/20 to-violet-500/20 ring-1 ring-cyan-400/20">
                    <Icon className="h-8 w-8 text-cyan-300" />
                  </div>

                  <p className="mt-8 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
                    {project.category}
                  </p>

                  <h3 className="mt-4 text-3xl font-bold">{project.title}</h3>

                  <p className="mt-5 flex-1 leading-7 text-slate-400">
                    {project.description}
                  </p>

                  <div className="mt-7 flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-xs text-slate-300"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>

                  <div className="mt-8 flex flex-wrap gap-3">
                    <a
                      href={project.liveUrl}
                      target={
                        project.liveUrl.startsWith("http")
                          ? "_blank"
                          : undefined
                      }
                      rel="noreferrer"
                      className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-3 text-sm font-semibold transition hover:scale-[1.03]"
                    >
                      View Project
                      <ArrowRight size={16} />
                    </a>

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 rounded-xl border border-white/10 px-5 py-3 text-sm font-semibold transition hover:border-cyan-400/40 hover:bg-white/[0.05]"
                    >
                      GitHub
                      <ExternalLink size={15} />
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section
        id="skills"
        className="mx-2 mt-4 rounded-[28px] border border-white/10 bg-white/[0.03] px-6 py-24 md:px-10"
      >
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-medium uppercase tracking-[0.35em] text-cyan-300">
            Technical Skills
          </p>

          <h2 className="mt-5 text-4xl font-bold tracking-tight md:text-6xl">
            Technologies I work with
          </h2>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {skills.map((skill) => {
              const Icon = skill.icon;

              return (
                <div
                  key={skill.title}
                  className="rounded-[28px] border border-white/10 bg-[#020617]/60 p-7 transition hover:border-cyan-400/30"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500/20 to-violet-500/20">
                      <Icon className="text-cyan-300" size={27} />
                    </div>

                    <h3 className="text-2xl font-bold">{skill.title}</h3>
                  </div>

                  <div className="mt-7 flex flex-wrap gap-3">
                    {skill.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-slate-300 transition hover:border-cyan-400/30 hover:text-white"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section
        id="experience"
        className="mx-2 mt-4 rounded-[28px] border border-white/10 bg-[#040816] px-6 py-24 md:px-10"
      >
        <div className="mx-auto max-w-5xl">
          <p className="text-center text-sm font-medium uppercase tracking-[0.35em] text-cyan-300">
            My Journey
          </p>

          <h2 className="mt-5 text-center text-4xl font-bold tracking-tight md:text-6xl">
            Education & Experience
          </h2>

          <div className="mt-16 grid gap-6 md:grid-cols-2">
  {timeline.map((item) => (
    <div
      key={item.year}
      className="rounded-[26px] border border-white/10 bg-white/[0.04] p-7 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30"
    >
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
        {item.year}
      </p>

      <h3 className="mt-4 text-2xl font-bold">{item.title}</h3>

      <p className="mt-4 leading-7 text-slate-400">
        {item.description}
      </p>
    </div>
  ))}
</div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="mx-2 mt-4 rounded-[28px] border border-cyan-400/30 bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-violet-600/10 px-6 py-24 text-center md:px-10"
      >
        <div className="mx-auto max-w-4xl">
          <p className="text-sm font-medium uppercase tracking-[0.35em] text-cyan-300">
            Let&apos;s Work Together
          </p>

          <h2 className="mt-5 text-4xl font-bold leading-tight tracking-tight md:text-6xl">
            Have a project or remote opportunity?
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-slate-300">
            I am available for remote roles, internships, freelance projects,
            AI automation systems, and modern web development work.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="mailto:hello@mexaautomation.com"
              className="flex items-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-600 px-8 py-4 font-semibold shadow-[0_0_45px_rgba(59,130,246,.35)] transition hover:scale-[1.03]"
            >
              <Mail size={19} />
              Send Me an Email
            </a>

            <a
              href="https://www.linkedin.com/in/douhaarab"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-2xl border border-white/15 bg-white/[0.04] px-8 py-4 font-semibold transition hover:border-cyan-400/40 hover:bg-white/[0.08]"
            >
              <ExternalLink size={19} />
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mx-2 mt-4 rounded-t-[28px] border border-white/10 bg-[#020617] px-6 py-10 md:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 text-center md:flex-row md:items-center md:justify-between md:text-left">
          <div>
            <p className="text-xl font-black">Douha Arab</p>
            <p className="mt-1 text-xs uppercase tracking-[0.3em] text-cyan-300">
              AI Automation Developer
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-400">
            <a
              href="mailto:hello@mexaautomation.com"
              className="hover:text-cyan-300"
            >
              Email
            </a>

            <a
              href="https://www.linkedin.com/in/douhaarab"
              target="_blank"
              rel="noreferrer"
              className="hover:text-cyan-300"
            >
              LinkedIn
            </a>

            <a
              href="https://github.com/douhaar-23"
              target="_blank"
              rel="noreferrer"
              className="hover:text-cyan-300"
            >
              GitHub
            </a>

            <a
              href="https://mexaautomation.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-cyan-300"
            >
              MexaAutomation
            </a>
          </div>

          <p className="text-sm text-slate-500">© 2026 Douha Arab</p>
        </div>
      </footer>
    </main>
  );
}

function InfoCard({
  icon: Icon,
  title,
  value,
}: {
  icon: React.ElementType;
  title: string;
  value: string;
}) {
  return (
    <div className="min-h-[150px] rounded-2xl border border-white/10 bg-[#020617]/60 p-5">
      <Icon className="text-cyan-300" size={23} />

      <p className="mt-4 text-xs uppercase tracking-[0.15em] text-slate-500">
        {title}
      </p>

      <p className="mt-2 text-sm font-semibold text-slate-200">{value}</p>
    </div>
  );
}