import React from "react";
import "./styles.css";

function App() {
  return (
    <div>

      {/* HERO */}
      <header className="hero">
        <h1>Pavanitha</h1>
        <p>Frontend Developer</p>
      </header>

      {/* ABOUT */}
      <section className="section">
        <h2>About Me</h2>
        <p>
          Passionate developer with experience in building React applications.
        </p>
      </section>

      {/* PROJECTS */}
      <section className="section light">
        <h2>Projects</h2>

        <div className="projects">

          <div className="card">
            <h3>Todo App</h3>
            <p>React Todo application with sorting feature</p>
            <button>Live Demo</button>
          </div>

          <div className="card">
            <h3>Weather App</h3>
            <p>Weather app using API</p>
            <button>Live Demo</button>
          </div>

        </div>
      </section>

      {/* RESUME */}
      <section className="section">
        <h2>Resume</h2>
        <button className="primary">Download Resume</button>
      </section>

      {/* CONTACT */}
      <section className="section light">
        <h2>Contact</h2>

        <div className="form">
          <input placeholder="Name" />
          <input placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          <button className="primary">Send Message</button>
        </div>
      </section>

    </div>
  );
}

export default App;