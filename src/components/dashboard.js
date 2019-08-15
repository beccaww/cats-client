import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import {fetchProtectedData} from '../actions/protected-data';
import Toolbar from './navbar'; 
import './dashboard.css';
import Search from './search-page';
import Search2 from './search-all';
// import {Link, Redirect} from 'react-router-dom';
// import { HashLink as Link } from 'react-router-hash-link';
import Gallery from './gallery.js'

export class Dashboard extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchProtectedData());
    }

    render() {
        return (
            
            <div className="dashboard">
                <Toolbar />
                <div style={{marginTop: '64px'}} className="dashboard-welcome">
                    Welcome {this.props.username}
                    {/* <Link to="home-page#search">Find a cat</Link> */}
                    {/* <div style={{marginTop: '64px'}} className="button one">
                        <Link to="/upload">Upload</Link>
                    </div> */}
                    {/* <div className="button two">
                        <Link to="/search-page">Search by breed</Link>
                    </div>
                    <div className="button three"> 
                        <Link to="/search-all">Get random cat pic</Link>
                    </div> */}
                </div>
                {/* <div className="dashboard-name">Name: {this.props.name}</div> */}
                <div className="search-box" id="search">
                    <Search /> <Search2 />
                </div>
                <div className="dashboard-protected-data">
                    {/* Protected data: {this.props.protectedData} */}
                    {/* <Gallery /> */}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    const {currentUser} = state.auth;
    return {
        username: state.auth.currentUser.username,
        name: `${currentUser.firstName} ${currentUser.lastName}`,
        protectedData: state.protectedData.data
    };
};

export default requiresLogin()(connect(mapStateToProps)(Dashboard));
