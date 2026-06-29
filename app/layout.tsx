import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Mexa Automation | AI Automation for Clinics",
  description:
    "AI-powered automation for clinics and service businesses. Automate WhatsApp conversations, appointment booking, reminders, and daily workflows with Mexa.",
  keywords: [
    "AI Automation",
    "Clinic Automation",
    "WhatsApp Automation",
    "Appointment Booking",
    "Medical AI",
    "Business Automation",
    "Mexa Automation",
  ],
  authors: [{ name: "Mexa Automation" }],
  creator: "Mexa Automation",
  applicationName: "Mexa Automation",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} scroll-smooth`}
    >
      <body className="font-sans bg-[#070B16] text-white">
        {children}
      </body>
    </html>
  );
}