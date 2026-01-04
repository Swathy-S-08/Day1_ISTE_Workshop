import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-logo">
          Student<span>Profile</span>
        </div>

        <ul className="navbar-links">
          <li><a href="#profile">Profile</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <button className="navbar-btn">Connect</button>
      </nav>

      {/* Profile Section */}
      <section id="profile" style={{ padding: "60px 40px", textAlign: "center" }}>
        <h1>Hi, I'm Swathy 👋</h1>
        <p>
          A passionate <strong>Computer Science</strong> student studying in college,
          interested in technology, coding, and problem-solving.
        </p>
      </section>

      {/* Education Section */}
      <section id="education" style={{ padding: "40px" }}>
        <h2>Education</h2>
        <p>
          🎓 Bachelor of Computer Science <br />
          🏫 Currently studying in college
        </p>
      </section>

      {/* Skills Section */}
      <section id="skills" style={{ padding: "40px" }}>
        <h2>Skills</h2>
        <ul>
          <li>💻 Programming (C, Java, Python)</li>
          <li>🌐 Web Development (HTML, CSS, React)</li>
          <li>🧠 Problem Solving & Logic</li>
        </ul>
      </section>

      {/* Contact Section */}
      <section id="contact" style={{ padding: "40px", textAlign: "center" }}>
        <h2>Contact</h2>
        <p>Email: tam.student@example.com</p>
      </section>
    </div>
  );
};

export default Navbar;
