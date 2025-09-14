import Image from "next/image";
import Link from "next/link";
import {
  Compass,
  Home,
  Users,
  ShieldCheck,
  HeartHandshake,
  ShoppingCart
} from "lucide-react";

// Main Page Component
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

// -----------------------------------------------------------------------------
// REUSABLE COMPONENTS
// -----------------------------------------------------------------------------

// Hero Section
function Hero() {
  return (
   <section
  className="relative min-h-[85vh] bg-cover bg-center pt-28"
  style={{ backgroundImage: 'url("/images/hero-bg.jpg")' }}
>
      <div className="absolute inset-0 bg-black/50" aria-hidden="true" />
      <div className="container relative z-10 flex h-full flex-col items-center justify-center text-center text-white">
<Image
  src="/logo-white.png"
  alt="Golden Oak Logo"
  width={420}
  height={420}
  className="mx-auto mb-10 h-40 w-auto md:h-52 drop-shadow-[0_0_25px_rgba(205,170,106,0.7)]"
  priority
/>
        <h1 className="max-w-4xl text-5xl font-extrabold leading-tight md:text-7xl">
          Compassionate Companionship,{" "}
          <span className="block text-oak-gold">Right Where You Are.</span>
        </h1>
        <p className="mt-6 max-w-2xl text-xl font-light text-white/90">
          Person-centred support that reduces loneliness, encourages
          independence, and brings peace of mind to families.
        </p>
        <div className="mt-12 flex gap-4">
          <Link
            href="/contact"
            className="rounded-full bg-oak-gold px-8 py-4 text-lg font-bold text-white shadow-lg transition-all hover:scale-105 hover:bg-oak-goldDark hover:shadow-xl"
            aria-label="Book a Free Chat"
          >
            Book a Free Chat
          </Link>
          <Link
            href="/services"
            className="rounded-full border-2 border-white px-8 py-4 text-lg font-bold text-white transition-all hover:scale-105 hover:bg-white hover:text-oak-leaf hover:shadow-lg"
            aria-label="View All Our Services"
          >
            View Services
          </Link>
        </div>
      </div>
    </section>
  );
}

// Why Us Section
function WhyUs() {
  const benefits = [
    {
      icon: <HeartHandshake size={48} className="text-oak-gold" />,
      title: "One-to-One Care",
      description:
        "Consistent, dedicated companionship tailored to individual needs."
    },
    {
      icon: <Users size={48} className="text-oak-gold" />,
      title: "Trusted Companions",
      description:
        "All our team members are fully DBS-checked for your peace of mind."
    },
    {
      icon: <Compass size={48} className="text-oak-gold" />,
      title: "Flexible Support",
      description:
        "In-home care and community outings, scheduled around your life."
    },
    {
      icon: <ShieldCheck size={48} className="text-oak-gold" />,
      title: "Transparent Pricing",
      description: "Simple, honest pricing with no hidden fees (£25–£26/hr)."
    }
  ];

  return (
    <section className="bg-oak-cream py-16">
      <div className="container text-center">
        <h2 className="mb-12 text-4xl font-bold">Why Families Choose Golden Oak</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="card p-6 text-center transition-transform hover:-translate-y-2"
            >
              <div className="mx-auto mb-4">{benefit.icon}</div>
              <h3 className="mb-2 text-xl font-semibold">{benefit.title}</h3>
              <p className="text-black/80">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Services Preview Section
function ServicesPreview() {
  const services = [
    {
      title: "Companionship",
      desc: "Friendly conversation, social outings, games & hobbies.",
      icon: <Users size={40} className="text-oak-gold" />
    },
    {
      title: "Home Help",
      desc: "Light cleaning, laundry, tidying & organisation.",
      icon: <Home size={40} className="text-oak-gold" />
    },
    {
      title: "Food & Shopping",
      desc: "Meal prep, cooking support & groceries.",
      icon: <ShoppingCart size={40} className="text-oak-gold" />
    }
  ];

  return (
    <section className="section bg-white py-16">
      <div className="container text-center">
        <h2 className="mb-12 text-4xl font-bold">Our Core Services</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.title}
              className="card flex flex-col items-center p-6 text-center transition-transform hover:shadow-xl"
            >
              <div className="mb-4">{s.icon}</div>
              <h3 className="text-2xl font-semibold">{s.title}</h3>
              <p className="mt-2 text-black/70">{s.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-12">
          <Link
            href="/services"
            className="inline-block rounded-full bg-oak-leaf px-8 py-4 text-lg font-bold text-white transition-all hover:bg-oak-leafDark hover:shadow-lg"
            aria-label="Explore All Our Services"
          >
            Explore All Services
          </Link>
        </div>
      </div>
    </section>
  );
}

// Testimonials Section
function Testimonials() {
  return (
    <section className="bg-oak-cream py-16">
      <div className="container text-center">
        <h2 className="mb-12 text-4xl font-bold">What Our Clients Say</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <blockquote className="card p-6 italic text-black/80">
            "Golden Oak has been a lifeline for our family. The support is exceptional and the peace of mind is priceless."
            <footer className="mt-4 font-semibold not-italic text-black">- Sarah P.</footer>
          </blockquote>
          <blockquote className="card p-6 italic text-black/80">
            "My companion is like a member of the family. The help with shopping and chores has made a huge difference."
            <footer className="mt-4 font-semibold not-italic text-black">- Michael R.</footer>
          </blockquote>
          <blockquote className="card p-6 italic text-black/80">
            "I highly recommend their services. The compassionate care and flexibility is exactly what we needed."
            <footer className="mt-4 font-semibold not-italic text-black">- Jane T.</footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
}

// Final Call-to-Action Section
function CtaSection() {
  return (
    <section className="bg-oak-leaf py-20 text-center text-white">
      <div className="container">
        <h2 className="mb-4 text-4xl font-bold">Ready to Start a Conversation?</h2>
        <p className="mb-8 text-xl text-white/90">
          We're here to answer your questions and find the perfect companionship solution.
        </p>
        <Link
          href="/contact"
          className="rounded-full bg-white px-10 py-5 text-xl font-bold text-oak-leaf transition-all hover:scale-105 hover:bg-gray-100 hover:shadow-xl"
          aria-label="Contact us today"
        >
          Get in Touch
        </Link>
      </div>
    </section>
  );
}
