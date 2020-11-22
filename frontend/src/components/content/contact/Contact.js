import React from "react";
import './Contact.scss';
import ContactForm from "./ContactForm";

export const Contact = (props) => {

    return (
        <div className='container min-vh-100'>
            <div className='row justify-content-center mt-3'>
                <div className='col-md-6 col-10'>
                    <div className='row justify-content-center mt-md-3 mt-2 form-container'>
                        <ContactForm props={props}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;