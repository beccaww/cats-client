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
            <h2>Welcome to Cat App</h2>
            <main style={{marginTop: '64px'}}>
                <p>This is page content.</p>
                <LoginForm />
                <Link to="/register">Register</Link>
            </main>
        </div>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LandingPage);
