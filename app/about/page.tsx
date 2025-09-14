export default function AboutPage() {
  return (
    <section className="section">
      <div className="container grid gap-8 md:grid-cols-2 items-start">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold">About Golden Oak</h1>
          <p className="mt-4 text-black/70">
            Golden Oak Services Limited is a companionship service based in High Wycombe,
            supporting older adults and anyone who benefits from regular social contact and practical help.
            Founded by Rumbidzai Rusike, our mission is to deliver compassionate, reliable,
            and person-centred support that helps people live independently and feel connected.
          </p>
          <div className="mt-6 grid gap-4">
            <div className="card">
              <h4 className="font-semibold">Our Values</h4>
              <p className="mt-2 text-black/70">
                Compassion, dignity, reliability, and continuity. The same friendly face, every time.
              </p>
            </div>
            <div className="card">
              <h4 className="font-semibold">Safeguarding & Trust</h4>
              <p className="mt-2 text-black/70">
                All staff are DBS-checked and trained in safeguarding, confidentiality, and lone working.
              </p>
            </div>
          </div>
        </div>
        <div className="card">
          <h3 className="font-semibold text-xl">Our Difference</h3>
          <ul className="mt-4 space-y-3 text-black/80">
            <li>• One-to-one support tailored to your lifestyle</li>
            <li>• Flexible visits at home or in the community</li>
            <li>• Community-first ethos with local partners</li>
            <li>• Healthcare-informed practice and policies</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
