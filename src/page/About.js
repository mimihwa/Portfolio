import React from 'react';
import {FullPage, Slide} from "react-full-page";

import Header from '../component/Header'
import AboutMain from '../component/AboutMain';
import AboutSkill from '../component/AboutSkill';
import AboutResume from '../component/AboutResume';
import {Element, Events, animateScroll as scroll,  scroller } from 'react-scroll'


class About extends React.Component {
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
         <Header/>
        <FullPage duration={1000}>
          <Slide>
            <Element name="test1" className="element" >
              <AboutMain />
            </Element>
          </Slide>
          <Slide>
            <Element name="test2" className="element">
              <AboutSkill />
            </Element>
          </Slide>
          <Slide>
            <Element name="test3" className="element">
              <AboutResume />
            </Element>
          </Slide>
        </FullPage>
    </div>
    )
  }
}
export default About;






