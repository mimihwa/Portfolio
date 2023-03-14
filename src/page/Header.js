import React from 'react';
/* import {Link} from 'react-router-dom'; */
import '../component/style/Header.scss';

const Header = (props) => {

    return (
        <header className="header">
            <nav>
              <ul>
                    <li><mark>HOME</mark></li>
                    <li><mark>ABOUT</mark></li>
                    <li><mark>SKILL</mark></li>
                    <li><mark>PROJECT</mark></li>
                    <li><mark>CONTACT</mark></li>


                    {/* <li><Link to="/" >HOME</Link></li>
                    <li><Link to="/About" >About</Link></li>
                    <li><Link to="/Skill" >SKILL</Link></li>
                    <li><Link to="/Project" >PROJECT</Link></li>
                    <li><Link to="/Contact" >CONTACT</Link></li> */}
              </ul>
            </nav>
        </header>

    );
};

export default Header;