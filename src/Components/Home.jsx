import { Link } from "react-router-dom";
import "./Home.css";
// import Projects from "./Projects";
import profile from "/profile.jpeg";

function Home() {
  return (
    <>
     
      {/* Home Section */}
      <section className="home-section">
        <div className="container">
          <div className="row align-items-center">

            
            <div className="col-lg-6 col-md-6 col-12 text-center mb-5">

              <img
                src={profile}
                alt="Profile"
                className="img-fluid profile-img"
              />

            </div>
            <div className="col-lg-6 col-md-6 col-12 text-center text-md-start">

              <p className="hello">Hello, I'm</p>

              <h1>Aswini V S</h1>

              <h3>Software Developer | Web Developer</h3>

              <p className="description">
                I am a Computer Science and Engineering graduate 
                with a strong interest in Software and Web Development. 
                Skilled in Java, HTML, CSS, JavaScript, React, and 
                Bootstrap, I enjoy building responsive and user-friendly 
                web applications while continuously learning modern technologies.
              </p>

              <div className="d-flex flex-row flex-sm-row gap-3 justify-content-center justify-content-md-start">
                <a href="/RESUME.PDF" download style={{textDecoration:"none"}}>
                    <button className="resume-btn">
                  Download CV
                </button>
                </a>
                <Link to="Projects" style={{textDecoration:"none"}}>
                    <button className="project-btn">
                  View Projects
                </button>
                </Link>
                

              </div>

            </div>

          </div>
        </div>
      </section>
    </>
  );
}

export default Home;