import React from 'react';
import './style/Comment.scss';

const Contact = (props) => {
    return (
        <div id='Contact'>
            <div className="title">
                <span>P</span>
                <span>l</span>
                <span>e</span>
                <span>a</span>
                <span>s</span>
                <span>e</span>
                <span>&nbsp;L</span>
                <span>e</span>
                <span>a</span>
                <span>v</span>
                <span>e</span>
                <span>&nbsp;A</span>
                <span>&nbsp;C</span>
                <span>o</span>
                <span>m</span>
                <span>m</span>
                <span>e</span>
                <span>n</span>
                <span>t</span>
                <span>!</span>
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