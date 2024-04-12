import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <AboutMe />
        <Projects />
        <Contact />
      </main>
    </>
  );
}

export default App;
