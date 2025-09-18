import Link from "next/link";
import Image from "next/image";

import {
  HeartHandshake,
  Car,
  Home,
  Users,
  BriefcaseMedical,
  Phone,
  Book,
} from "lucide-react";

export const metadata = {
  title: "Our Services | Golden Oak Services",
  description:
    "Flexible, person‑centred support for companionship, community outings, transport & errands, and home help — with tailored specialist strands.",
};

export default function ServicesPage() {
  return (
    <main>
      {/* Hero with Image */}
      <section className="container py-12 md:py-16">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full bg-oak-cream px-4 py-1 text-sm font-medium text-oak-ink">
            Our Services
          </span>
          <h1 className="mt-4 text-3xl font-semibold tracking-tight text-oak-ink md:text-5xl">
            Support that's centred around you.
          </h1>
          <p className="mt-4 text-oak-ink/80">
            We provide flexible, friendly help at home and in the community, designed to promote independence and make daily life more enjoyable. Every member of our team is fully trained and DBS-checked for your complete peace of mind.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <a
              href="/contact"
              className="pill bg-oak-blue text-white hover:opacity-90"
            >
              Start the conversation
            </a>
            <a
              href="#services"
              className="pill border border-oak-blue text-oak-blue hover:bg-oak-cream"
            >
              See our services
            </a>
          </div>
        </div>
        {/* Add the new hero image below the text */}
        <div className="relative mt-12 w-full h-80 md:h-96 rounded-lg overflow-hidden shadow-card">
          <Image
            src="/images/services-hero.jpg"
            alt="Golden Oak Services providing compassionate companionship"
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-300 hover:scale-105"
          />
        </div>
      </section>

      {/* Core Services Section with Images */}
      <section id="services" className="bg-white py-16">
        <div className="container text-center">
          <h2 className="mb-12 text-3xl md:text-4xl font-bold text-oak-blue">
            Our Core Services
          </h2>
          <div className="grid gap-12 lg:gap-16">
            
            {/* Companionship */}
            <div className="grid gap-8 md:grid-cols-2 md:items-center">
              <div className="relative h-64 w-full md:h-80 rounded-lg overflow-hidden shadow-card">
                <Image
                  src="/images/services-companionship.jpg"
                  alt="Golden Oak Services providing companionship on an escorted walk"
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="w-full text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start mb-4">
                  <HeartHandshake size={40} className="text-oak-gold" />
                  <h3 className="ml-3 text-2xl md:text-3xl font-bold">Companionship & Social Interaction</h3>
                </div>
                <p className="mt-2 text-oak-inkSoft">
                  Enjoy genuine, one-on-one companionship, tailored to your interests and needs, that brings comfort and joy to your day.
                </p>
                <ul className="mt-4 w-full list-disc space-y-1 pl-6 text-left text-sm text-oak-ink/90">
                  <li>Community groups & outings</li>
                  <li>Escorted walks</li>
                  <li>Social activities & hobbies</li>
                </ul>
              </div>
            </div>

            {/* Transport & Errands */}
            <div className="grid gap-8 md:grid-cols-2 md:items-center md:flex-row-reverse">
              <div className="relative h-64 w-full md:h-80 rounded-lg overflow-hidden shadow-card">
                <Image
                  src="/images/services-transportation.jpg"
                  alt="Golden Oak Services assisting with errands like grocery shopping"
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="w-full text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start mb-4">
                  <Car size={40} className="text-oak-gold" />
                  <h3 className="ml-3 text-2xl md:text-3xl font-bold">Transportation & Errands</h3>
                </div>
                <p className="mt-2 text-oak-inkSoft">
                  Take the stress out of daily errands and appointments with a practical helping hand and friendly company.
                </p>
                <ul className="mt-4 w-full list-disc space-y-1 pl-6 text-left text-sm text-oak-ink/90">
                  <li>Grocery shopping & errands</li>
                  <li>Medical appointments</li>
                  <li>Prescription collections</li>
                </ul>
              </div>
            </div>
            
            {/* General Home Help */}
            <div className="grid gap-8 md:grid-cols-2 md:items-center">
              <div className="relative h-64 w-full md:h-80 rounded-lg overflow-hidden shadow-card">
                <Image
                  src="/images/services-home-help.jpg"
                  alt="Golden Oak Services providing home help like meal preparation"
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="w-full text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start mb-4">
                  <Home size={40} className="text-oak-gold" />
                  <h3 className="ml-3 text-2xl md:text-3xl font-bold">General Home Help</h3>
                </div>
                <p className="mt-2 text-oak-inkSoft">
                  A helping hand with everyday household tasks to keep things running smoothly, at your own pace.
                </p>
                <ul className="mt-4 w-full list-disc space-y-1 pl-6 text-left text-sm text-oak-ink/90">
                  <li>Light cleaning & laundry</li>
                  <li>Meal preparation</li>
                  <li>Putting away shopping</li>
                </ul>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Specialist Support Strands */}
      <section id="specialist" className="container py-10 md:py-14">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-8 text-center text-3xl md:text-4xl font-bold text-oak-blue">
            Specialist Support Strands
          </h2>
          <p className="mt-3 text-center text-oak-ink/80">
            Life changes can bring new challenges. Our tailored support is designed to build confidence, reduce loneliness, and make every day easier.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <article className="card flex flex-col items-start p-6">
              <div className="mb-3">
                <Users size={32} className="text-oak-gold" />
              </div>
              <h3 className="font-semibold text-oak-ink">Recently Bereaved</h3>
              <p className="mt-1 text-sm text-oak-ink/80">
                A compassionate companion to gently ease the transition after loss.
              </p>
            </article>
            <article className="card flex flex-col items-start p-6">
              <div className="mb-3">
                <BriefcaseMedical size={32} className="text-oak-gold" />
              </div>
              <h3 className="font-semibold text-oak-ink">Post-Hospital Social Support</h3>
              <p className="mt-1 text-sm text-oak-ink/80">
                A friendly face to help you build confidence and re-adjust to life at home (non-clinical support).
              </p>
            </article>
            <article className="card flex flex-col items-start p-6">
              <div className="mb-3">
                <Users size={32} className="text-oak-gold" />
              </div>
              <h3 className="font-semibold text-oak-ink">New to the Area</h3>
              <p className="mt-1 text-sm text-oak-ink/80">
                A friendly guide to help you get to know your community and make new connections.
              </p>
            </article>
            <article className="card flex flex-col items-start p-6">
              <div className="mb-3">
                <Book size={32} className="text-oak-gold" />
              </div>
              <h3 className="font-semibold text-oak-ink">Memory-Lane Reminiscence</h3>
              <p className="mt-1 text-sm text-oak-ink/80">
                Engaging conversations and activities designed to spark and celebrate positive memories.
              </p>
            </article>
            <article className="card flex flex-col items-start p-6">
              <div className="mb-3">
                <Users size={32} className="text-oak-gold" />
              </div>
              <h3 className="font-semibold text-oak-ink">Men’s Shed Connections</h3>
              <p className="mt-1 text-sm text-oak-ink/80">
                Encouragement and transport to local Men’s Shed or similar community groups.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-oak-blue py-20 text-center text-white">
        <div className="container">
          <h2 className="mb-4 text-3xl md:text-4xl font-bold">
            Ready to Start a Conversation?
          </h2>
          <p className="mb-8 text-lg md:text-xl text-white/90">
            Let's discuss your needs and tailor a support plan that works for you.
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
    </main>
  );
}