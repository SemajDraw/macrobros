import React from 'react';
import './Register.scss';
import RegisterForm from './RegisterForm.html';
import {Link} from "react-router-dom";


const RegisterHtml = () => (

    <div className='container mt-3 min-vh-100'>
        <div className='row justify-content-center'>
            <div className='col-md-8 col-10'>
                <div className='d-flex justify-content-center my-3'>
                    <p>Put logo here</p>
                </div>
            </div>
        </div>
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
                            <h1>Create your account</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='row justify-content-center'>
            <div className='col-md-5 col-10'>
                <div className='row justify-content-center my-md-3 my-2 form-container'>
                    <RegisterForm/>
                </div>
            </div>
        </div>
        <div className='row justify-content-center'>
            <div className='col-md-5 col-10'>
                <div className='row justify-content-center my-md-3 my-2'>
                    <p>Already have an account? Please <Link className='register-link' to='/login'>login!</Link>
                    </p>
                </div>
            </div>
        </div>
    </div>

);

export default RegisterHtml;