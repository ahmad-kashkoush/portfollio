export default function AboutMe() {
  return (
    <section className="about " id="about">
      <div className="container">
        <h2>About me</h2>
        <div className="hero-wrapper">
          <div className="about-image"></div>
          <div className="about-content">
            <p>
              I am a frontend developer with a particular interest in making
              things simple and automating daily tasks. I try to keep up with
              security and best practices, and am always looking for new things
              to learn.
            </p>
            <p>
              I am interested in the entire frontend spectrum, but my focus is
              building accessible, inclusive products with minimal user
              interaction.
            </p>
            <Experience />
            <a href="#" className="btn">
              Contact me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <div className="achieved">
      <div className="box">
        <p>
          <i className="fa-regular fa-lightbulb"></i>
        </p>
        <p>Experience</p>
        <p>2+ years</p>
      </div>
      <div className="box">
        <p>
          <i className="fa-regular fa-lightbulb"></i>
        </p>
        <p>Projects</p>
        <p>10+ Projects</p>
      </div>
      <div className="box">
        <p>
          <i className="fa-regular fa-lightbulb"></i>
        </p>
        <p>support</p>
        <p>online 24/7</p>
      </div>
    </div>
  );
}
