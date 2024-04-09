import { Social } from "./Social";
import { TechStack } from "./TechStack";
import resume  from "../assets/AhmedKashkoush_Resume.pdf";
export default function Hero() {
  return (
    <section className="container hero" id="home">
      <div className="hero-wrapper">
        <div className="content-wrapper">
          {/* Content  */}
          <div className="hero-content">
            <h1>ahmed kashkoush 👋</h1>
            <h2>frontend developer</h2>
            <p>
              Front-end developer dedicated to design and creative solutions.
            </p>
          </div>
          <a href={resume} download="AhmedKashkoush_Resume" className="btn">
            Download Resume
          </a>
          <Social />
        </div>
        {/* Image */}
        <div className="hero-image"></div>
      </div>
      <TechStack />
    </section>
  );
}
