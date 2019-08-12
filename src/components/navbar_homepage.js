import React from 'react';
import {Link, Redirect} from 'react-router-dom';
import './navbar_homepage.css'; 

const Navbar = props => (
    <header className="navbar"> 
        <nav className="navbar_navigation">
            <div className="navbar_logo"><a href="/"><img src={require("../assets/images/cat11.png")}></img></a></div>
            <div className="spacer"></div>
            <div className="navbar_navitems">
                <ul>
                    <li><Link to="/login">Sign in</Link></li>
                    <li><Link to="/register">Sign up</Link></li>
                </ul>
            </div>
        </nav>
    </header>
); 


export default Navbar; 
