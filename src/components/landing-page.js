import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';

import './landing-page.css';

import NavbarHomePage from './navbar_homepage';
import LoginForm from './login-form';


export function LandingPage(props) {
    // If we are logged in redirect straight to the user's dashboard
    if (props.loggedIn) {
        return <Redirect to="/dashboard" />;
    }

    return (
        <div className="home">
             <NavbarHomePage />
            <h2 className="header">Welcome to the Cat App</h2>
            <main style={{marginTop: '64px'}}>
                <div className="container">
                    <header>
                        <h3 className="header">View pictures of Cats</h3>
                    </header>
                    <p>[<em>placeholder for picture of cat</em>]</p>
                    <p>Cats! Cats! Cats! lets you view hundreds of pictures of cats straight from the Cat API and users like you.</p>
                </div>
                <div className="container">
                    <header>
                        <h3 className="header">Upload Pictures of Cats</h3>
                    </header>
                    <p>[<em>placeholder for picture of cat</em>]</p>
                    <p>Upload your own pictures of cats; cats you own, cats your friends own, cats you find on the street, any picture of a cat!</p>
                </div>
                <div className="container">
                    <header>
                        <h3 className="header">Rate the Cats</h3>
                    </header>
                    <p>[<em>placeholder for picture of cat</em>]</p>
                    <p>Rate the pictures of cats.</p>
                </div>
                <div className="container">
                    <h3 className="header">Start Now!</h3>
                    <LoginForm />
                    <Link to="/register">Register</Link>
                </div>
            </main>
        </div>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LandingPage);
