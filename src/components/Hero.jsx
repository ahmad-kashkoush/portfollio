import { Social } from "./Social";
import { TechStack } from "./TechStack";

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
            <h1>Hi 👋, I'm Ahmed Kashkoush</h1>
            <h2>A full-stack Software Engineer</h2>
            <ul className="hero-list">
              {/* <li>I have experience in building complex web applications.</li>
              <li>I was selected for GSoC 2025 at GitLab to implement Git operations that impacted thousands of users who use the Web IDE.</li>
              <li>I am passionate about learning new technologies and contributing to open source.</li> */}
              <li>Built complex web apps (React, Next.js, Node.js).</li>
              <li>Selected for GSoC 2025 at GitLab → delivered Git operations to thousands of IDE users.</li>
              <li>Open-source contributor, passionate about learning new technologies.</li>
            </ul>
            <p className="hero-description">
              Fullstack engineer with experience building scalable apps, selected for GSoC 2025 at GitLab, and passionate about open source.</p>
          </div>
          <a
            href="https://ahmad-kashkoush.github.io/ahmad-kashkoush/CV/Ahmed_Kashkoush_Resume.pdf"
            className="btn"
            target="_blank"
          >
            View Resume
            <i className="fa-solid fa-share-from-square " style={{ marginLeft: "10px" }}></i>
          </a>
          <Social />
        </div>
        {/* Image */}
        <div
          className={`hero-image right-translate ${visibleRef.current || visible ? "get-from-side" : ""
            }`}
        ></div>
        <TechStack visible={visible || visibleRef.current} />
      </div>
    </section>
  );
}
