import { useRef, useState } from "react";
import { useAnimateNav } from "../hooks/useAnimateNav";

const navLinks = [
  {
    label: "home",
    href: "#home",
  },
  {
    label: "skills",
    href: "#skills",
  },
  {
    label: "projects",
    href: "#featured-projects",
  },
  {
    label: "open source",
    href: "#open-source",
  },
  {
    label: "contact",
    href: "#contact",
  },
];
export default function Header() {
  const { containerRef, isVisible, isTranslate } = useAnimateNav();
  const [checked, setChecked] = useState(false);
  
  const navRef = useRef(null);
  function handleNavClick(e) {
    e.preventDefault();
    const ele = e.target.closest(".nav_link");
    if (!ele) return;
    const sec=document.querySelector(ele.getAttribute("href"));
    sec.scrollIntoView({ behavior: "smooth" });
    setChecked(false);
  }
  return (
    <>
      <header ref={containerRef}>
        <nav
          className={`  
          ${isVisible ? "" : "sticky-2"}
          ${!isTranslate ? "add-translate" : ""}
       `}
        >
          <div className="container">
            <a href="#home" className="logo">
              Kashkoush
            </a>
            <label htmlFor="ham-checkbox" className="hamburgerMenu">
              <input
                type="checkbox"
                id="ham-checkbox"
                checked={checked}
                onClick={() => setChecked((cur) => !cur)}
              />
            </label>
            <ul className="nav links" onClick={handleNavClick}>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a className="nav_link" ref={navRef} href={link.href}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
}
