import React from 'react';
import './style/AboutMain.scss';

const AboutMain = (props) => {
    return (
        <div id="About">
            <h2 className="mainTitle">
                Hello, I'm a Front-End Developer. &nbsp;Mihwa<span>🍀</span>
            </h2>
            <div className="profile">
                <img className='face' src="./img/face.png" alt="img" />
                <div className="content">
                    <div className='tag'>
                        <div className="nameTag">
                            <div className="kr">
                                김미화
                                <span className='birth'>|&nbsp;1996.08.23</span>
                            </div>
                            <div className="en">
                                KIM MIHWA
                            </div>
                        </div>
                        <div className="personalTag">
                            <div className="phone pT">
                                <h5>PHONE</h5>
                                <span>+82 10-2023-7331</span>
                            </div>
                            <div className="email pT">
                                <h5>EMAIL</h5>
                                <span>wmfksf@gmail.com</span>
                            </div>
                        </div>
                    </div >
                    <div className="aboutMe">
                        <h5>배움에서 즐거움을 느끼며, 스스로 성장하는 개발자.</h5>
                        <span>
                            끊임없이 의문을 가지고 스스로 생각하는 끈기를 통해, <br/>
                            적재적소에 필요한 FRONT-END 개발자로 발전하겠습니다.
                        </span>
                    </div>
                </div >
                
            </div>
        </div>
    );
};

export default AboutMain;