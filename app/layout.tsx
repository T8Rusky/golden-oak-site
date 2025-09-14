// app/layout.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import "./globals.css";

export const metadata: Metadata = {
  title: "Golden Oak Services Limited",
  description:
    "Compassionate companionship & home support across Buckinghamshire.",
  icons: { icon: "/favicon.ico" },
  openGraph: {
    title: "Golden Oak Services Limited",
    description:
      "Compassionate companionship & home support across Buckinghamshire.",
    type: "website",
    url: "https://your-domain-here.co.uk",
    siteName: "Golden Oak Services Limited",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // Update these any time:
  const PHONE_DISPLAY = "07477 667 813";
  const PHONE_TEL = "+447477667813";
  const EMAIL = "info@goldenoakserviceslimited.co.uk";
  const WHATSAPP = `https://wa.me/${PHONE_TEL.replace("+", "")}?text=Hello%20Golden%20Oak%2C%20I%27d%20like%20to%20ask%20about%20companionship%20support.`;

  const year = new Date().getFullYear();

  return (
    <html lang="en">
      <body className="bg-white text-oak-ink antialiased">
        <div className="min-h-screen flex flex-col">
          {/* Header */}
          <header className="sticky top-0 z-50 border-b border-black/5 bg-white/90 backdrop-blur-md">
            <div className="container py-5 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              {/* Brand */}
              <Link href="/" className="flex items-center gap-3" aria-label="Go to homepage">
                <Image
                  src="/logo.png"              // ensure /public/logo.png exists
                  alt="Golden Oak Logo"
                  width={240}
                  height={70}
                  className="h-12 w-auto md:h-14"
                  priority
                />
                <span className="font-semibold text-xl leading-tight text-oak-ink">
                  Golden Oak Services Limited
                </span>
              </Link>

              {/* Nav (stacks under brand on mobile) */}
              <nav className="flex flex-wrap items-center gap-4 md:gap-6">
                <Link className="hover:text-oak-blue text-oak-ink" href="/about">
                  About
                </Link>
                <Link className="hover:text-oak-blue text-oak-ink" href="/services">
                  Services
                </Link>
                <Link
                  className="rounded-full px-5 py-2.5 bg-oak-blue text-white font-semibold hover:bg-oak-blueDark transition"
                  href="/contact"
                >
                  Contact
                </Link>
              </nav>
            </div>
          </header>

          {/* Main content */}
          <main className="flex-1">{children}</main>

          {/* Footer */}
          <footer className="mt-10 border-t border-black/5 bg-white">
            {/* Blue contact strip */}
            <div className="bg-oak-blue text-white">
              <div className="container py-6 grid gap-4 sm:flex sm:items-center sm:justify-between">
                <a
                  href={`tel:${PHONE_TEL}`}
                  className="rounded-full px-6 py-3 font-semibold bg-white/10 hover:bg-white/20 transition"
                >
                  Call {PHONE_DISPLAY}
                </a>
                <a
                  href={WHATSAPP}
                  target="_blank"
                  className="rounded-full px-6 py-3 font-semibold bg-white/10 hover:bg-white/20 transition"
                >
                  WhatsApp Us
                </a>
                <a
                  href={`mailto:${EMAIL}`}
                  className="rounded-full px-6 py-3 font-semibold bg-white text-oak-blue hover:bg-gray-100 transition"
                >
                  {EMAIL}
                </a>
              </div>
            </div>

            {/* Footer body */}
            <div className="container py-10 grid gap-8 md:grid-cols-3">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <Image
                    src="/logo.png"
                    alt="Golden Oak Logo"
                    width={40}
                    height={40}
                    className="h-10 w-auto"
                  />
                  <span className="font-semibold">Golden Oak Services Limited</span>
                </div>
                <p className="text-sm text-oak-inkSoft">
                  Compassionate companionship & practical support. High Wycombe, Buckinghamshire.
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-2 text-oak-blue">Contact</h4>
                <p className="text-sm">
                  135 Bowerdean Road, High Wycombe, HP13 6AY
                  <br />
                  <a className="text-oak-blue hover:underline" href={`mailto:${EMAIL}`}>
                    {EMAIL}
                  </a>
                  <br />
                  <a className="text-oak-blue hover:underline" href={`tel:${PHONE_TEL}`}>
                    {PHONE_DISPLAY}
                  </a>
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-2 text-oak-blue">Company</h4>
                <p className="text-sm">
                  Company No. 16690026
                  <br />© {year} Golden Oak Services Limited. All rights reserved.
                </p>
                <div className="mt-2 text-sm">
                  <Link href="/privacy" className="hover:underline mr-3">
                    Privacy
                  </Link>
                  <Link href="/terms" className="hover:underline">
                    Terms
                  </Link>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
