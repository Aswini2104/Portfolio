import "./Project.css";

function Project() {
  return (
    <section className="project-section py-5" id="projects">
      <div className="container">

        <div className="text-center mb-5">
          <h2 className="section-title">My Projects</h2>
          <p className="section-subtitle">
            Some of the projects I have built during my learning journey.
          </p>
        </div>

        <div className="row g-4 justify-content-center">

          {/* SkyCast */}
          <div className="col-12 col-md-6 d-flex">
            <div className="project-card h-100 w-100 shadow">

              <img
                src="/SkyCast.png"
                alt="SkyCast"
                className="project-img img-fluid"
              />

              <div className="project-body d-flex flex-column">

                <h3 className="project-title">SkyCast</h3>

                <p className="project-text">
                  SkyCast is a responsive weather forecasting web application
                  developed using HTML, CSS, JavaScript and Weather API.
                  Users can search any city and instantly view current
                  weather information including temperature, humidity,
                  wind speed and weather conditions.
                </p>

                <div className="tech-stack">
                  <span>HTML</span>
                  <span>CSS</span>
                  <span>JavaScript</span>
                  <span>Weather API</span>
                </div>

                <div className="project-buttons mt-auto">

                  <a
                    href="https://aswini2104.github.io/Sky_Cast/"
                    target="_blank"
                    rel="noreferrer"
                    className="btn live-btn"
                  >
                    Live Demo
                  </a>

                  <a
                    href="https://github.com/Aswini2104/Sky_Cast"
                    target="_blank"
                    rel="noreferrer"
                    className="btn github-btn ms-2"
                  >
                    GitHub
                  </a>

                </div>

              </div>
            </div>
          </div>

          {/* Fruit Match */}
          <div className="col-12 col-md-6 d-flex">

            <div className="project-card h-100 w-100 shadow">

              <img
                src="/Fruit_match.png"
                alt="Fruit Match"
                className="project-img img-fluid"
              />

              <div className="project-body d-flex flex-column">

                <h3 className="project-title">
                  Fruit Match - Interactive Memory Game
                </h3>

                <p className="project-text">
                  Fruit Match is an interactive memory game developed using
                  HTML, CSS, JavaScript, jQuery and Bootstrap. Players match
                  fruit pairs to test their memory skills with animations,
                  score tracking, restart functionality and a responsive UI.
                </p>

                <div className="tech-stack">
                  <span>HTML</span>
                  <span>CSS</span>
                  <span>JavaScript</span>
                  <span>Bootstrap</span>
                  <span>jQuery</span>
                </div>

                <div className="project-buttons mt-auto">

                  <a
                    href="https://aswini2104.github.io/Flip_flop/"
                    target="_blank"
                    rel="noreferrer"
                    className="btn live-btn"
                  >
                    Live Demo
                  </a>

                  <a
                    href="https://github.com/Aswini2104/Flip_flop"
                    target="_blank"
                    rel="noreferrer"
                    className="btn github-btn ms-2"
                  >
                    GitHub
                  </a>

                </div>

              </div>

            </div>

          </div>
          
          {/* SkyCast */}
          <div className="col-12 col-md-6 d-flex">
            <div className="project-card h-100 w-100 shadow">

              <img
                src="/pet_shop.png"
                alt="SkyCast"
                className="project-img img-fluid"
              />

              <div className="project-body d-flex flex-column">

                <h3 className="project-title">Pet shop Web application</h3>

                <p className="project-text">
                  Developed a responsive Pet Shop web application using React.js.
                  he application allows users to browse pets, navigate between
                  pages using React Router, and provides a clean, user-friendly 
                  interface. The project demonstrates component-based architecture,
                  client-side routing, and responsive web design.
                </p>

                <div className="tech-stack">
                  <span>HTML</span>
                  <span>CSS</span>
                  <span>React.js</span>
                  <span>React Router DOM</span>
                  <span>Netlify (Deployment)</span>
                  <span>GitHub</span>
                </div>

                <div className="project-buttons mt-auto">

                  <a
                    href="https://petshop-aswini.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                    className="btn live-btn"
                  >
                    Live Demo
                  </a>

                  <a
                    href="https://github.com/Aswini2104/Pet_shop.git"
                    target="_blank"
                    rel="noreferrer"
                    className="btn github-btn ms-2"
                  >
                    GitHub
                  </a>

                </div>

              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Project;