import "./Certification.css";

function Certification() {
  return (
    <section className="certificate-section">
      <div className="container">

        <h2 className="section-title text-center mb-5">
          Internships & Certifications
        </h2>

        <div className="row g-4">

          {/* Deep Learning Internship */}
          <div className="col-12 col-md-6">
            <div className="certificate-card h-100">
              <h3>Deep Learning Internship</h3>

              <p>
                <strong>Organization:</strong><br />
                Central Institute of Tool Design (CITD - MSME), Chennai
              </p>

              <p>
                <strong>Duration:</strong><br />
                09 Jul 2025 – 23 Jul 2025
              </p>

              <p>
                Successfully completed a two-week internship on Deep Learning,
                gaining practical knowledge in Neural Networks, CNNs, image
                classification, and AI model development using Python.
              </p>

              <a
                href="/MSME.jpeg"
                target="_blank"
                rel="noreferrer"
                className="btn view-btn"
              >
                View Certificate
              </a>
            </div>
          </div>

          {/* JavaScript */}
          <div className="col-12 col-md-6">
            <div className="certificate-card h-100">
              <h3>JavaScript Course for Beginners</h3>

              <p>
                <strong>Organization:</strong><br />
                Udemy
              </p>

              <p>
                <strong>Completion Date:</strong><br />
                14 Jul 2025
              </p>

              <p>
                Completed a JavaScript course covering ES6 concepts, DOM
                manipulation, functions, events, APIs, and real-world
                project development.
              </p>

              <a
                href="/js.jpeg"
                target="_blank"
                rel="noreferrer"
                className="btn view-btn"
              >
                View Certificate
              </a>
            </div>
          </div>

          {/* Data Analytics */}
          <div className="col-12 col-md-6">
            <div className="certificate-card h-100">
              <h3>Data Analytics with Python</h3>

              <p>
                <strong>Organization:</strong><br />
                NPTEL - IIT Roorkee
              </p>

              <p>
                <strong>Duration:</strong><br />
                Jan 2025 – Apr 2025
              </p>

              <p>
                Successfully completed a 12-week course covering Python,
                NumPy, Pandas, Data Visualization and Data Analytics.
              </p>

              <a
                href="/DA.jpeg"
                target="_blank"
                rel="noreferrer"
                className="btn view-btn"
              >
                View Certificate
              </a>
            </div>
          </div>
          {/* Python Web Development Internship */}
          <div className="col-12 col-md-6">
            <div className="certificate-card h-100">
              <h3>Python Web Development Internship</h3>

              <p>
                <strong>Organization:</strong><br />
                TRETSEC Technologies LLP, Kochi
              </p>

              <p>
                <strong>Duration:</strong><br />
                08 Aug 2024 – 14 Aug 2024
              </p>

              <p>
                Completed a five-day internship on Python Web Development,
                learning Python fundamentals and web application development
                concepts.
              </p>

              <a
                href="/python.jpeg"
                target="_blank"
                rel="noreferrer"
                className="btn view-btn"
              >
                View Certificate
              </a>
            </div>
          </div>

          {/* Java Internship */}
          <div className="col-12 col-md-6">
            <div className="certificate-card h-100">
              <h3>Java Internship</h3>

              <p>
                <strong>Organization:</strong><br />
                Srishti Innovative Computer Systems,
                Technopark, Trivandrum
              </p>

              <p>
                <strong>Duration:</strong><br />
                04 Mar 2024 – 09 Mar 2024
              </p>

              <p>
                Completed a one-week Java Internship focused on Java
                programming, Object-Oriented Programming (OOP), and
                hands-on application development.
              </p>

              <a
                href="/Srishti.jpeg"
                target="_blank"
                rel="noreferrer"
                className="btn view-btn"
              >
                View Certificate
              </a>
            </div>
          </div>

          {/* Cloud Computing Internship */}
          <div className="col-12 col-md-6">
            <div className="certificate-card h-100">
              <h3>Cloud Computing Internship</h3>

              <p>
                <strong>Organization:</strong><br />
                KaaShiv Infotech
              </p>

              <p>
                <strong>Duration:</strong><br />
                19 Feb 2024 – 24 Feb 2024
              </p>

              <p>
                Completed a five-day Cloud Computing Internship covering
                cloud fundamentals, virtualization, cloud services, and
                deployment models.
              </p>

              <a
                href="/cloud.jpeg"
                target="_blank"
                rel="noreferrer"
                className="btn view-btn"
              >
                View Certificate
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Certification;