export default function Contact() {
  const email = "yaolee009@gmail.com";

  function onSubmit(e) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = encodeURIComponent(form.get('name') || '');
    const message = encodeURIComponent(form.get('message') || '');
    const subject = encodeURIComponent(`Portfolio contact from ${name}`);
    window.location.href = `mailto:${email}?subject=${subject}&body=${message}`;
  }

  return (
    <section id="contact" className="py-5 bg-body-tertiary">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-8">
            <h2 className="fw-bold mb-2 d-flex align-items-center gap-2">
              <i className="bi bi-envelope-fill text-primary"></i>
              Contact
            </h2>
            <div className="card border-0 shadow-sm">
              <div className="card-body">
                <form className="row gy-3" onSubmit={onSubmit}>
                  <div className="col-12 col-md-6">
                    <label className="form-label">Your Name</label>
                    <div className="input-group">
                      <span className="input-group-text">
                        <i className="bi bi-person"></i>
                      </span>
                      <input
                        name="name"
                        type="text"
                        className="form-control"
                        placeholder="Jane Doe"
                        required
                      />
                    </div>
                  </div>

                  <div className="col-12">
                    <label className="form-label">Message</label>
                    <div className="input-group">
                      <span className="input-group-text">
                        <i className="bi bi-chat-dots"></i>
                      </span>
                      <textarea
                        name="message"
                        rows="5"
                        className="form-control"
                        placeholder="Hi! I'd like to talk about…"
                        required
                      ></textarea>
                    </div>
                    <div className="form-text">
                      This opens your email app with a pre‑filled message.
                    </div>
                  </div>

                  <div className="col-12 d-flex gap-2">
                    <button className="btn btn-dark d-inline-flex align-items-center gap-2">
                      <i className="bi bi-send"></i>
                      <span>Send</span>
                    </button>
                    <a
                      href={`mailto:${email}`}
                      className="btn btn-outline-secondary d-inline-flex align-items-center gap-2"
                    >
                      <i className="bi bi-envelope-open"></i>
                      <span>Email directly</span>
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="card border-0 bg-body shadow-sm h-100">
              <div className="card-body">
                <div className="d-flex align-items-center justify-content-between mb-2">
                  <span className="fw-semibold">Get in touch</span>
                </div>
                <p className="text-body-secondary mb-3">
                  Prefer email? <a href={`mailto:${email}`}>{email}</a>
                </p>
                <div className="d-flex gap-2">
                  <a
                    className="btn btn-sm btn-outline-dark d-inline-flex align-items-center gap-2"
                    href="https://github.com/yaoolee"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="bi bi-github"></i>
                    <span>GitHub</span>
                  </a>
                  <a
                    className="btn btn-sm btn-outline-primary d-inline-flex align-items-center gap-2"
                    href="https://www.linkedin.com/in/yao-tiem-lee/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="bi bi-linkedin"></i>
                    <span>LinkedIn</span>
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
