import "./Hero.css";
import { Link } from "react-router-dom";
import profile from "/profile.jpeg";
import { FaEnvelope, FaMapMarkerAlt, FaArrowRight } from "react-icons/fa";

function Hero() {
  return (
    <section className="hero">

      <h1 className="portfolio-title">
        Portfolio <span>(2026)</span>
      </h1>

      <div className="card">

        <div className="left">

          <div className="image-box">
            <img src={profile} alt="Profile" />
          </div>

        </div>

        <div className="right">

          <h2>Aswini V S</h2>

          <h4>Software Developer | Web Developer</h4>

          <div className="skills">
            HTML • CSS • JavaScript • React
          </div>

          <p>
            Passionate Computer Science graduate who enjoys creating modern,
            responsive websites with React. I love turning ideas into beautiful
            and user-friendly web experiences.
          </p>

          <div className="info">

            <div>
              <FaEnvelope />
              <span>vijisaswini@gmail.com</span>
            </div>

            <div>
              <FaMapMarkerAlt />
              <span>Tamil Nadu, India</span>
            </div>

          </div>
          <Link to="/Portfolio" style={{ textDecoration: "none" }}>
            <button >
              Take me in
              <FaArrowRight />
            </button>
          </Link>

        </div>

      </div>

    </section>
  );
}

export default Hero;