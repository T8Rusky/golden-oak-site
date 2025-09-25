// app/page.tsx
import Image from "next/image";
import Link from "next/link";
import {
  Compass,
  Home,
  Users,
  ShieldCheck,
  HeartHandshake,
  Car, // Changed from ShoppingCart to Car
} from "lucide-react";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <WhyUs />
      <ServicesPreview />
      <Testimonials />
      <CtaSection />
    </main>
  );
}

/* ---------------------------------- Hero ---------------------------------- */
function Hero() {
  return (
    <section
      className="relative min-h-[85vh] bg-cover bg-center pt-36 md:pt-28"
      style={{ backgroundImage: 'url("/images/hero-bg.jpg")' }}
    >
      <div className="absolute inset-0 bg-black/40" aria-hidden="true" />
      <div className="container relative z-10 flex h-full flex-col items-center justify-center text-center text-white">
        {/* Large, clean logo */}
        <Image
          src="/logo-white.png"
          alt="Golden Oak Services Limited"
          width={900}
          height={900}
          className="mx-auto mb-10 h-56 w-auto sm:h-64 md:h-72 lg:h-80"
          priority
        />

        <h1 className="max-w-4xl text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
          Compassionate Companionship,{" "}
          <span className="block text-oak-gold">Right Where You Are.</span>
        </h1>

        <p className="mt-6 max-w-2xl text-lg md:text-xl font-light text-white/90">
          Person-centred support that reduces loneliness, encourages
          independence, and brings peace of mind to families.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/contact"
            className="pill bg-oak-blue text-white hover:bg-oak-blueDark shadow-card"
            aria-label="Book a Free Chat"
          >
            Book a Free Chat
          </Link>
          <Link
            href="/services"
            className="pill border-2 border-white text-white hover:bg-white hover:text-oak-blue"
            aria-label="View All Our Services"
          >
            View Services
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------- Why Families ------------------------------ */
function WhyUs() {
  const benefits = [
    {
      icon: <HeartHandshake size={48} className="text-oak-gold" />,
      title: "One-to-One Support",
      description:
        "Consistent, dedicated companionship tailored to individual needs.",
    },
    {
      icon: <Users size={48} className="text-oak-gold" />,
      title: "Trusted Companions",
      description:
        "All our team members are fully DBS-checked for your peace of mind.",
    },
    {
      icon: <Compass size={48} className="text-oak-gold" />,
      title: "Flexible Support",
      description:
        "In-home care and community outings, scheduled around your life.",
    },
    {
      icon: <ShieldCheck size={48} className="text-oak-gold" />,
      title: "Transparent Pricing",
      description: "Simple, honest rates with no hidden fees (Starting from £26/hr).",
    },
  ];

  return (
    <section className="bg-white py-16">
      <div className="container text-center">
        <h2 className="mb-12 text-3xl md:text-4xl font-bold text-oak-blue">
          Why Families Choose Golden Oak
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {benefits.map((b, i) => (
            <div
              key={i}
              className="card p-6 text-center transition-transform hover:-translate-y-1"
            >
              <div className="mx-auto mb-4">{b.icon}</div>
              <h3 className="mb-2 text-xl font-semibold">{b.title}</h3>
              <p className="text-oak-inkSoft">{b.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------- Services Grid ----------------------------- */
function ServicesPreview() {
  const services = [
    {
      title: "Companionship & Social Interaction",
      desc: "Friendly conversation, social outings, games & hobbies.",
      icon: <Users size={40} className="text-oak-gold" />,
      image: "/images/companionship.jpg",
    },
    {
      title: "Transportation & Errands",
      desc: "Accompanied appointments, grocery shopping & prescription collections.",
      icon: <Car size={40} className="text-oak-gold" />,
      image: "/images/transportation.jpg",
    },
    {
      title: "General Home Help",
      desc: "Light cleaning, laundry, tidying & organisation.",
      icon: <Home size={40} className="text-oak-gold" />,
      image: "/images/home-help.jpg",
    },
  ];

  return (
    <section className="section bg-white">
      <div className="container text-center">
        <h2 className="mb-12 text-3xl md:text-4xl font-bold text-oak-blue">
          Our Core Services
        </h2>
        <div className="grid gap-12 lg:gap-16">
          {services.map((s, index) => (
            <div
              key={s.title}
              className={`flex flex-col gap-8 md:flex-row md:items-center ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
            >
              <div className="relative h-64 w-full md:h-80 md:w-1/2 rounded-lg overflow-hidden shadow-card">
                <Image
                  src={s.image}
                  alt={s.title}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="w-full text-center md:w-1/2 md:text-left">
                <div className="flex items-center justify-center md:justify-start mb-4">
                  {s.icon}
                  <h3 className="ml-3 text-2xl md:text-3xl font-bold">{s.title}</h3>
                </div>
                <p className="mt-2 text-oak-inkSoft">{s.desc}</p>
                <div className="mt-4">
                  <Link href="/services" className="text-oak-blue hover:underline font-medium">
                    Learn more →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <Link
            href="/services"
            className="pill bg-oak-blue text-white hover:bg-oak-blueDark shadow-card"
            aria-label="Explore All Our Services"
          >
            Explore All Services
          </Link>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------- Testimonials ---------------------------- */
function Testimonials() {
  return (
    <section className="bg-oak-cream py-16">
      <div className="container text-center">
        <h2 className="mb-12 text-3xl md:text-4xl font-bold text-oak-blue">
          What Our Clients Say
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <blockquote className="card p-6 italic text-oak-inkSoft">
            “Golden Oak has been a lifeline for our family. The support is
            exceptional and the peace of mind is priceless.”
            <footer className="mt-4 font-semibold not-italic text-oak-ink">
              — Sarah P.
            </footer>
          </blockquote>
          <blockquote className="card p-6 italic text-oak-inkSoft">
            “My companion is like a member of the family. The help with shopping
            and chores has made a huge difference.”
            <footer className="mt-4 font-semibold not-italic text-oak-ink">
              — Michael R.
            </footer>
          </blockquote>
          <blockquote className="card p-6 italic text-oak-inkSoft">
            “I highly recommend their services. The compassionate care and
            flexibility is exactly what we needed.”
            <footer className="mt-4 font-semibold not-italic text-oak-ink">
              — Jane T.
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------- CTA ---------------------------------- */
function CtaSection() {
  return (
    <section className="bg-oak-blue py-20 text-center text-white">
      <div className="container">
        <h2 className="mb-4 text-3xl md:text-4xl font-bold">
          Ready to Start a Conversation?
        </h2>
        <p className="mb-8 text-lg md:text-xl text-white/90">
          We’re here to answer your questions and find the perfect companionship
          solution.
        </p>
        <Link
          href="/contact"
          className="pill bg-white text-oak-blue hover:bg-gray-100"
          aria-label="Contact us today"
        >
          Get in Touch
        </Link>
      </div>
    </section>
  );
}