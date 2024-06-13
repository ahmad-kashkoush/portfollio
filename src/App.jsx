import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useState } from "react";
import { ThemeSwitcher } from "./ThemeSwitcher";
import Skills from "./components/Skills";

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
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
export default App;
