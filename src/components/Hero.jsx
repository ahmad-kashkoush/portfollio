import { Social } from "./Social";
import { TechStack } from "./TechStack";
import resume from "../assets/AhmedKashkoush_Resume.pdf";
import { useAnimateSides } from "../hooks/useAnimateNav";
export default function Hero() {
  const { containerRef, visible, visibleRef } = useAnimateSides("200px");

  return (
    <section ref={containerRef} className="hero" id="home">
      <div className="hero-wrapper container ">
        <div
          className={`
        content-wrapper 
        left-translate
        ${visibleRef.current || visible ? "get-from-side" : ""}
        `}
        >
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
        <div
          className={`hero-image right-translate ${
            visibleRef.current || visible ? "get-from-side" : ""
          }`}
        ></div>
        <TechStack  visible={visible||visibleRef.current}/>
      </div>
    </section>
  );
}
