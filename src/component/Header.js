import React from 'react';
import './style/Header.scss';
import {Link} from 'react-scroll';
import {NavLink} from 'react-router-dom';

const Header = (props) => {

    return (
        <ul id="header">
            <li><NavLink to="/" ><mark>HOME</mark></NavLink></li>
            <li><Link activeClass="active" className="test1" to="test1" spy={true} smooth={true} duration={500} ><mark>ABOUT</mark></Link></li>
            <li><Link activeClass="active" className="test2" to="test2" spy={true} smooth={true} duration={500} ><mark>SKILL</mark></Link></li>
            <li><Link activeClass="active" className="test3" to="test3" spy={true} smooth={true} duration={500} ><mark>PROJECT</mark></Link></li>
            <li><Link activeClass="active" className="test4" to="test4" spy={true} smooth={true} duration={500} ><mark>CONTACT</mark></Link></li>
        </ul>

    );
};

export default Header;