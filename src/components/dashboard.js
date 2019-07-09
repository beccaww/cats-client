import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import {fetchProtectedData} from '../actions/protected-data';
import Toolbar from './navbar'; 
import './dashboard.css';
import {Link, Redirect} from 'react-router-dom';
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
                    <div style={{marginTop: '64px'}} className="button one">
                        <Link to="/upload">Upload</Link>
                    </div>
                    <div className="button two">
                        <Link to="/search-page">Search</Link>
                    </div>
                </div>
                {/* <div className="dashboard-name">Name: {this.props.name}</div> */}
                <div className="dashboard-protected-data">
                    {/* Protected data: {this.props.protectedData} */}
                    <Gallery />
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
