/* eslint-disable react/prop-types */
import { useAnimateSides } from "../hooks/useAnimateNav";

export function TechStack({ visible = true }) {
  return (
    <div
      className={`tech-stack 
    stack-left
    ${visible? "stack-get-from-side" : ""}`}
    >
      <span>Tech Stack</span>
      <span className="breaker">|</span>
      <ul>
        <li>
          <img src="https://skillicons.dev/icons?i=html,css" alt="skill-icon" />
        </li>
        <li>
          <img src="https://skillicons.dev/icons?i=js,ts" alt="skill-icon" />
        </li>
        <li>
          <img
            src="https://skillicons.dev/icons?i=react,next"
            alt="skill-icon"
          />
        </li>
        <li>
          <img
            src="https://skillicons.dev/icons?i=tailwind,scss"
            alt="skill-icon"
          />
        </li>
      </ul>
    </div>
  );
}
