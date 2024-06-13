import React from "react";
import { useAnimateSides } from "../hooks/useAnimateNav";

function Skills() {
  const { visible, containerRef, visibleRef } = useAnimateSides();
  return (
    <section ref={containerRef} id="skills" className="skills">
      <div className="container projects-container">
        <h2
          className={`left-translate ${
            visible || visibleRef.current ? "get-from-side" : ""
          }`}
        >
          Skills{" "}
        </h2>
      </div>
    </section>
  );
}

export default Skills;
