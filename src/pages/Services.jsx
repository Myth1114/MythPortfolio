import services from "../data/services";

import PageHeader from "../components/layout/PageHeader";
import ServiceCard from "../components/services/ServiceCard";
import SEO from "../components/seo/SEO";

import "./Services.css";

function Services() {
  return (
    <>
      <SEO
        title="Services"
        description="Explore web development, frontend development and digital experience services offered by Mithilesh Yadav."
        path="/services"
      />
      <main className="services-page">
        <div className="container">
          <PageHeader
            eyebrow="07 — Services"
            title="What I can"
            titleAccent="help build."
            description="A few ways I can help turn an idea, problem or existing website into something more useful."
          />

          <section className="services-page__intro">
            <p>
              I don't believe in offering a hundred different services. Most
              projects eventually come down to understanding the problem,
              choosing the right approach and building it well.
            </p>
          </section>

          <section className="services-page__grid">
            {services.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </section>

          <section className="services-page__closing">
            <span className="eyebrow">Something else in mind?</span>

            <h2>
              Let's talk about
              <br />
              <span>the problem first.</span>
            </h2>

            <p>
              Not every project fits neatly into a service list. If you have an
              idea, an existing website that needs work, or simply don't know
              where to start, that's okay.
            </p>
          </section>
        </div>
      </main>
    </>
  );
}

export default Services;
