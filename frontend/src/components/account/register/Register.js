import React from 'react';
import RegisterForm from "./RegisterForm";
import { Link } from "react-router-dom";
import './Register.scss';
import { MacroBrosIcon } from "../../common/MacroBrosIcon";

export const Register = (props) => {

    const iconProps = {
        strokeColor: '#000000'
    };

    return (
        <div className='container mt-3 min-vh-100'>
            <div className='row justify-content-center'>
                <div className='col-md-8 col-10'>
                    <div className='d-flex justify-content-center my-3'>
                        <div style={ { height: '100px', width: '100px' } }>
                            <MacroBrosIcon key={'register-icon'} props={ iconProps }/>
                        </div>
                    </div>
                </div>
            </div>
            <div className='row justify-content-center'>
                <div className='col-12 justify-content-center'>
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
                        <RegisterForm props={ props }/>
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
}

export default Register;