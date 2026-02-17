import { useState } from "react";
import "./App.css";

export default function App() {
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const [start, setStart] = useState({ x: 0, y: 0 });

  
  const handleWheel = (e) => {
    e.preventDefault();
    let newScale = scale - e.deltaY * 0.001;
    if (newScale < 1) newScale = 1;
    if (newScale > 3) newScale = 3;
    setScale(newScale);
  };

  
  const handleMouseDown = (e) => {
    setDragging(true);
    setStart({ x: e.clientX - position.x, y: e.clientY - position.y });
  };

  
  const handleMouseMove = (e) => {
    if (!dragging) return;
    setPosition({
      x: e.clientX - start.x,
      y: e.clientY - start.y
    });
  };

  const handleMouseUp = () => {
    setDragging(false);
  };

  return (
    <div className="app">

     
      <header className="header">
        <div className="logo-section">
          <img src="/logo.jpg" alt="logo" />
          <h2>
            Prakash <span>Constructions</span>
          </h2>
        </div>

        <nav>
          <a href="#about">About</a>
          <a href="#projects">Future Projects</a>
        </nav>
      </header>

      <section
        className="hero"
        onWheel={handleWheel}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        <img
          src="/future.jpg"
          alt="building"
          className="zoom-image"
          style={{
            transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`
          }}
        />

        <div className="hero-caption">
          <h1>
            Building The <span>Future</span>
          </h1>
          <p>
            Premium residential and commercial developments crafted
            with innovation, elegance, and structural excellence.
          </p>
        </div>
      </section>

      
      <section id="about" className="section light">
        <h2>About Us</h2>
        <p>
          Prakash Constructions delivers landmark residential and
          commercial spaces built with precision, innovation,
          and sustainability.
        </p>
      </section>

  
      <section id="projects" className="section">
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

    </div>
  );
}
