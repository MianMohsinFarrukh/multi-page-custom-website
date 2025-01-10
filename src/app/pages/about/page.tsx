import React from "react";

const About: React.FC = () => {
  return (
    <div className="about-page">
      {/* Introduction Section */}
      <section className="about-section intro">
        <div className="container">
          <h1 className="section-title">About Me</h1>
          <p className="section-description">
            Hi, I'm a passionate designer and developer with a love for creating visually stunning and user-friendly digital experiences. With years of experience in the industry, I strive to bring creativity and functionality together in every project.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section className="about-section skills">
        <div className="container">
          <h2 className="section-title">Skills</h2>
          <ul className="skills-list">
            <li>Web Design</li>
            <li>React Development</li>
            <li>Next.js Expertise</li>
            <li>Responsive Design</li>
            <li>UI/UX Design</li>
          </ul>
        </div>
      </section>

      {/* Vision Section */}
      <section className="about-section vision">
        <div className="container">
          <h2 className="section-title">My Vision</h2>
          <p className="section-description">
            My mission is to make the web a better place by crafting high-quality websites and applications that empower businesses and users. I aim to keep learning and growing as a professional while contributing to meaningful projects.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
