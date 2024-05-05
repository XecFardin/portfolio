import Contact from "./components/Contact/contact";
import Experience from "./components/Experience/experience";
import Footer from "./components/Footer/footer";
import Intro from "./components/Intro/intro";
import Navbar from "./components/Navbar/navbar";
import Resume from "./components/Resume/resume";
import Skills from "./components/Skills/skills";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Skills />
      <Experience />
      <Resume />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
