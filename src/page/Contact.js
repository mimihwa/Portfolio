import React from 'react';
import './style/Contact.scss';

const Contact = (props) => {
    return (
        <div id='Contact'>
            <div className="title">
                <h2>Contact Me,</h2>
                <span>L</span>
                <span>e</span>
                <span>t</span>
                <span>'</span>
                <span>&nbsp;w</span>
                <span>o</span>
                <span>r</span>
                <span>k</span>
                <span>&nbsp;T</span>
                <span>o</span>
                <span>g</span>
                <span>e</span>
                <span>t</span>
                <span>h</span>
                <span>e</span>
                <span>r</span>
                <span>!</span>
            </div>
            <div className="content">
                <div className="information">
                    <div className="nameTag tag">
                        <div className="img"></div>
                        <div className="kr">
                            김미화
                            <span className='birth'>|&nbsp;1996.08.23</span>
                        </div>
                        <div className="en">
                            KIM MIHWA
                        </div>
                    </div>
                    <div className="textTag tag">
                        <h5>배움에서 즐거움을 찾는 개발자.</h5>
                        <span>
                            끊임없이 의문을 가지고 스스로 생각하는 끈기를 통해,
                            적재적소에 필요한 FRONT-END 개발자로 발전하겠습니다.
                        </span>
                    </div>
                    <div className="personalTag tag">
                        <div className="phone">
                            <h5>PHONE</h5>
                            <span>+82 10-2023-7331</span>
                        </div>
                        <div className="email">
                            <h5>EMAIL</h5>
                            <span>wmfksf@gmail.com</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="guestBook">
                <div className="writeSection">
                    <div className='setWrap' >
                        <div className="nickName">
                            YOUR NICK-NAME
                            <input type="text" className="nickWrite" placeholder='Please write your nickname.'/>
                        </div>
                        <div className="secret">
                            SECRET
                            <input type="checkbox" />
                        </div>
                    </div>
                    <div className="writeWrap">
                        <input type="text" className="write" />
                        <input type="button" className='send'/>
                    </div>
                </div>
                <div className="boardSection">
                </div>
            </div>
        </div>
    );
};

export default Contact;