export default function ContactPage() {
  const mailto =
    "mailto:info@goldenoakserviceslimited.co.uk?subject=Enquiry%20from%20Website&body=Hello%20Golden%20Oak%2C%0D%0A%0D%0AMy%20name%20is%3A%20%0D%0AMy%20phone%20number%20is%3A%20%0D%0AService%20I%27m%20interested%20in%3A%20%0D%0A%0D%0AThanks!";

  return (
    <section className="section">
      <div className="container grid gap-8 md:grid-cols-2">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold">Get in Touch</h1>
          <p className="mt-4 text-black/70">
            Tell us a little about your needs. We’ll arrange a friendly, no-obligation chat.
          </p>

          <div className="mt-6 card">
            <h3 className="font-semibold text-lg">Contact Details</h3>
            <p className="mt-2 text-black/70">
              135 Bowerdean Road, High Wycombe, HP13 6AY
              <br />
              <a className="text-oak-leaf hover:underline" href="mailto:info@goldenoakserviceslimited.co.uk">
                info@goldenoakserviceslimited.co.uk
              </a>
            </p>
          </div>
        </div>

        <div className="card">
          <h3 className="font-semibold text-lg">Quick Message</h3>
          <form action={mailto} method="post" className="mt-4 grid gap-4">
            <input className="border rounded-lg px-4 py-3" type="text" name="name" placeholder="Your name" required />
            <input className="border rounded-lg px-4 py-3" type="email" name="email" placeholder="Your email" required />
            <input className="border rounded-lg px-4 py-3" type="tel" name="phone" placeholder="Your phone (optional)" />
            <textarea className="border rounded-lg px-4 py-3 min-h-[120px]" name="message" placeholder="How can we help?" required />
            <button className="px-6 py-3 rounded-full bg-oak-leaf text-white hover:bg-oak-leafDark transition" type="submit">
              Send Email
            </button>
            <p className="text-xs text-black/50">This opens your email to send us the message. We’ll reply ASAP.</p>
          </form>
        </div>
      </div>
    </section>
  );
}
