import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {logout} from '../../../actions/auth/auth';

import './Header.scss';

export class Header extends Component {

    static propTypes = {
        auth: PropTypes.object.isRequired,
        logout: PropTypes.func.isRequired,
    };

    render() {
        const {isAuthenticated, user} = this.props.auth;
        const unauthenticated = (
            <Link className='nav-link' to='/login'>Login/Register</Link>
        );
        const authenticated = (
            <li className='user-dropdown nav-item dropdown active'>
                <a className='user-dropdown-link nav-link dropdown-toggle' href='#' id='navbarDropdown' role='button'
                   data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>
                    Hi {user ? user.firstName : ''}!
                </a>
                <div className='dropdown-menu dropdown-menu-right' aria-labelledby='navbarDropdown'>
                    {/*<div className='dropdown-divider'></div>*/}
                    <a onClick={this.props.logout} style={{cursor: 'pointer'}} className='dropdown-item'>Logout</a>
                </div>
            </li>
        );
        const authenticatedSM = (
            <a onClick={this.props.logout} style={{cursor: 'pointer'}} className='nav-link'>Logout</a>
        );

        return (
            <nav className='my-navbar navbar navbar-expand-md navbar-dark'>
                <div className='home-link nav-container ml-3 d-md-none'>
                    <Link to='/'>MacroBros</Link>
                </div>
                <button className='p-0 mr-3 my-auto navbar-toggler align-self-end' type='button' data-toggle='collapse'
                        data-target='#navbarNav'
                        aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation'>
                    <span className='navbar-toggler-icon'> </span>
                </button>
                <div className='nav-container mx-5 align-content-center collapse navbar-collapse'
                     id='navbarNav'>
                    <ul className='box center-navbar navbar-nav home-link mr-auto d-none d-md-block'>
                        <li className='nav-item active'>
                            <Link to='/'>MacroBros</Link>
                        </li>
                    </ul>
                    <ul className='box center-navbar navbar-nav'>
                        <li className='nav-item active'>
                            <Link className='nav-link' to='/blog'>Blogs</Link>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link' href='#'>Videos</a>
                        </li>
                        <li className='nav-item active d-md-none'>
                            {isAuthenticated ? authenticatedSM : unauthenticated}
                        </li>
                    </ul>
                    <ul className='box center-navbar navbar-nav ml-auto d-none d-md-block'>
                        {isAuthenticated ? authenticated : unauthenticated}
                    </ul>
                </div>
            </nav>
        );
    }
}

const mapStateToProps = (state) => ({
    auth: state.auth
});

export default connect(mapStateToProps, {logout})(Header);