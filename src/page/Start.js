import React from 'react';
import { gsap, Sine } from "gsap";
import '../component/style/Start.scss';
import  {Link} from 'react-router-dom';

const Start = (props) => {

    console.clear();
    const randomX = random(-400, 400);
    const randomY = random(-200, 200);
    const randomDelay = random(0, 50);
    const randomTime = random(7, 14);
    const randomTime2 = random(6, 7);
    const randomAngle = random(-30, 150);

    const blurs = gsap.utils.toArray(".blur");
    blurs.forEach((blur) => {
        gsap.set(blur, {
            x: randomX(-1),
            y: randomX(1),
            repeat: Infinity,
            rotation: randomAngle(-1)
        });
        moveX(blur, 2);
        moveY(blur, -2);
        rotate(blur, 1);
    });

    function rotate(target, direction) {
        gsap.to(target, randomTime2(), {
            rotation: randomAngle(direction),
            delay: randomDelay(),
            ease: Sine.easeInOut,
            onComplete: rotate,
            onCompleteParams: [target, direction * -1]
        });
    }

    function moveX(target, direction) {
        gsap.to(target, randomTime(), {
            x: randomX(direction),
            ease: Sine.easeInOut,
            onComplete: moveX,
            onCompleteParams: [target, direction * -1]
        });
    }

    function moveY(target, direction) {
        gsap.to(target, randomTime(), {
            y: randomY(direction),
            ease: Sine.easeInOut,
            onComplete: moveY,
            onCompleteParams: [target, direction * -1]
        });
    }
    function random(min, max) {
        const delta = max - min;
        return (direction = 1) => (min + delta * Math.random()) * direction;

    }

    
    return (
        <div id='start'>
            <div className='blurWrap'>
                <div className="blur big"></div>
                <div className="blur middle"></div>
                <div className="blur small"></div>
            </div>
            <div className='title'>
                <h1>Welcome to the<span>MIHWA WORLD</span></h1>
                <button>ENTER</button>
                {/* <Link to='/Home'>ENTER</Link> */}
            </div >
        </div>
    );
};

export default Start;