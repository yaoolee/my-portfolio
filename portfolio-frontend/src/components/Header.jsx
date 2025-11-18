export default function Header() {
  return (
    <header className="sticky-top bg-body border-bottom shadow-sm">
      <nav className="navbar navbar-expand-lg" role="navigation">
        <div className="container">
          <a className="navbar-brand d-flex align-items-center gap-2" href="#home">
            <span className="badge text-bg-dark rounded-pill px-3 py-2">YT</span>
            <span className="fw-semibold d-none d-sm-inline">Yao Tiem Lee</span>
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navContent"
            aria-controls="navContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-lg-center">
              <li className="nav-item">
                <a className="nav-link px-lg-3" href="#projects">Projects</a>
              </li>
              <li className="nav-item">
                <a className="nav-link px-lg-3" href="#skills">Skills</a>
              </li>
              <li className="nav-item">
                <a className="nav-link px-lg-3" href="#contact">Contact</a>
              </li>
              <li className="nav-item ms-lg-3">
                <a
                  className="btn btn-sm btn-dark d-inline-flex align-items-center gap-2"
                  href="https://github.com/yaoolee"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <i className="bi bi-github"></i>
                  <span>GitHub</span>
                </a>
              </li>
              <li className="nav-item ms-2">
                <a
                  className="btn btn-sm btn-primary d-inline-flex align-items-center gap-2"
                  href="https://www.linkedin.com/in/yao-tiem-lee/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <i className="bi bi-linkedin"></i>
                  <span>LinkedIn</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
