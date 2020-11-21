import React from 'react';
import { MacroBrosIcon } from "../../common/MacroBrosIcon";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons/faFacebook";
import { faInstagram } from "@fortawesome/free-brands-svg-icons/faInstagram";
import { faTwitter } from "@fortawesome/free-brands-svg-icons/faTwitter";

export const RegisterSuccess = () => {

    const iconProps = {
        strokeColor: '#000000'
    };

    return (
        <div className='container d-flex align-items-center mt-3 min-vh-100'>
            <div className='row justify-content-center' style={{height: '100%', width: '100%'}}>
                <div className='col-md-8 col-10'>
                    <div className='register-form card card-body p-4'>
                        <div className='d-flex flex-column align-items-center text-center mx-5 my-md-3 my-2'>
                            <div className='mt-4' style={ { height: '100px', width: '100px' } }>
                                <MacroBrosIcon key={'register-success-icon'} props={ iconProps }/>
                            </div>
                            <h3 className='mt-3'>Thank you for registering!</h3>
                            <p >A verification email has been sent to your email account. Please check your inbox to
                                verify.</p>
                            <Button className='my-3'>CONTACT US</Button>
                            <div className='mb-1 mt-5' style={{width: '100%'}}>
                                <div className='d-flex justify-content-around'>
                                    <div>
                                        <Link className='' to=''>
                                            <FontAwesomeIcon size='2x' icon={ faFacebook }/>
                                        </Link>
                                    </div>
                                    <div>
                                        <Link className='' to=''>
                                            <FontAwesomeIcon size='2x' icon={ faInstagram }/>
                                        </Link>
                                    </div>
                                    <div>
                                        <Link className='' to=''>
                                            <FontAwesomeIcon size='2x' icon={ faTwitter }/>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegisterSuccess;