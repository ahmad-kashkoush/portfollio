/* eslint-disable react/prop-types */

const techStackIcons = [
  {
    alt: "HTML",
    img: "https://skillicons.dev/icons?i=html",
  },
  {
    alt: "CSS",
    img: "https://skillicons.dev/icons?i=css",
  },
  {
    alt: "JS",
    img: "https://skillicons.dev/icons?i=js",
  },
  {
    alt: "TS",
    img: "https://skillicons.dev/icons?i=ts",
  },
  {
    alt: "React",
    img: "https://skillicons.dev/icons?i=react",
  },
  {
    alt: "Tailwind",
    img: "https://skillicons.dev/icons?i=tailwind",
  },
  {
    alt: "Bootstrap",
    img: "https://skillicons.dev/icons?i=bootstrap",
  },
  {
    alt: "SASS",
    img: "https://skillicons.dev/icons?i=sass",
  },
  {
    alt: "Figma",
    img: "https://skillicons.dev/icons?i=figma",
  },
];
export function TechStack({ visible = true }) {
  return (
    <div
      className={`tech-stack 
    left-translate
    ${visible ? "get-from-side" : ""}`}
    >
      <span>Tech Stack</span>
      <span className="breaker">|</span>
      <ul>
        {techStackIcons.map((icon) => {
          return (
            <li key={icon}>
              <img src={icon.img} alt={icon.alt} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
