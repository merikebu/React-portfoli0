//import logo from './logo.svg';
import "./App.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import Header from "./components/Header";
import NavigationBar from "./components/Navigationbar";
import ProjectCard from "./components/ProjectCard";
import ProjectsSection from "./components/ProjectsSection";

import ViewMyworkBtn from "./components/ViewMyworkBtn";
import Footer from "./components/Footer";
//import ProjectsSection from './components/ProjectsSection';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Header />
      <AboutSection />
      <ProjectCard />

      <ViewMyworkBtn />
      <ProjectsSection />

      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
