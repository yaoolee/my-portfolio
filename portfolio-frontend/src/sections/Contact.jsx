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
        <h2 className="fw-bold mb-3">Contact</h2>
        <p className="text-body-secondary">
          Prefer email? <a href={`mailto:${email}`}>{email}</a>
        </p>

        <form className="row gy-3 mt-2" onSubmit={onSubmit}>
          <div className="col-12 col-md-6">
            <label className="form-label">Your Name</label>
            <input name="name" type="text" className="form-control" required />
          </div>
          <div className="col-12">
            <label className="form-label">Message</label>
            <textarea name="message" rows="5" className="form-control" required></textarea>
          </div>
          <div className="col-12">
            <button className="btn btn-dark">Send</button>
          </div>
        </form>
      </div>
    </section>
  );
}
