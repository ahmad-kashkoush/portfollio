import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useState } from "react";

function App() {
  const [theme, setTheme] = useState("dark");
  function toggleTheme() {
    setTheme((cur) => (cur === "dark" ? "light" : "dark"));
  }
  return (
    <div className={`${theme}-theme`}>
      <Header />
      <ThemeSwitcher onClick={toggleTheme} theme={theme} />
      <main>
        <Hero />
        <AboutMe />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
function ThemeSwitcher({ theme, onClick }) {
  function handleClick(e) {
    e.preventDefault();
    onClick();
  }
  return (
    <button onClick={handleClick} className="theme-switcher">
      {theme === "light" && <i className="fa-regular fa-sun"></i>}
      {theme === "dark" && <i className="fa-regular fa-moon"></i>}
    </button>
  );
}

export default App;
