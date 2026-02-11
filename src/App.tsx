import NavBar from "./components/NavBar";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import "./App.css";

function App() {
  return (
    <div className="bg-black min-h-screen">
      <NavBar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      </div>
  )
}

export default App;