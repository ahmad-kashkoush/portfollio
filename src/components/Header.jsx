import { useAnimateNav } from "../hooks/useAnimateNav";

export default function Header() {
  const {containerRef, isVisible, isTranslate}=useAnimateNav();

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
            <a href="#home">Kashkoush.dev</a>
            <label htmlFor="ham" className="ham">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                id="grid"
              >
                <g
                  fill="none"
                  fillRule="evenodd"
                  stroke="#000"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                >
                  <path d="M1 1h7v7H1zM12 1h7v7h-7zM12 12h7v7h-7zM1 12h7v7H1z"></path>
                </g>
              </svg>
              <input type="checkbox" name="" id="ham" />
            </label>
            <ul className="nav">
              <li>
                <a href="#home">
                  <svg
                    className="nav__icon"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                  home
                </a>
              </li>
              <li>
                <a href="#about">
                  <svg
                    className="nav__icon"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  about
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa-regular fa-file-lines nav__icon"></i>
                  skills
                </a>
              </li>
              <li>
                <a href="#projects">
                  <svg
                    className="nav__icon"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  projects
                </a>
              </li>
              <li>
                <a href="#contact">
                  <svg
                    className="nav__icon"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                    />
                  </svg>
                  services
                </a>
              </li>
              <li>
                <a href="#contact">
                  <i className="fa-regular fa-paper-plane nav__icon"></i>
                  contact
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
}
