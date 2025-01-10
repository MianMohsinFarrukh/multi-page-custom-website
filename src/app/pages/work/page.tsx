import React from "react";

const Work: React.FC = () => {
  return (
    <div className="work-page">
      {/* Featured Projects Section */}
      <section className="work-section featured-projects">
        <div className="container">
          <h1 className="section-title">Featured Projects</h1>
          <div className="projects">
            <div className="project">
              <h3>Project 1</h3>
              <p>
                A responsive e-commerce website built with Next.js, React, and Tailwind CSS.
              </p>
            </div>
            <div className="project">
              <h3>Project 2</h3>
              <p>
                A portfolio website designed for a creative agency, showcasing their services.
              </p>
            </div>
            <div className="project">
              <h3>Project 3</h3>
              <p>
                A blogging platform with a custom CMS built with Next.js and TypeScript.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Offered Section */}
      <section className="work-section services">
        <div className="container">
          <h2 className="section-title">Services Offered</h2>
          <ul className="services-list">
            <li>Web Design</li>
            <li>React & Next.js Development</li>
            <li>UI/UX Design</li>
            <li>SEO Optimization</li>
          </ul>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="work-section testimonials">
        <div className="container">
          <h2 className="section-title">What Clients Say</h2>
          <div className="testimonial">
            <p>
              "This developer transformed our ideas into a stunning website! Highly
              recommended."
            </p>
            <h4>- Sarah Adams</h4>
          </div>
          <div className="testimonial">
            <p>
              "The project was delivered on time with exceptional quality. Great to work
              with!"
            </p>
            <h4>- Mark Johnson</h4>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Work;
