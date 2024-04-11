import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <AboutMe />
        <Projects />
      </main>
    </>
  );
}

export default App;
