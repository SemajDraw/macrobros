import React from 'react';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {animated, useSpring} from 'react-spring';
import {logout} from '../../../actions/auth/auth';

import './NavBar.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUser} from "@fortawesome/free-solid-svg-icons/faUser";
import {faSortDown} from "@fortawesome/free-solid-svg-icons/faSortDown";

export const NavBar = () => {

    const auth = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const {isAuthenticated, user} = auth;

    const transition = useSpring({
        from: {transform: 'translate3d(0,-20px,0)'},
        enter: {transform: 'translate3d(0,0px,0)'},
        to: {transform: 'translate3d(0,0px,0)'}
    });

    const unauthenticated = (
        <div className='d-inline-flex login-register'>
            <Link className='navBarLink nav-link' to='/login'>Login</Link>
            <p className='my-auto log-reg-sep'>|</p>
            <Link className='navBarLink nav-link' to='/register'>Register</Link>
        </div>
    );
    const authenticated = (
        <div className='d-flex flex-row'>
            <p className='user-name my-auto'>
                {user ? user.firstName : ''}
            </p>
            <a className='navBarLink user-dropdown-link nav-link dropdown-toggle' href='#' id='navbarDropdown'
               role='button'
               data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>
                <FontAwesomeIcon className='ml-4' icon={faUser}/><FontAwesomeIcon className='ml-1 pt-auto' icon={faSortDown}/>
            </a>
            <div className='dropdown-menu py-0 navbar-dropdown dropdown-menu-right' aria-labelledby='navbarDropdown'>
                <h6 className="dropdown-header pt-3">Hi {user ? user.firstName : ''}!</h6>
                <Link className='navBarLink dropdown-link py-2 dropdown-item' to='/profile'>Profile</Link>
                <a onClick={() => dispatch(logout())} style={{cursor: 'pointer'}}
                   className='navBarLink dropdown-link py-2 dropdown-item'>Logout</a>
            </div>
        </div>
    );
    const authenticatedSM = (
        <a onClick={() => dispatch(logout())} style={{cursor: 'pointer'}} className='navBarLink nav-link'>Logout</a>
    );

    return (
        <animated.nav style={transition} className='my-navbar navbar navbar-expand-md navbar-dark py-3'>
            <div className='home-link nav-container ml-3 d-md-none'>
                <Link className='navBarLink nav-link' to='/'>MacroBros</Link>
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
                        <Link className='navBarLink nav-link' to='/'>MacroBros</Link>
                    </li>
                </ul>
                <ul className='box center-navbar navbar-nav'>
                    <li className='nav-item active'>
                        <Link className='navBarLink nav-link' to='/blog'>Blogs</Link>
                    </li>
                    <li className='nav-item active'>
                        <a className='navBarLink nav-link' href='#'>Videos</a>
                    </li>
                    <li className='nav-item active d-md-none'>
                        {isAuthenticated ? authenticatedSM : unauthenticated}
                    </li>
                </ul>
                <ul className='box center-navbar navbar-nav ml-auto d-none d-md-block'>
                    <li className='user-dropdown nav-item dropdown active'>
                        {isAuthenticated ? authenticated : unauthenticated}
                    </li>
                </ul>
            </div>
        </animated.nav>
    );
};

export default NavBar;