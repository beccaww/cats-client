import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';

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
            <h2>Welcome to the Cat App</h2>
            <main style={{marginTop: '64px'}}>
                <div>
                    <h3>View pictures of Cats</h3>
                    <p>[<em>placeholder for picture of cat</em>]</p>
                    <p>Cats! Cats! Cats! lets you view hundreds of pictures of cats straight from the Cat API and users like you.</p>
                </div>
                <div>
                    <h3>Upload Pictures of Cats</h3>
                    <p>[<em>placeholder for picture of cat</em>]</p>
                    <p>Upload your own pictures of cats; cats you own, cats your friends own, cats you find on the street, any picture of a cat!</p>
                </div>
                <div>
                    <h3>Rate the Cats</h3>
                    <p>[<em>placeholder for picture of cat</em>]</p>
                    <p>Rate the pictures of cats.</p>
                </div>
                <div>
                    <h3>Start Now!</h3>
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
