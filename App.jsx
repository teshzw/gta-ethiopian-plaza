import React from "react";

export default function App() {
  return (
    <>
      {/* HERO SECTION */}
      <div className="hero">
        <div className="container hero-content">

          <div className="hero-badge">
            GTA Ethiopian Plaza Initiative
          </div>

          <h1>
            Building a future Ethiopian business plaza in the Greater Toronto Area.
          </h1>

          <p className="hero-text">
            A community business project to bring Ethiopian grocery stores,
            restaurants, cafés, offices, cultural services, and entrepreneurs
            together in one modern GTA business plaza with strong parking,
            visibility, and customer access.
          </p>

          <div className="hero-buttons">
  <a
    href="https://docs.google.com/forms/d/e/1FAIpQLScCbRfT6eGJ43UBygq9kuh7mxVZ9pvrGuW3BuKBfFuTTGIefQ/viewform?usp=dialog"
    target="_blank"
    rel="noopener noreferrer"
    className="primary-btn"
  >
    Register Interest
  </a>

  <a
    href="#vision"
    className="secondary-btn"
  >
    Learn About the Vision
  </a>
</div>

        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="container">

        {/* VISION / MISSION / PURPOSE */}
        <section className="card-grid">

          <div className="card">
            <h3>Vision</h3>
            <p>
              To create a recognized Ethiopian commercial plaza in the GTA
              where Ethiopian businesses can grow together and serve the wider community.
            </p>
          </div>

          <div className="card">
            <h3>Mission</h3>
            <p>
              To organize serious community members, professionals, and
              entrepreneurs to study, plan, and develop a practical Ethiopian
              plaza project in the GTA.
            </p>
          </div>

          <div className="card">
            <h3>Purpose</h3>
            <p>
              To increase Ethiopian business visibility, create jobs,
              support families, and strengthen long-term community opportunity.
            </p>
          </div>

        </section>

        {/* WHY ETHIOPIANS */}
        <section className="section-box">

          <h2>Why not Ethiopians too?</h2>

          <p>
            Chinese, Indian, Filipino, Korean, Somali, Middle Eastern,
            Italian, and Portuguese communities have built strong business
            areas in the GTA. Ethiopians also have strong culture,
            entrepreneurship, restaurants, grocery stores, cafés,
            coffee traditions, and professionals.
          </p>

        </section>

        {/* OBJECTIVES */}
        <section className="section-box">

          <h2>Project Objectives</h2>

          <div className="card-grid">

            <div className="card">
              <h3>Business Visibility</h3>
              <p>
                Create a visible Ethiopian business destination in the GTA.
              </p>
            </div>

            <div className="card">
              <h3>Customer Access</h3>
              <p>
                Study locations with strong parking, transit,
                and road accessibility.
              </p>
            </div>

            <div className="card">
              <h3>Professional Network</h3>
              <p>
                Bring entrepreneurs, professionals, and investors together.
              </p>
            </div>

          </div>

        </section>

        {/* ACTION PLAN */}
        <section className="section-box">

          <h2>Action Plan</h2>

          <div className="steps">

            <div className="step-card">
              <div className="step-number">STEP 1</div>
              <h3>Register Interest</h3>
            </div>

            <div className="step-card">
              <div className="step-number">STEP 2</div>
              <h3>Build Core Group</h3>
            </div>

            <div className="step-card">
              <div className="step-number">STEP 3</div>
              <h3>Study Locations</h3>
            </div>

            <div className="step-card">
              <div className="step-number">STEP 4</div>
              <h3>Business Plan</h3>
            </div>

            <div className="step-card">
              <div className="step-number">STEP 5</div>
              <h3>Legal Structure</h3>
            </div>

          </div>

        </section>

        {/* SAMPLE LOCATION */}
        <section className="section-box">

          <h2>Sample Plaza Opportunity</h2>

          <div className="plaza-box">

            <div className="plaza-image">
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200"
                alt="Plaza"
              />
            </div>

            <div className="plaza-details">

              <h3>Example GTA Commercial Plaza</h3>

              <p>
                Large parking, major road visibility, grocery potential,
                restaurant space, office opportunities, and easy customer access.
              </p>

              <p>
                Areas such as Vaughan, North York, Scarborough,
                Mississauga, or Etobicoke may provide future opportunities.
              </p>

            </div>

          </div>

        </section>

        {/* CONSULTING ROLE */}
        <section className="section-box">

          <h2>Role of TRNY Consulting</h2>

          <p>
            TRNY Consulting helps organize and coordinate the early planning
            stage by connecting interested community members,
            professionals, and entrepreneurs. email: teshzw@gmail.com
          </p>

          <div className="notice">
            Important: This website is for interest registration only.
            It is not an investment offering and no money should be collected
            before proper legal and accounting structure is created.
          </div>

        </section>

      </div>

      {/* FOOTER */}
      <footer>
        © 2026 GTA Ethiopian Plaza Initiative | Organized by TRNY Consulting
      </footer>
    </>
  );
}
