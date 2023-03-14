import React from 'react';
import './style/About.scss';
import Header from '../component/Header'

const About = (props) => {
    return (
        <div id="About">
            <Header/>
            <div className='profile'>
                <div className="intro">
                    <h2>Hello, I'm a<br />
                    Front-end Developer</h2>
                    <span>Mihwa<p>🍀</p></span>
                </div> 
                <img className='face' src="./img/face.png" alt="img" />
            </div>
            <div className="textProfile">
                <div className="edu infoWrap">
                    <h4>EUCATION</h4>
                    <ul className="kr">
                        <li>
                            프론트엔드 개발 양성 과정 수료
                            <p>2022.10~2023.03</p>
                        </li>
                        <li>
                            홍익대학교<br />
                            커뮤니케이션디자인과 학사
                            <p>2015.03~2020.02</p>
                        </li>
                        <li>
                            오산고등학교 졸업
                            <p>2012.03~2015.02</p>
                        </li>
                    </ul>
                    <ul className='en'>
                        <li>
                            Front-end Development Training
                            <p>2022.10~2023.03</p>
                        </li>
                        <li>
                            Hongik University.<br />
                            Bachelor of Communication Design
                            <p>2015.03~2020.02</p>
                        </li>
                        <li>
                            Osan High School
                            <p>2012.03~2015.02</p>
                        </li>
                    </ul>
                </div>
                <div className="work infoWrap">
                    <h4>
                        WORK<br />
                        EXPIRENCE
                    </h4>
                    <ul className="kr">
                        <li>
                            뮤지엄그라운드 학예팀
                            <p>2021.11~2022.07</p>
                        </li>
                        <li>
                            해커스교육그룹 공무원마케팅팀
                            <p>2020.08~2021.03</p>
                        </li>
                        <li>
                            홍익대학교 커뮤니케이션디자인<br />
                            제 31회 졸업작품전시회
                            <p>2019.11</p>
                        </li>
                        <li>
                            삼성 SDI 교육용 PPT 제작 외주
                            <p>2018.09</p>
                        </li>
                        <li>
                            삼성인력개발원 글로벌리더십팀<br />
                            디자인직 파견(재학중)
                            <p>2018.03~2018.09</p>
                        </li>
                    </ul>
                    <ul className="en">
                        <li>
                            MuseumGround Assistant Curator
                            <p>2021.11~2022.07</p>
                        </li>
                        <li>
                            HACKERS Education Group, Marketer
                            <p>2020.08~2021.03</p>
                        </li>
                        <li>
                            Hongik University, Dept. Communication Design<br />
                            31th graduation exhibition, 2019
                            <p>2019.11</p>
                        </li>
                        <li>
                            SAMSUNG SDI Educational PPT Design
                            <p>2018.09</p>
                        </li>
                        <li>
                            SAMSUNG Human Resources Institute,<br />
                            A Design dispatched worker
                            <p>2018.03~2018.09</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default About;