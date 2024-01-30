// import logo from './logo.svg';
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Skills from "./components/skills";
import About from "./components/About";
import Profile from "./components/profiles";
import Project from "./components/projects";

function App() {
  return (
    <div>
      <Navbar/>
      <About/>
      <Profile/>
      <Skills/>
      <Project/>
      <Footer/>
    </div>
  );
}

export default App;
