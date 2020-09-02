import React from 'react';
import './Login.css';
import {Link} from 'react-router-dom';
import LoginForm from './LoginForm.html';

const LoginHtml = () => (
    <div>
        <div className='container-fluid'>
            <div className='row justify-content-center'>
                <div className='col-md-8 col-10'>
                    <div className='d-flex justify-content-center my-3'>
                        <p>Put logo here</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='container-fluid'>
            <div className='row justify-content-center'>
                <div className='col-12 justify-content-center'>
                    <div className='row justify-content-center'>
                        <div className='col-md-8 col-10'>
                            <div className='d-flex justify-content-center mb-3'>
                                <p className='m-0'>Join guitar lessons</p>
                            </div>
                        </div>
                    </div>
                    <div className='row justify-content-center'>
                        <div className='d-none d-md-block col-md-8'>
                            <div className='d-flex justify-content-center'>
                                <h1>Login</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='container-fluid'>
            <div className='row justify-content-center'>
                <div className='col-md-5 col-10'>
                    <div className='row justify-content-center mt-md-3 mt-2'>
                        <LoginForm/>
                    </div>
                </div>
            </div>
        </div>
        <div className='container-fluid'>
            <div className='row justify-content-center'>
                <div className='col-md-5 col-10'>
                    <div className='row justify-content-center my-md-3 my-2'>
                        <p>Don't have an account? Please <Link className='register-link' to='/register'>register!</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default LoginHtml;

