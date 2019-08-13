import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';

import './landing-page.css';

import NavbarHomePage from './navbar_homepage';
import LoginForm from './login-form';
import About from './about-display';
import  RegistrationForm  from './registration-form';


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
				        <h1 className="welcome-header">Cat Search</h1>
				        <h2>Welcome</h2>
			        </div>
                </div>
               <div>
                   <About />
               </div>
               <div className="containers">
                    <div className="container">
                        <h3 className="header">Start Now</h3>
                            <RegistrationForm />
                                {/* <Link to="/register">Register</Link>
                                <Link to="/upload">Upload</Link>
                                <Link to="/search-page">Search</Link> */}
                    </div>
                    <div className="container 2">
                        <h3 className="header">Login</h3>
                            <LoginForm />
                    </div>
                </div>
                <div className="space">
                    
                </div>
            </main>
        </div>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LandingPage);
