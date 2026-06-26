"use client";

import { useEffect, useState } from "react";

const messages = [
  {
    from: "patient",
    text: "Hi, I’d like to book an appointment.",
  },
  {
    from: "ai",
    text: "Sure. Which service are you looking for?",
  },
  {
    from: "patient",
    text: "Teeth cleaning.",
  },
  {
    from: "ai",
    text: "Great. You’re booked for tomorrow at 3:00 PM ✅",
  },
];

export default function ChatDemo() {
  const [visibleMessages, setVisibleMessages] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleMessages((current) =>
        current >= messages.length ? 1 : current + 1
      );
    }, 1300);

    return () => clearInterval(interval);
  }, []);

  return (
   <div className="mb-8 h-[320px] overflow-hidden rounded-3xl border border-white/10 bg-[#0b1220] shadow-[0_0_35px_rgba(59,130,246,.18)]">
      <div className="flex items-center justify-between border-b border-white/10 bg-white/[0.04] px-4 py-3">
        <div>
          <p className="text-sm font-semibold text-white">
            Mexa AI Receptionist
          </p>
          <p className="text-xs text-emerald-400">● Online</p>
        </div>
        <span className="text-lg">💬</span>
      </div>

      <div className="h-[240px] space-y-3 overflow-hidden p-4 text-sm">
        {messages.slice(0, visibleMessages).map((message, index) => (
          <div
            key={index}
            className={`max-w-[82%] rounded-2xl px-4 py-3 leading-5 transition-all duration-500 ${
              message.from === "ai"
                ? "ml-auto rounded-br-md bg-gradient-to-r from-cyan-500 to-violet-600 text-white"
                : "rounded-bl-md bg-slate-800 text-slate-100"
            }`}
          >
            {message.text}
          </div>
        ))}
      </div>
    </div>
  );
}