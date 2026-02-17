import NavBar from "./components/NavBar";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import { Footer } from "./components/Footer"
import { ThemeProvider } from './contexts/ThemeContext';
import "./App.css";

function App() {
  return (
    <ThemeProvider>
  
    <div className="bg-white dark:bg-black min-h-screen">
      <NavBar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
      </div>
      </ThemeProvider>
  );
}

export default App;