import React from "react";
import "./style.css";

export default function App() {
  return (
    <div>
      <header className="hero">
        <div className="container">
          <p className="badge">GTA Ethiopian Plaza Initiative</p>
          <h1>Building a future Ethiopian business plaza in the Greater Toronto Area.</h1>
          <p className="hero-text">
            A community business project to bring Ethiopian grocery, restaurants,
            cafés, offices, cultural services, and entrepreneurs together in one
            convenient GTA plaza with strong parking and customer access.
          </p>
          <button>Register Interest</button>
        </div>
      </header>

      <section className="container card-grid">
        <div className="card">
          <h2>Vision</h2>
          <p>To create a recognized Ethiopian commercial plaza in the GTA.</p>
        </div>
        <div className="card">
          <h2>Mission</h2>
          <p>To organize serious community members and business owners to plan the project.</p>
        </div>
        <div className="card">
          <h2>Purpose</h2>
          <p>To increase Ethiopian business visibility, create jobs, and build opportunity.</p>
        </div>
      </section>

      <section className="container section-box">
        <h2>Why not Ethiopians too?</h2>
        <p>
          Chinese, Indian, Filipino, Korean, Somali, Middle Eastern, Italian, and
          Portuguese communities have built strong business areas in the GTA.
          Ethiopians also have strong culture, food, coffee, professionals, and entrepreneurs.
        </p>
      </section>

      <section className="container section-box">
        <h2>Action Plan</h2>
        <div className="steps">
          {["Register Interest", "Build Core Group", "Study Locations", "Prepare Business Plan", "Create Legal Structure"].map((step, i) => (
            <div className="step" key={i}>
              <strong>Step {i + 1}</strong>
              <h3>{step}</h3>
            </div>
          ))}
        </div>
      </section>

      <section className="container section-box">
        <h2>Sample Plaza Opportunity</h2>
        <div className="plaza-box">
          <img
            src="https://images.loopnet.ca/d2/9Q5s2g5QvR8sXqN3X7uG7n8L4oJ0fY6hK5bA1mP2eQ0/document.jpg"
            alt="9100 Jane Street Plaza"
          />
          <div>
            <h3>9100 Jane Street Plaza — Vaughan, Ontario</h3>
            <p>Approximate asking price: CAD $5.395 million</p>
            <p>Large parking, near Vaughan Mills, Highway 400 and 407 access.</p>
          </div>
        </div>
      </section>

      <section className="container section-box">
        <h2>Role of TRNY Consulting</h2>
        <p>
          TRNY Consulting is helping organize and coordinate the early planning stage
          by connecting interested community members, professionals, entrepreneurs,
          and business owners.
        </p>
        <p className="notice">
          Important: This website is for interest registration only. It is not an
          investment offering and no money should be collected before legal and
          accounting structure is created.
        </p>
      </section>

      <footer>
        © 2026 GTA Ethiopian Plaza Initiative | Organized by TRNY Consulting
      </footer>
    </div>
  );
}
