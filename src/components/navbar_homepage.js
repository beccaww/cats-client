import React from 'react';

import './navbar_homepage.css'; 

const Navbar = props => (
    <header className="navbar"> 
        <nav className="navbar_navigation">
            <div className="navbar_logo"><a href="/">CATS</a></div>
            <div className="spacer"></div>
            <div className="navbar_navitems">
                <ul>
                    <li><a href= "/">Sign in</a></li>
                    <li><a href= "/">Sign up</a></li>
                </ul>
            </div>
        </nav>
    </header>
); 


export default Navbar; 
