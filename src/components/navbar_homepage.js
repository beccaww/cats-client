import React from 'react';

import './navbar_homepage.css'; 

const navbar = props => (
    <header className="navbar"> 
        <nav className="navbar_navigation">
            <div></div>
            <div className="navbar_logo"><a href="/">THE LOGO</a></div>
            <div className="navbar_navitems">
                <ul>
                    <li><a href= "/">Sign in</a></li>
                    <li><a href= "/">Sign up</a></li>
                </ul>
            </div>
        </nav>
    </header>
); 


export default navbar; 
