import { useRef } from "react";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";

function App() {
  const aboutScroll = useRef(null);
  const projectsScroll = useRef(null);
  const contactScroll = useRef(null);


  const scrollToSection = (section) => {
    let elementRef;
    switch(section) {
      case ".about":
        elementRef = aboutScroll;
        break;
      case ".projects":
        elementRef = projectsScroll;
        break;
      case ".contact":
        elementRef = contactScroll;
        break;
      default:
        return;
    }

    console.log(section)
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth"
    })
  }
  return (
    <>
      <Navbar scrollToSection={scrollToSection} />
        <HomePage />
        <AboutPage aboutScroll={aboutScroll}/>
        <ProjectsPage projectsScroll={projectsScroll} />
        <ContactPage contactScroll={contactScroll} />
    </>
  );
}

export default App;
