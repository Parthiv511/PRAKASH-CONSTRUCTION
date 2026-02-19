import { useState, useRef } from "react";
import "./App.css";

import { FaInstagram, FaFacebookF, FaWhatsapp } from "react-icons/fa";

export default function App() {
  const videoRef = useRef(null);
  const [currentVideo, setCurrentVideo] = useState(1);

  const handleVideoEnd = () => {
    setCurrentVideo((prev) => (prev === 1 ? 2 : 1));
  };

  return (
    <div className="app">

      {/* ================= HEADER ================= */}
      <header className="header">
        <div className="logo-section">
          <img src="/logo.jpg" alt="logo" />
          <h2>
            Prakash <span>Constructions</span>
          </h2>
        </div>

        <nav>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#projects">Future Projects</a>
          <a href="#achievements">Achievements</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>
    
    


      {/* ================= HERO ================= */}
      <section id="home" className="hero">

        <video
          key={currentVideo}
          ref={videoRef}
          className="hero-video"
          autoPlay
          muted
          playsInline
          onEnded={handleVideoEnd}
        >
          <source
            src={currentVideo === 1 ? "/video1.mp4" : "/video2.mp4"}
            type="video/mp4"
          />
        </video>

        <div className="hero-caption">
          <h1>
            Building The <span>Future</span>
          </h1>
          <p>
            Premium residential and commercial developments crafted
            with innovation, elegance, and structural excellence.
          </p>
          <a href="#projects" className="hero-btn">
            Explore Projects
          </a>
        </div>
      </section>

      {/* ================= ABOUT ================= */}
     <section id="about" className="about-section">

  <h2 className="sticky-title">
    About <span>Us</span>
  </h2>

  <div className="about-container">

    <div className="about-image">
      <img src="/about1.jpg" alt="Construction Site" />
    </div>

    <div className="about-content">
      <h3>Building Excellence Since 1992</h3>
      <p>
        Prakash Constructions delivers landmark residential and commercial
        spaces built with precision, innovation, and sustainability.
        With decades of experience, we transform ideas into modern
        architectural excellence.
      </p>

      <p>
        Our team of engineers, architects, and project managers ensures
        structural integrity, modern design standards, and timely delivery.
        We focus on quality materials, safety compliance, and customer satisfaction.
      </p>

      <ul>
        <li>✔ 500+ Completed Projects</li>
        <li>✔ 30+ Years Experience</li>
        <li>✔ 100% Client Satisfaction</li>
        <li>✔ Sustainable Construction Practices</li>
      </ul>
    </div>

  </div>

</section>

      {/* ================= SERVICES ================= */}
      <section id="services" className="services-section">
  
  <h2 className="services-title">
    Our <span>Services</span>
  </h2>

  <div className="services-slider">

    <div className="service-card">
      <img src="/service1.jpg" alt="Residential" />
      <h3>Residential Construction</h3>
      <p>
        Custom homes and residential complexes built with precision,
        quality materials, and modern architectural excellence.
      </p>
    </div>

    <div className="service-card">
      <img src="/service2.jpg" alt="Commercial" />
      <h3>Commercial Projects</h3>
      <p>
        Office buildings and commercial spaces designed for
        functionality, durability, and long-term business growth.
      </p>
    </div>

    <div className="service-card">
      <img src="/service3.jpg" alt="Infrastructure" />
      <h3>Infrastructure Development</h3>
      <p>
        Roads, bridges, and public infrastructure projects that
        strengthen communities and drive economic progress.
      </p>
    </div>

    <div className="service-card">
      <img src="/service4.jpg" alt="Renovation" />
      <h3>Renovation & Remodeling</h3>
      <p>
        Transforming existing spaces into elegant, modern,
        and value-enhanced environments.
      </p>
    </div>

  </div>

</section>
      {/* ================= PROJECTS ================= */}
      <section id="projects" className="section light">
        <h2>
          Future <span>Projects</span>
        </h2>

        <div className="cards">

          <div className="card">
            <img src="/future.jpg" alt="Residential" />
            <h3>Luxury Residential Complex</h3>
            <p>Premium gated communities with modern architecture.</p>
          </div>

          <div className="card">
            <img src="/commericial.png" alt="Commercial" />
            <h3>Commercial Hub</h3>
            <p>Smart office spaces designed for innovation.</p>
          </div>

          <div className="card">
            <img src="/image3.png" alt="Future Living" />
            <h3>Future Smart Living</h3>
            <p>Eco-friendly and tech-enabled infrastructure.</p>
          </div>

        </div>
      </section>

      {/* ================= ACHIEVEMENTS ================= */}
      <section id="achievements" className="section">
        <h2>Building Excellence Since 1992</h2>

        <div className="achievement-container">
          <img src="/modernhouse.jpg" alt="Achievement" />

          <div className="achievement-text">
            <p>
              With over 30+ years of excellence in the construction industry,
              Prakash Constructions has successfully delivered landmark
              residential and commercial projects across the region.
            </p>

            <ul>
              <li>✔ 250+ Completed Projects</li>
              <li>✔ 5000+ Happy Clients</li>
              <li>✔ 30+ Years of Industry Experience</li>
              <li>✔ Award-Winning Infrastructure Designs</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section id="contact" className="section light contact-section">
        <h2>
          Let’s <span>Build Together</span>
        </h2>

        <p>
          Ready to start your construction project?
          Get in touch with our team for a consultation and free quote.
        </p>

        <div className="contact-container">

          <div className="contact-info">
            <h3>Contact Information</h3>
            <p><strong>Phone:</strong> +91 96528 87222</p>
            <p><strong>Email:</strong> info@prakashconstructions.com</p>
            <p><strong>Office:</strong> Madhur, Maharashtra 411037</p>
          </div>

          <form className="contact-form">
            <h3>Request a Quote</h3>
            <input type="text" placeholder="Full Name" required />
            <input type="email" placeholder="Email Address" required />
            <input type="tel" placeholder="Phone Number" required />
            <textarea placeholder="Project Details" rows="4" required></textarea>
            <button type="submit">Submit Request</button>
          </form>

        </div>
      </section>
      <section className="cta-section">
  <h2>Ready To Build Your Dream Project?</h2>
  <p>Partner with Prakash Constructions for quality, precision, and excellence.</p>
  <a href="#contact" className="cta-button">Get Free Consultation</a>
</section>
<section className="stats-section">
  <div className="stat">
    <h3>30+</h3>
    <p>Years of Experience</p>
  </div>
  <div className="stat">
    <h3>500+</h3>
    <p>Projects Completed</p>
  </div>
  <div className="stat">
    <h3>250+</h3>
    <p>Skilled Workers</p>
  </div>
  <div className="stat">
    <h3>100%</h3>
    <p>Client Satisfaction</p>
  </div>
</section>

<section id="why" className="why-section">
  <h2>Why <span>Choose Us</span></h2>

  <div className="why-container">

    {/* LEFT SIDE – Horizontal Scroll Images */}
    <div className="why-images">
      <div className="image-track">
        <img src="/why1.jpg" alt="Premium Quality" />
        <img src="/why2.jpg" alt="On Time Delivery" />
        <img src="/why3.jpg" alt="Modern Technology" />
        <img src="/why4.jpg" alt="Transparent Pricing" />
      </div>
    </div>

    {/* RIGHT SIDE – Feature Cards */}
    <div className="why-features">
      <div className="feature-card">
        <h3>Premium Quality</h3>
        <p>We deliver unmatched construction standards using superior materials and expert craftsmanship.</p>
      </div>

      <div className="feature-card">
        <h3>On-Time Delivery</h3>
        <p>Strict timelines and disciplined project management ensure timely completion.</p>
      </div>

      <div className="feature-card">
        <h3>Modern Technology</h3>
        <p>Advanced engineering methods and smart construction tools for efficient execution.</p>
      </div>

      <div className="feature-card">
        <h3>Transparent Pricing</h3>
        <p>No hidden costs. Clear communication and professional project estimates.</p>
      </div>
    </div>

  </div>
</section>

<section className="gallery-section">
  <h2>Project <span>Gallery</span></h2>

  <div className="gallery-slider">
    <div className="gallery-track">

      <img src="/gallery1.jpg" alt="Project 1" />
      <img src="/gallery2.jpg" alt="Project 2" />
      <img src="/gallery3.jpg" alt="Project 3" />
      <img src="/gallery4.jpg" alt="Project 4" />

      {/* Duplicate for seamless infinite loop */}
      <img src="/gallery1.jpg" alt="Project 1" />
      <img src="/gallery2.jpg" alt="Project 2" />
      <img src="/gallery3.jpg" alt="Project 3" />
      <img src="/gallery4.jpg" alt="Project 4" />

    </div>
  </div>
</section>
<section className="testimonial-section">
  <h2>What Our <span>Clients Say</span></h2>

  <div className="testimonial-grid">

    <div className="testimonial-card">
      <div className="stars">★★★★★</div>
      <p>
        "Prakash Constructions delivered outstanding workmanship with 
        exceptional attention to detail. From planning to execution, 
        their team maintained complete transparency and professionalism. 
        The project was completed exactly as promised, and the quality 
        of construction truly exceeded our expectations."
      </p>
      <h4>- Rajesh Kumar</h4>
    </div>

    <div className="testimonial-card">
      <div className="stars">★★★★</div>
      <p>
        "The entire experience was seamless and stress-free. They delivered 
        our commercial space ahead of schedule without compromising on 
        quality or safety standards. Their commitment to precision, 
        innovation, and modern design makes them one of the most reliable 
        construction partners we have worked with."
      </p>
      <h4>- Anil Sharma</h4>
    </div>

    <div className="testimonial-card">
      <div className="stars">★★★★</div>
      <p>
        "From concept to completion, Prakash Constructions demonstrated 
        exceptional engineering expertise and project management skills. 
        Their structured approach, timely communication, and focus on 
        sustainable building practices make them a highly dependable and 
        trustworthy construction company."
      </p>
      <h4>- Meena Patel</h4>
    </div>

  </div>
</section>

<section className="awards-section">
  <h2>Our <span>Awards</span></h2>
  <div className="awards-grid">
    <div className="award">Best Construction Company 2022</div>
    <div className="award">Excellence in Infrastructure 2021</div>
    <div className="award">Top Real Estate Developer 2020</div>
  </div>
</section>
<footer className="footer">

  <div className="footer-wrapper">

    {/* Company Info Box */}
    <div className="footer-box">
      <h3>Prakash <span>Constructions</span></h3>
      <p>
        Building excellence since 1992. Delivering premium residential,
        commercial, and industrial projects with precision and innovation.
      </p>

      <div className="social-icons">
        <a href="#"><FaInstagram /></a>
        <a href="#"><FaFacebookF /></a>
        <a href="#"><FaWhatsapp /></a>
      </div>
    </div>

    {/* Quick Links Box */}
    <div className="footer-box">
      <h4>Quick Links</h4>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </div>

    {/* Services Box */}
    <div className="footer-box">
      <h4>Our Services</h4>
      <ul>
        <li>Residential Construction</li>
        <li>Commercial Projects</li>
        <li>Industrial Civil Work</li>
        <li>Infrastructure Development</li>
      </ul>
    </div>

    {/* Contact Box */}
    <div className="footer-box">
      <h4>Contact Info</h4>
      <p>📞 +91 96528 87222</p>
      <p>✉ info@prakashconstructions.com</p>
      <p>📍 Maharashtra, India</p>
    </div>

  </div>

  <div className="footer-bottom">
    © {new Date().getFullYear()} Prakash Constructions. All Rights Reserved.
  </div>

</footer>


    </div>
  );
}
