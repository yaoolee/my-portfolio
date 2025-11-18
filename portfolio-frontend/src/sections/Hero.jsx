export default function Hero() {
  const name = "Yao Tiem Lee";
  const role = "Web Developer";

  return (
    <section id="home" className="py-5 bg-body-tertiary border-bottom">
      <div className="container">
        <div className="row align-items-center g-4 g-lg-5">
          <div className="col-lg-7 order-2 order-lg-1 text-center text-lg-start">
            <span className="badge bg-primary-subtle text-primary-emphasis rounded-pill px-3 py-2 mb-3">
              Open to opportunities
            </span>

            <h1 className="display-4 fw-bold mb-2">{name}</h1>
            <p className="fs-4 text-body-secondary mb-4">{role}</p>

            <p className="lead text-body-secondary mb-4">
              I am a passionate web developer focused on dynamic, responsive apps.
              I work with JavaScript, React, and Node.js to build solutions for real problems.
            </p>

            <div className="d-flex gap-2 flex-wrap">
              <a href="#projects" className="btn btn-dark btn-lg d-inline-flex align-items-center gap-2">
                <i className="bi bi-briefcase"></i>
                <span>View Projects</span>
              </a>
              <a href="#contact" className="btn btn-outline-dark btn-lg d-inline-flex align-items-center gap-2">
                <i className="bi bi-envelope"></i>
                <span>Contact</span>
              </a>
            </div>
          </div>

          <div className="col-lg-5 order-1 order-lg-2 text-center">
            <img
              src="https://raw.githubusercontent.com/yaoolee/personal-portfolio/main/images/144488087.jpeg"
              alt="Portrait of Yao Tiem Lee"
              className="img-fluid rounded-4 shadow"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
