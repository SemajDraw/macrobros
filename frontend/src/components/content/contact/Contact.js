import React from "react";
import './Contact.scss';
import ContactForm from "./ContactForm";
import { MacroBrosIcon } from "../../common/MacroBrosIcon";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons/faFacebook";
import { faInstagram } from "@fortawesome/free-brands-svg-icons/faInstagram";
import { faTwitter } from "@fortawesome/free-brands-svg-icons/faTwitter";
import SocialIcons from "../../common/social-icons/SocialIcons";

export const Contact = (props) => {

    const iconProps = {
        strokeColor: '#000000'
    };

    return (
        <div className='container min-vh-100 d-flex align-items-center'>
            <div style={ { width: '100%' } }>
                <div className='row justify-content-center'>
                    <div className='col-md-8 col-10'>
                        <div className='d-flex justify-content-center mb-3'>
                            <div style={ { height: '100px', width: '100px' } }>
                                <MacroBrosIcon key={ 'register-icon' } props={ iconProps }/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row justify-content-center'>
                    <div className='col-12 justify-content-center'>
                        <div className='row justify-content-center'>
                            <div className='d-none d-md-block col-md-8'>
                                <div className='d-flex justify-content-center'>
                                    <h1>Get in touch</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row justify-content-center mt-3'>
                    <div className='col-md-6 col-10'>
                        <div className='row justify-content-center mt-md-3 mt-2 form-container'>
                            <ContactForm props={ props }/>
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
};

export default Contact;