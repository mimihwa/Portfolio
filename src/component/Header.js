import React from 'react';
import './style/Header.scss';
import {NavLink} from 'react-router-dom';

const Header = (props) => {
    return (
        <ul id='Header'>
            <li><NavLink to="/" ><mark>HOME</mark></NavLink></li>
            <li><NavLink to="/About" ><mark>ABOUT</mark></NavLink></li>
            <li><NavLink to="/Project" ><mark>PROJECT</mark></NavLink></li>
            <li><NavLink to="/Comment" ><mark>COMMENT</mark></NavLink></li>
        </ul>
        

    );
};

export default Header;