import React from 'react'
import Image from 'next/image';

export default function Hero() {
    return (
        <div>
            <section className='myheropage'>

                <div className="hero">
                    <Image
                        src="/images/ssd.jpeg"
                        alt="Hero Image"
                        width={800}
                        height={500}
                        priority
                    />

                </div>
            </section>
            <section className="services-section">
                <div className="services-header">
                    <h3>CREATIVE SOLUTIONS</h3>
                    <h1>SERVICES</h1>
                </div>
                <div className="services-grid">
                    <div className="service-card">
                        <img src="/images/branding-icon.png" alt="Branding Icon" />
                        <h2>BRANDING</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
                            convallis, dolor sed consectetur gravida.
                        </p>
                    </div>
                    <div className="service-card">
                        <img src="/images/marketing-icon.png" alt="Marketing Icon" />
                        <h2>MARKETING</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
                            convallis, dolor sed consectetur gravida.
                        </p>
                    </div>
                    <div className="service-card">
                        <img src="/images/development-icon.png" alt="Development Icon" />
                        <h2>DEVELOPMENT</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
                            convallis, dolor sed consectetur gravida.
                        </p>
                    </div>
                    <div className="service-card">
                        <img src="/images/design-icon.png" alt="Design Icon" />
                        <h2>DESIGN</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
                            convallis, dolor sed consectetur gravida.
                        </p>
                    </div>
                </div>
            </section>
            <section className="website-redesign">
                <div className="content">
                    <div className="image-container">
                        <Image
                            src="/images/eg3.jpeg" // Replace with your actual image path
                            alt="Website Redesign"
                            layout="responsive"
                            width={1200}
                            height={800}
                        />
                    </div>
                    <div className="text-container">
                        <h1>Website Redesign</h1>
                        <div className="tags">
                            <span>Design</span>
                            <span>Identity</span>
                        </div>
                    </div>
                </div>
            </section>


            <section className="about-section">
                <div className="about-header">
                    <p>GET TO KNOW</p>
                    <h1>ABOUT</h1>
                </div>
                <div className="about-content">
                    <div className="about-text">
                        <p>
                            I specialize in creating visually captivating designs that transform
                            your ideas into stunning visuals.
                        </p>
                    </div>
                    <div className="about-image">
                        <Image
                            src="/images/eg5.jpeg" // Replace with the correct image path
                            alt="About Section Image"
                            layout="responsive"
                            width={600}
                            height={400}
                        />
                    </div>
                </div>
                <div className="about-stats">
                    <div className="stat">
                        <h2>124</h2>
                        <p>Customers</p>
                    </div>
                    <div className="stat">
                        <h2>7</h2>
                        <p>Awards</p>
                    </div>
                    <div className="stat">
                        <h2>85</h2>
                        <p>Projects</p>
                    </div>
                </div>
            </section>

            <section className="testimonial">
      <div className="testimonial-container">
        {/* Quote Icon */}
        <div className="quote-icon">“</div>

        {/* Testimonial Text */}
        <p className="testimonial-text">
          I Was Blown Away By His Creativity In Creating A Memorable Brand
          Identity. His Design Work Has Helped Us Stand Out.
        </p>

        {/* Profile Image and Name */}
        <div className="profile">
          <img src="/images/profile.jpg" alt="Davis Jones" className="profile-img" />
          <h3 className="profile-name">DAVIS JONES</h3>
          <p className="profile-role">ENTREPRENEUR</p>
        </div>

        {/* Navigation Arrows */}
        <div className="navigation">
          <button className="nav-arrow">&lt;</button>
          <button className="nav-arrow">&gt;</button>
        </div>
      </div>
    </section>
    
        </div>

    )
}
