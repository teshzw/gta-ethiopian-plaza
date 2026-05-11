import React from "react";

function Card({ children }) {
  return <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">{children}</div>;
}

export default function App() {
  const objectives = [
    "Create a dedicated Ethiopian business plaza in the Greater Toronto Area.",
    "Bring Ethiopian restaurants, grocery stores, cafés, professional offices, and cultural businesses into one visible location.",
    "Identify serious entrepreneurs, business owners, professionals, and potential partners interested in the plaza project.",
    "Study suitable GTA locations with large parking, good road access, public transit, and strong customer traffic.",
    "Prepare a proper legal, financial, and real estate plan before collecting any investment money."
  ];

  const actionPlan = [
    {
      step: "Step 1",
      title: "Register Interest",
      detail: "Collect names and contact information from people interested in supporting or joining the GTA Ethiopian Plaza project."
    },
    {
      step: "Step 2",
      title: "Build a Core Group",
      detail: "Select serious community members, business owners, and professionals who can help organize the project."
    },
    {
      step: "Step 3",
      title: "Study Locations",
      detail: "Review possible plaza locations in Scarborough, North York, Etobicoke, Vaughan, Mississauga, and other GTA areas."
    },
    {
      step: "Step 4",
      title: "Prepare Business Plan",
      detail: "Estimate purchase price, down payment, mortgage options, tenant mix, rental income, and operating costs."
    },
    {
      step: "Step 5",
      title: "Create Legal Structure",
      detail: "Work with a lawyer, accountant, and commercial mortgage broker before any investment money is collected."
    }
  ];

  const communityExamples = [
    "Chinese communities developed plazas and malls such as Pacific Mall and First Markham Place.",
    "South Asian communities developed strong shopping districts and plazas in Brampton, Scarborough, and Mississauga.",
    "Filipino communities established Little Manila and Filipino-focused shopping centers.",
    "Korean communities developed Koreatown business corridors with restaurants, cafés, and retail stores.",
    "Italian and Portuguese communities built strong commercial neighborhoods and cultural business areas in Toronto.",
    "Middle Eastern and Somali communities created successful grocery, restaurant, and retail hubs across the GTA.",
    "Many immigrant communities grew by supporting each other's businesses and building visible commercial centers together.",
    "The Ethiopian community also has strong culture, food, coffee traditions, professionals, and entrepreneurs — so why not create our own GTA business plaza too?"
  ];

  const plazaBusinesses = [
    "Ethiopian Grocery Store",
    "Ethiopian Restaurant",
    "Coffee Ceremony Café",
    "Bakery",
    "Butcher or Halal Meat Shop",
    "Travel & Remittance Office",
    "Insurance & Tax Office",
    "Hair Salon & Barber",
    "Clothing & Cultural Goods Store",
    "Community Meeting/Event Space"
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <section className="bg-slate-950 text-white">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <p className="mb-4 inline-block rounded-full border border-white/20 px-4 py-2 text-sm text-white/90">
            GTA Ethiopian Plaza Initiative
          </p>
          <h1 className="max-w-4xl text-4xl font-bold tracking-tight md:text-6xl">
            Building a future Ethiopian business plaza in the Greater Toronto Area.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200 md:text-xl">
            A community business project to bring Ethiopian grocery, restaurants, cafés, offices, cultural services, and entrepreneurs together in one convenient GTA plaza with strong parking and customer access.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button className="rounded-2xl bg-white px-6 py-4 font-semibold text-slate-900 hover:bg-slate-100">Register Interest</button>
            <button className="rounded-2xl border border-white/30 bg-white/10 px-6 py-4 font-semibold text-white hover:bg-white/20">Learn About the Vision</button>
          </div>
          <p className="mt-5 text-sm text-slate-300">
            This is currently an interest-registration and planning initiative. It is not an investment offering.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-6 md:grid-cols-3">
          <Card>
            <h2 className="text-2xl font-bold">Vision</h2>
            <p className="mt-4 leading-7 text-slate-700">
              To create a recognized Ethiopian commercial plaza in the GTA where Ethiopian businesses can grow together and serve the wider community.
            </p>
          </Card>
          <Card>
            <h2 className="text-2xl font-bold">Mission</h2>
            <p className="mt-4 leading-7 text-slate-700">
              To organize serious community members, business owners, and professionals to study, plan, and develop a practical Ethiopian plaza project in the GTA.
            </p>
          </Card>
          <Card>
            <h2 className="text-2xl font-bold">Purpose</h2>
            <p className="mt-4 leading-7 text-slate-700">
              To increase Ethiopian business visibility, create jobs, support families, strengthen community identity, and build long-term economic opportunity.
            </p>
          </Card>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">Project Objectives</p>
          <h2 className="mt-2 text-3xl font-bold md:text-4xl">What this plaza project wants to achieve</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {objectives.map((item, index) => (
              <div key={index} className="rounded-2xl border bg-slate-50 p-5">
                <p className="leading-7 text-slate-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">Action Plan</p>
        <h2 className="mt-2 text-3xl font-bold md:text-4xl">How we will start the GTA Ethiopian Plaza</h2>
        <p className="mt-4 max-w-3xl leading-7 text-slate-700">
          The first stage is to register interest and build a trusted core group. No investment money should be collected until proper legal and financial structures are created.
        </p>
        <div className="mt-8 grid gap-5 md:grid-cols-5">
          {actionPlan.map((item, index) => (
            <Card key={index}>
              <p className="text-sm font-semibold text-slate-500">{item.step}</p>
              <h3 className="mt-2 text-lg font-bold">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-700">{item.detail}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">Learning From Other Communities</p>
          <h2 className="mt-2 text-3xl font-bold md:text-4xl">Why not Ethiopians too?</h2>
          <p className="mt-4 max-w-4xl leading-7 text-slate-700">
            Across the GTA, many immigrant communities built successful plazas, malls, and business districts by working together, supporting local businesses, and creating visible commercial centers. The Ethiopian community can also build a strong business destination in Canada.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {communityExamples.map((example, index) => (
              <div key={index} className="rounded-2xl border bg-slate-50 p-5">
                <p className="leading-7 text-slate-700">{example}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-900 text-white">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-slate-300">Plaza Business Mix</p>
              <h2 className="mt-2 text-3xl font-bold md:text-4xl">What businesses could be included?</h2>
              <p className="mt-4 leading-7 text-slate-300">
                The goal is to create one destination where the community can shop, eat, meet, work, and access services.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {plazaBusinesses.map((business, index) => (
                <div key={index} className="rounded-xl bg-white/10 p-3 text-sm text-white">
                  {business}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-8 md:grid-cols-2 md:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">Possible GTA Locations</p>
            <h2 className="mt-2 text-3xl font-bold md:text-4xl">Where should the plaza be?</h2>
            <p className="mt-4 leading-7 text-slate-700">
              The preferred location should have large parking, good road access, public transit, affordable commercial space, and strong multicultural customer traffic.
            </p>
            <div className="mt-6 rounded-2xl border bg-slate-50 p-5 text-slate-700">
              <h3 className="text-xl font-bold">Sample Plaza Opportunity</h3>
              <p className="mt-3 leading-7">
                Example commercial plaza currently identified for study:
              </p>
              <div className="mt-4 overflow-hidden rounded-xl border bg-white">
                <img
                  src="https://images.loopnet.ca/d2/9Q5s2g5QvR8sXqN3X7uG7n8L4oJ0fY6hK5bA1mP2eQ0/document.jpg"
                  alt="9100 Jane Street Plaza"
                  className="h-64 w-full object-cover"
                />
                <div className="p-4">
                <p><strong>9100 Jane Street Plaza</strong> — Vaughan, Ontario</p>
                <p className="mt-2">Approximate asking price: CAD $5.395 million</p>
                <p className="mt-2">Features: large parking area, near Vaughan Mills, Highway 400 & 407 access, retail plaza layout, multi-unit commercial space.</p>
                </div>
              </div>
            </div>

            <div className="mt-6 grid gap-3 text-slate-700">
              <div className="rounded-xl border bg-white p-4">Scarborough — Markham Road, Kennedy Road, Ellesmere, Lawrence, Sheppard areas</div>
              <div className="rounded-xl border bg-white p-4">North York — Keele, Finch, Wilson, Jane, and surrounding areas</div>
              <div className="rounded-xl border bg-white p-4">Vaughan — Jane Street, Highway 400, Vaughan Mills area</div>
              <div className="rounded-xl border bg-white p-4">Etobicoke/Mississauga — west GTA access and large parking plazas</div>
            </div>
          </div>
          <Card>
            <h3 className="text-2xl font-bold">Register your interest</h3>
            <p className="mt-4 leading-7 text-slate-700">
              We are looking for serious people interested in supporting, advising, renting space, partnering, or helping organize the GTA Ethiopian Plaza project.
            </p>
            <ul className="mt-5 space-y-3 text-slate-700">
              <li>Full name</li>
              <li>Email and phone number</li>
              <li>City and country</li>
              <li>Business or professional background</li>
              <li>How you want to participate</li>
              <li>Whether you are interested as tenant, organizer, advisor, or future partner</li>
            </ul>
            <button className="mt-7 w-full rounded-2xl bg-slate-900 py-4 font-semibold text-white hover:bg-slate-800">Register Interest</button>
            <div className="mt-5 rounded-2xl border bg-amber-50 p-4 text-sm leading-6 text-amber-900">
              Important: This form is only for interest registration. Do not send money. Investment discussions require proper legal, accounting, and real estate advice.
            </div>
          </Card>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="rounded-3xl border bg-slate-50 p-8 md:p-12">
            <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">Project Organization</p>
            <h2 className="mt-2 text-3xl font-bold md:text-4xl">Role of TRNY Consulting</h2>
            <p className="mt-6 max-w-4xl leading-8 text-slate-700">
              TRNY Consulting is helping organize and coordinate the GTA Ethiopian Plaza Initiative during the early planning stage. The goal is to connect interested community members, professionals, entrepreneurs, and business owners who want to help study and develop the vision of a future Ethiopian commercial plaza in the Greater Toronto Area.
            </p>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border bg-white p-5">
                <h3 className="text-xl font-bold">TRNY Consulting may help with:</h3>
                <ul className="mt-4 space-y-3 text-slate-700">
                  <li>• Community networking and communication</li>
                  <li>• Interest registration and outreach</li>
                  <li>• Organizing meetings and discussions</li>
                  <li>• Studying business and location opportunities</li>
                  <li>• Connecting professionals and business owners</li>
                </ul>
              </div>
              <div className="rounded-2xl border bg-white p-5">
                <h3 className="text-xl font-bold">Important Notice</h3>
                <p className="mt-4 leading-7 text-slate-700">
                  At this stage, TRNY Consulting is only helping organize the project vision and community interest. This website is not offering investments, securities, or guaranteed financial returns. Any future investment activities would require proper legal, accounting, and regulatory structure.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t bg-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-8 text-sm text-slate-600 md:flex-row md:items-center md:justify-between">
          <p>© 2026 GTA Ethiopian Plaza Initiative. All rights reserved.</p>
          <p>Community • Business • Plaza Development • GTA</p>
        </div>
      </footer>
    </div>
  );<div className="card-grid">
  <div className="card">
    <h3>Vision</h3>
    <p>
      To create a recognized Ethiopian commercial plaza in the GTA.
    </p>
  </div>

  <div className="card">
    <h3>Mission</h3>
    <p>
      Organize professionals and business owners to develop the plaza project.
    </p>
  </div>

  <div className="card">
    <h3>Purpose</h3>
    <p>
      Increase Ethiopian business visibility and create jobs.
    </p>
  </div>
</div>
  
}
