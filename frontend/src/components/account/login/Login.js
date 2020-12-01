import React from 'react';
import LoginForm from "./LoginForm";
import { Link } from "react-router-dom";
import './Login.scss';
import { MacroBrosIcon } from "../../common/MacroBrosIcon";
import SocialIcons from "../../common/social-icons/SocialIcons";
import { Account } from "../../common/Routes";

export const Login = (props) => {

    const iconProps = {
        id: 'login-icon',
        strokeColor: '#000000'
    };

    return (
        <div className='container min-vh-100 d-flex align-items-center'>
            <div style={ { width: '100%' } }>
                <div className='row justify-content-center'>
                    <div className='col-md-8 col-10'>
                        <div className='d-flex justify-content-center my-3'>
                            <div style={ { height: '100px', width: '100px' } }>
                                <MacroBrosIcon key={ 'login-icon' } props={ iconProps }/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row justify-content-center'>
                    <div className='col-12 justify-content-center'>
                        <div className='row justify-content-center'>
                            <div className='d-none d-md-block col-md-8'>
                                <div className='d-flex justify-content-center'>
                                    <h3>Sign in to MacroBros</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row justify-content-center'>
                    <div className='col-10 col-md-5 col-lg-4'>
                        <div className='row justify-content-center mt-md-3 mt-2 form-container'>
                            <LoginForm props={ props }/>
                        </div>
                    </div>
                </div>
                <div className='row justify-content-center'>
                    <div className='col-10 col-md-5 col-lg-4'>
                        <div className='row text-center my-md-3 my-2 form-container'>
                            <div className='login-form card card-body'>
                                <p className='my-0'>New to MacroBros?
                                    <Link className='register-link ml-1' to={ Account.REGISTER }>
                                        Create an account.
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row justify-content-center'>
                    <div className='col-10 col-md-5 col-lg-4'>
                        <SocialIcons/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;