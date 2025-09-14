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
    siteName: "Golden Oak Services Limited"
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const year = new Date().getFullYear();

  return (
    <html lang="en">
      <body className="bg-oak-cream text-oak-ink antialiased">
        <div className="min-h-screen flex flex-col">
          {/* Header */}
          <header className="sticky top-0 z-50 border-b border-black/5 bg-white/80 backdrop-blur-md">
            <div className="container py-5 flex items-center justify-between">
              <Link
                href="/"
                className="flex items-center gap-3"
                aria-label="Go to homepage"
              >
                <Image
                  src="/logo.png" // make sure this file exists
                  alt="Golden Oak Logo"
                  width={160}
                  height={40}
                  className="h-10 w-auto" // keeps proportions
                  priority
                />
                <span className="font-semibold text-lg whitespace-nowrap">
                  Golden Oak Services Limited
                </span>
              </Link>

              <nav className="flex items-center gap-6">
                <Link
                  className="hover:text-oak-leaf"
                  href="/about"
                  aria-label="About us"
                >
                  About
                </Link>
                <Link
                  className="hover:text-oak-leaf"
                  href="/services"
                  aria-label="Our services"
                >
                  Services
                </Link>
                <Link
                  className="px-4 py-2 rounded-full bg-oak-leaf text-white hover:bg-oak-leafDark transition"
                  href="/contact"
                  aria-label="Contact us"
                >
                  Contact
                </Link>
              </nav>
            </div>
          </header>

          {/* Main */}
          <main className="flex-1">{children}</main>

          {/* Footer */}
          <footer className="mt-10 border-t border-black/5 bg-white">
            <div className="container py-10 grid gap-8 md:grid-cols-3">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <Image
                    src="/logo.png"
                    alt="Golden Oak Logo"
                    width={32}
                    height={32}
                    className="h-8 w-auto"
                  />
                  <span className="font-semibold">
                    Golden Oak Services Limited
                  </span>
                </div>
                <p className="text-sm text-black/70">
                  Compassionate companionship & practical support. High Wycombe,
                  Buckinghamshire.
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Contact</h4>
                <p className="text-sm">
                  135 Bowerdean Road, High Wycombe, HP13 6AY
                  <br />
                  <a
                    className="text-oak-leaf hover:underline"
                    href="mailto:info@goldenoakserviceslimited.co.uk"
                  >
                    info@goldenoakserviceslimited.co.uk
                  </a>
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Company</h4>
                <p className="text-sm">
                  Company No. 16690026
                  <br />© {year} Golden Oak Services Limited. All rights
                  reserved.
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
