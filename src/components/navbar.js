import React from 'react';

import './navbar_homepage.css'; 

const toolbar = props => (
    <header className="navbar"> 
        <nav className="navbar_navigation">
            <div className="navbar_logo"><a href="/">THE LOGO</a></div>
            <div className="spacer"></div>
            <div className="navbar_navitems">
                <ul>
                    <li><a href= "/">Home</a></li>
                    <li><a href= "/">Sign out</a></li>
                </ul>
            </div>
        </nav>
    </header>
); 


export default toolbar; 
