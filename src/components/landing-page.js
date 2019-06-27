import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';

import './landing-page.css';

import NavbarHomePage from './navbar_homepage';
import LoginForm from './login-form';
import About from './about-display';


export function LandingPage(props) {
    // If we are logged in redirect straight to the user's dashboard
    if (props.loggedIn) {
        return <Redirect to="/dashboard" />;
    }

    return (
        <div className="home">
             <NavbarHomePage />
            {/* <h2 className="header">Welcome to the Cat App</h2> */}
            {/* <main style={{marginTop: '64px'}}> */}
            <main>
                <div className="landingpage-container">
                    <div className="homepage-scroll-container"></div>
                    <div className="landingpage-details-container">
				        <h1 className="welcome-header">CATS</h1>
				        <h2>welcome to the cat app</h2>
			        </div>
                </div>
               <div>
                   <About />
               </div>
                <div className="container">
                    <h3 className="header">Start Now!</h3>
                    <LoginForm />
                    <Link to="/register">Register</Link>
                    <Link to="/upload">Upload</Link>
                    <Link to="/search-page">Search</Link>
                </div>
            </main>
        </div>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LandingPage);
