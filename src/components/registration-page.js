import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';
import RegistrationForm from './registration-form';
import './registration-page.css';
import Navbar from './navbar_homepage'


export function RegistrationPage(props) {
    // If we are logged in (which happens automatically when registration
    // is successful) redirect to the user's dashboard
    if (props.loggedIn) {
        return <Redirect to="/dashboard" />;
    }
    return (
         <div> 
             <Navbar />
            <div style={{marginTop: '64px'}} className="register">
                <h2>Register for Cat App</h2>
                <RegistrationForm />
                <Link to="/login">Login</Link>
            </div>
        </div>  
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(RegistrationPage);
