import './App.css';
import { HeroSection } from './components/Herosection';
import AboutMe from './components/Aboutme';
import { Projects } from './components/Projects';
import { RightProjects } from './components/Rightprojects';
import TechStack from './components/tech-stack';


function App() {
  return (
    <div className="App">
      <HeroSection/>
      <AboutMe/>
      <Projects/>
    <RightProjects/>
    <TechStack/>
    </div>
  );
}

export default App;
