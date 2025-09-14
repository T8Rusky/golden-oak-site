// app/contact/page.tsx
import Link from "next/link";

export default function ContactPage() {
const PHONE_DISPLAY = "07477 667 813";
const PHONE_TEL = "+447477667813"; // international format
  const EMAIL = "info@goldenoakserviceslimited.co.uk";
  const ADDRESS = "135 Bowerdean Road, High Wycombe, HP13 6AY";

  const mailto = `mailto:${EMAIL}?subject=Golden%20Oak%20Enquiry&body=Hello%20Golden%20Oak,%0D%0A%0D%0AMy%20name%20is:%0D%0APhone:%0D%0AService%20I'm%20interested%20in:%0D%0A%0D%0AThanks!`;
  const whatsapp = `https://wa.me/${PHONE_TEL.replace("+", "")}?text=Hello%20Golden%20Oak%2C%20I'd%20like%20to%20ask%20about%20companionship%20support.`;

  return (
    <section className="section">
      <div className="container grid gap-10 md:grid-cols-2">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold">Get in Touch</h1>
          <p className="mt-4 text-black/70">
            The easiest way to reach us is by phone, WhatsApp, or email. We’ll reply quickly and arrange a friendly, no obligation chat.
          </p>

          <div className="mt-6 card space-y-3">
            <div>
              <div className="font-semibold">Phone</div>
              <a className="text-oak-leaf hover:underline text-lg" href={`tel:${PHONE_TEL}`}>
                {PHONE_DISPLAY}
              </a>
              <div className="text-sm text-black/60">Mon–Fri, 9:00–17:00</div>
            </div>

            <div>
              <div className="font-semibold">WhatsApp</div>
              <a className="text-oak-leaf hover:underline" href={whatsapp} target="_blank">
                Message us on WhatsApp
              </a>
            </div>

            <div>
              <div className="font-semibold">Email</div>
              <a className="text-oak-leaf hover:underline break-all" href={mailto}>
                {EMAIL}
              </a>
            </div>

            <div>
              <div className="font-semibold">Address</div>
              <p className="text-black/80">{ADDRESS}</p>
              <p className="text-sm text-black/60">
                We support clients across High Wycombe & Buckinghamshire.
              </p>
            </div>
          </div>
        </div>

        <div className="card">
          <h3 className="font-semibold text-lg">Choose how you’d like to contact us</h3>

          <div className="mt-5 grid gap-4">
            <a
              href={`tel:${PHONE_TEL}`}
              className="w-full rounded-full bg-oak-leaf px-6 py-4 text-center text-white text-lg font-semibold hover:bg-oak-leafDark transition"
            >
              Call {PHONE_DISPLAY}
            </a>

            <a
              href={whatsapp}
              target="_blank"
              className="w-full rounded-full border-2 border-oak-leaf px-6 py-4 text-center text-oak-leaf text-lg font-semibold hover:bg-oak-leaf hover:text-white transition"
            >
              Message on WhatsApp
            </a>

            <a
              href={mailto}
              className="w-full rounded-full bg-oak-gold px-6 py-4 text-center text-white text-lg font-semibold hover:bg-oak-goldDark transition"
            >
              Send an Email
            </a>
          </div>

          <p className="mt-4 text-sm text-black/60">
            Prefer a call back? Email us your name & number we’ll ring you.
          </p>
        </div>
      </div>
    </section>
  );
}
