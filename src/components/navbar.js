import React from 'react';
import {Link, Redirect} from 'react-router-dom';
import { connect } from 'react-redux'; 
import './navbar_homepage.css'; 
import { logout } from '../actions/auth'; 


class Toolbar extends React.Component {
    logout(e) {
        e.preventDefault(); 
        this.props.logout(); 
    }


    render() { 
 
        return (
            <header className="navbar">
                <nav className="navbar_navigation">
                    <div className="navbar_logo"><a href="/"><img src={require("../assets/images/cat11.png")}></img></a></div>
                        <div className="spacer"></div>
                        <div className="navbar_navitems">
                            <ul>
                                <li><a href="/">Home</a></li>
                                <li><a href="/" onClick={this.logout.bind(this)}>Logout</a></li>
                            </ul>
                        </div>
                </nav>
            </header>
        )
    }
}
 
 
function mapStateToProps(state) {
    return {
        auth: state.auth
    };
 }
 
 export default connect(mapStateToProps, { logout })(Toolbar);
 
 
 