import React from 'react';
import {FullPage, Slide} from "react-full-page";
import About from './About';
import Skill from './Skill';
import Project from './Project';
import Contact from './Contact';
import {Element, Events, animateScroll as scroll,  scroller } from 'react-scroll'


class Home extends React.Component {
  constructor(props) {
    super(props);
    this.scrollToTop = this.scrollToTop.bind(this);
  }

  componentDidMount() {

    Events.scrollEvent.register('begin', function () {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register('end', function () {
      console.log("end", arguments);
    });

  }

  scrollToTop() {
    scroll.scrollToTop();
  }
  scrollTo() {
    scroller.scrollTo('scroll-to-element', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart'
    })
  }
  scrollToWithContainer() {

    let goToContainer = new Promise((resolve, reject) => {

      Events.scrollEvent.register('end', () => {
        resolve();
        Events.scrollEvent.remove('end');
      });

      scroller.scrollTo('scroll-container', {
        duration: 800,
        delay: 0,
        smooth: 'easeInOutQuart'
      });

    });

    goToContainer.then(() =>
      scroller.scrollTo('scroll-container-second-element', {
        duration: 800,
        delay: 0,
        smooth: 'easeInOutQuart',
        containerId: 'scroll-container'
      }));
  }
  componentWillUnmount() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  }
  render() {
    return (
      <div>
        <FullPage duration={1000}>
          <Slide>
            <Element name="test1" className="element" >
              <About />
            </Element>
          </Slide>
          <Slide>
            <Element name="test2" className="element">
              <Skill />
            </Element>
          </Slide>
          <Slide>
            <Element name="test3" className="element">
              <Project />
            </Element>
          </Slide>
          <Slide>
            <Element name="test4" className="element">
              <Contact />
            </Element>
          </Slide>
        </FullPage>
    </div>
    )
  }
}
export default Home;
