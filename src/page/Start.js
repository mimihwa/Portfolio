import React, { useEffect } from 'react';
import { gsap, Sine } from "gsap";
import { Link } from 'react-router-dom';
import './style/Start.scss';

export default function Start(){
    let randomX = random(-700, 700);
    let randomY = random(-500, 500);
    const randomDelay = random(0, 50);
    const randomTime = random(6, 12);
    const randomTime2 = random(5, 6);
    const randomAngle = random(-30, 150);
 
    
    if(window.innerWidth < 700){
        randomX=  random(-600, 600);
        randomY = random(-700, 700);
    }
    
    
    function move(){
        const blurs = gsap.utils.toArray(".blur");
        // const blurs = document.querySelectorAll(".blur");

        blurs.forEach((blur) => {
            gsap.set(blur, {
                x: randomX(-1),
                y: randomX(1),
                repeat: 10,
                instantRender: false,
                rotation: randomAngle(-1)
            });
            moveX(blur, 1);
            moveY(blur, -1);
            rotate(blur, 1);
        });
    }

    
    useEffect(() => {
        move();
    }, []);
    
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
                <Link to='/Home'><button>ENTER</button></Link>
            </div >
        </div>
    );
};

