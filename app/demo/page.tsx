"use client";

import { useEffect, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Play,
  X,
} from "lucide-react";

const demos = [
  {
    title: "Full System Demo",
    desc: "Watch the complete clinic booking automation workflow.",
    thumbnail: "/demo/thumbnails/full-system-demo.png",
    video: "/demo/videos/full-system-demo.mp4",
    duration: "3:23",
  },
  {
    title: "Website Booking",
    desc: "Patients book appointments directly from the clinic website.",
    thumbnail: "/demo/thumbnails/website-booking.png",
    video: "/demo/videos/website-booking.mp4",
    duration: "0:35",
  },
  {
    title: "WhatsApp Booking",
    desc: "Patients can book appointments automatically through WhatsApp.",
    thumbnail: "/demo/thumbnails/whatsapp-booking.png",
    video: "/demo/videos/whatsapp-booking.mp4",
    duration: "0:45",
  },
  {
    title: "Appointment Approval",
    desc: "Clinic owners can approve appointment requests with one click.",
    thumbnail: "/demo/thumbnails/appointment-approval.png",
    video: "/demo/videos/owner-approval.mp4",
    duration: "0:18",
  },
  {
    title: "Appointment Rejection",
    desc: "Unavailable appointment requests can be rejected instantly.",
    thumbnail: "/demo/thumbnails/appointment-rejection.png",
    video: "/demo/videos/appointment-rejection.mp4",
    duration: "0:15",
  },
  {
    title: "Alternative Time Suggestions",
    desc: "The system automatically suggests available alternative times.",
    thumbnail: "/demo/thumbnails/alternative-time-suggestions.png",
    video: "/demo/videos/alternative-time-suggestions.mp4",
    duration: "0:18",
  },
  {
    title: "Google Calendar Sync",
    desc: "Confirmed appointments are added automatically to Google Calendar.",
    thumbnail: "/demo/thumbnails/google-calendar-sync.png",
    video: "/demo/videos/google-calendar-sync.mp4",
    duration: "0:09",
  },
  {
    title: "Clinic Dashboard",
    desc: "Manage bookings, filters, statuses, and patient requests in one place.",
    thumbnail: "/demo/thumbnails/dashboard.png",
    video: "/demo/videos/dashboard.mp4",
    duration: "0:29",
  },
  {
    title: "Automatic Reminders",
    desc: "Patients receive automatic WhatsApp reminders before appointments.",
    thumbnail: "/demo/thumbnails/whatsapp-reminders.png",
    video: "/demo/videos/whatsapp-reminders.mp4",
    duration: "0:05",
  },
];

export default function DemoPage() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const activeDemo =
    activeIndex !== null ? demos[activeIndex] : null;

  const closeVideo = () => {
    setActiveIndex(null);
  };

  const showPrevious = () => {
    if (activeIndex === null) return;

    setActiveIndex(
      activeIndex === 0 ? demos.length - 1 : activeIndex - 1
    );
  };

  const showNext = () => {
    if (activeIndex === null) return;

    setActiveIndex(
      activeIndex === demos.length - 1 ? 0 : activeIndex + 1
    );
  };

  useEffect(() => {
    if (activeIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [activeIndex]);

  useEffect(() => {
    const handleKeyboard = (event: KeyboardEvent) => {
      if (activeIndex === null) return;

      if (event.key === "Escape") {
        closeVideo();
      }

      if (event.key === "ArrowLeft") {
        showPrevious();
      }

      if (event.key === "ArrowRight") {
        showNext();
      }
    };

    window.addEventListener("keydown", handleKeyboard);

    return () => {
      window.removeEventListener("keydown", handleKeyboard);
    };
  }, [activeIndex]);

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050816] px-6 py-20 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,#1e3a8a55,transparent_40%),radial-gradient(circle_at_bottom_right,#7c3aed44,transparent_35%)]" />

      <section className="relative mx-auto mb-16 max-w-6xl text-center">
        <p className="mb-5 text-sm tracking-[0.35em] text-cyan-300">
          MEXA DEMOS
        </p>

        <h1 className="mb-6 text-4xl font-bold leading-tight md:text-6xl">
          See MexaAutomation in Action
        </h1>

        <p className="mx-auto max-w-2xl text-lg leading-relaxed text-slate-300">
          Short product demos showing how MexaAutomation helps clinics manage
          bookings, approvals, reminders, and patient communication automatically.
        </p>
      </section>

      <section className="relative mx-auto grid max-w-6xl gap-7 md:grid-cols-2 lg:grid-cols-3">
        {demos.map((demo, index) => (
          <button
            key={demo.title}
            type="button"
            onClick={() => setActiveIndex(index)}
            className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-4 text-left shadow-xl transition-all duration-300 hover:-translate-y-2 hover:border-cyan-300/60 hover:bg-white/[0.07] hover:shadow-2xl hover:shadow-cyan-500/20"
          >
            <div className="relative mb-5 aspect-video overflow-hidden rounded-2xl border border-white/10 bg-slate-950">
              <img
                src={demo.thumbnail}
                alt={`${demo.title} demo cover`}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/30" />

              <span className="absolute bottom-3 right-3 rounded-lg bg-black/75 px-2.5 py-1 text-xs font-semibold text-white backdrop-blur-md">
                {demo.duration}
              </span>

              <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-all duration-300 group-hover:opacity-100">
                <div className="flex h-16 w-16 scale-90 items-center justify-center rounded-full border border-cyan-300/60 bg-black/60 shadow-xl shadow-cyan-500/30 backdrop-blur-md transition-transform duration-300 group-hover:scale-100">
                  <Play className="ml-1 h-7 w-7 fill-cyan-300 text-cyan-300" />
                </div>
              </div>
            </div>

            <div className="px-2 pb-2">
              <h2 className="mb-3 text-2xl font-semibold transition-colors group-hover:text-cyan-200">
                {demo.title}
              </h2>

              <p className="min-h-[72px] leading-relaxed text-slate-300">
                {demo.desc}
              </p>

              <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-cyan-300">
                <Play className="h-4 w-4 fill-cyan-300" />
                Watch demo
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </div>
            </div>
          </button>
        ))}
      </section>

      {activeDemo && activeIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-3 backdrop-blur-md"
          onClick={closeVideo}
        >
          <div
            className="relative flex h-[90vh] w-[95vw] max-w-7xl flex-col rounded-3xl border border-white/10 bg-[#080b1a] p-3 shadow-2xl shadow-cyan-950/50 md:p-5"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="mb-4 flex items-center justify-between gap-4 px-1">
              <div>
                <p className="text-xs tracking-[0.25em] text-cyan-300">
                  PRODUCT DEMO
                </p>

                <h2 className="mt-1 text-xl font-semibold md:text-2xl">
                  {activeDemo.title}
                </h2>
              </div>

              <button
                type="button"
                onClick={closeVideo}
                aria-label="Close video"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/10 transition-colors hover:bg-white/20"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="relative flex min-h-0 flex-1 items-center justify-center overflow-hidden rounded-2xl bg-black">
              <video
                key={activeDemo.video}
                src={activeDemo.video}
                controls
                autoPlay
                playsInline
                className="max-h-full max-w-full"
              >
                Your browser does not support video playback.
              </video>

              <button
                type="button"
                onClick={showPrevious}
                aria-label="Previous video"
                className="absolute left-3 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/60 text-white backdrop-blur-md transition hover:bg-black/85 md:left-5"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>

              <button
                type="button"
                onClick={showNext}
                aria-label="Next video"
                className="absolute right-3 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/60 text-white backdrop-blur-md transition hover:bg-black/85 md:right-5"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>

            <div className="mt-4 flex items-center justify-between px-1 text-sm text-slate-400">
              <span>
                {activeIndex + 1} / {demos.length}
              </span>

              <span>{activeDemo.duration}</span>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}