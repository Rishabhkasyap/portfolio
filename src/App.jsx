import Navbar from "./components/Nevbar/Nevbar.jsx";
import About from "./components/About/About.jsx";
import Skills from "./components/Skills/Skill.jsx";
import Experience from "./components/Experience/Exprience.jsx";
import Work from "./components/Work/Work.jsx";
import Education from "./components/Education/Education.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Footer from "./components/Footer/Footer.jsx";
import BlurBlob from "./BlurBlob.jsx";
import "./App.css";

function App() {
  return (
    <div className="relative min-h-screen bg-void overflow-x-hidden">
    
     

      <div className="relative z-10 pt-20">
        <Navbar />
        <About />
        <Skills />
        <Experience />
        <Work />
        <Education />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
