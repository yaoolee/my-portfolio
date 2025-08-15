export default function Hero() {
  const name = "Yao Tiem Lee";
  const role = "Web Developer";

 return (
    <section id="home" className="py-5">
      <div className="container">
        <h1 className="display-5 fw-bold">{name}</h1>
        <p className="fs-4 text-body-secondary">{role}</p>
        <img src="https://raw.githubusercontent.com/yaoolee/personal-portfolio/main/images/144488087.jpeg" alt="yaolee" height="300" />
        <p className="mt-3 col-lg-8">
          I am a passionate web developer with a focus on creating dynamic and responsive web applications. My expertise lies in JavaScript, React, and Node.js, and I love building projects that solve real-world problems.
          I am always eager to learn new technologies and improve my skills. Let's connect and collaborate on exciting projects!
        </p>
        <div className="mt-3 d-flex gap-2">
          <a href="#projects" className="btn btn-outline-dark">View Projects</a>
          <a href="#contact" className="btn btn-dark">Contact</a>
        </div>
      </div>
    </section>
  );
}
