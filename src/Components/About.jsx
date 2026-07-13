import "./About.css";

function About() {
  return (
    <section className="about-section">
      <div className="container">

        <h1 className="about-title">About Me</h1>

        <p className="about-description">
          I'm <strong>Aswini V S</strong>, Computer Science and 
          Engineering graduate passionate about Software Development,
          Web Development, Java, and Cloud Computing. I enjoy 
          creating responsive web applications, learning new technologies,
          and applying my skills through real-world projects. I am looking 
          for opportunities to grow as a Software Developer while contributing
          to innovative solutions.
        </p>

        <h2 className="section-title">My Approach</h2>

        <div className="approach-grid">

          <div className="approach-card">
            <div className="number">01</div>
            <h4>Learn & Understand</h4>
            <p>
              I understand project requirements carefully before starting
              development to create efficient solutions.
            </p>
          </div>

          <div className="approach-card">
            <div className="number">02</div>
            <h4>Design & Develop</h4>
            <p>
              I design clean and responsive user interfaces using modern
              frontend technologies.
            </p>
          </div>

          <div className="approach-card">
            <div className="number">03</div>
            <h4>Test & Improve</h4>
            <p>
              I continuously test, optimize and improve applications for
              better performance and user experience.
            </p>
          </div>

        </div>

        <h2 className="section-title">Skills</h2>

        <div className="skills-grid">

          <div className="skill-card">
            <h4>Core Skills</h4>

            <span>Problem Solving</span>
            <span>Communication</span>
            <span>Team Work</span>
            <span>Time Management</span>
          </div>

          <div className="skill-card">
            <h4>Frontend</h4>

            <span>HTML</span>
            <span>CSS</span>
            <span>Bootstrap</span>
            <span>JavaScript</span>
            <span>React.JS</span>
          </div>

          <div className="skill-card">
            <h4>Tools & Tech</h4>

            <span>Java</span>
            <span>GitHub</span>
            <span>VS Code</span>
            <span>EmailJS</span>
          </div>

          <div className="skill-card">
            <h4>Areas of Interest</h4>

            <span>Frontend Development</span>
            <span>Web Development</span>
            <span>UI Design</span>
            <span>Cloud</span>
          </div>

        </div>

      </div>
    </section>
  );
}

export default About;