import {FullPage,Slide} from "https://cdn.skypack.dev/react-full-page@0.1.12";
import Header from './Header';
import About from './About';
import Skill from './Skill';
import Project from './Project';
import Contact from './Contact';

const Home = (props) => {
    return (
    <div>
    <Header /> 
    <FullPage duration={1000}>
      <Slide>
        <About/>
      </Slide>
      <Slide>
        <Skill />
      </Slide>
      <Slide>
        <Project />
      </Slide>
      <Slide>
        <Contact />
      </Slide>
    </FullPage>
    </div>
    )
  };
  
  export default Home;
