type Service = { title: string; desc: string; price?: string };

const services: Service[] = [
  { title: "Companionship & Social Interaction", desc: "Conversation, walks, hobbies, community outings.", price: "£25/hr" },
  { title: "General Home Help", desc: "Light cleaning, ironing, laundry, tidying & organisation.", price: "£26/hr" },
  { title: "Food Preparation & Shopping", desc: "Meal prep, cooking support, groceries with or for you.", price: "£26/hr" },
  { title: "Transportation & Errands", desc: "Appointments, pharmacy trips, post office, safe local travel." },
  { title: "Medication Reminders", desc: "Friendly prompts to support your routine (non-clinical)." }
];

export default function ServicesPage() {
  return (
    <section className="section">
      <div className="container">
        <h1 className="text-3xl md:text-4xl font-bold">Our Services</h1>
        <p className="mt-4 text-black/70">
          Flexible, person-centred support. Minimum one-hour visits. Clear, transparent pricing.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {services.map((s) => (
            <div key={s.title} className="card">
              <h3 className="font-semibold text-lg">{s.title}</h3>
              <p className="mt-2 text-black/70">{s.desc}</p>
              {s.price && <p className="mt-3 font-semibold text-oak-leaf">{s.price}</p>}
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a href="/contact" className="inline-block px-6 py-3 rounded-full bg-oak-gold text-white hover:bg-oak-goldDark transition">
            Book a Free Consultation
          </a>
        </div>
      </div>
    </section>
  );
}
