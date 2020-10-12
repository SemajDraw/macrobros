import React from "react";
import './Contact.scss';
import {useDispatch} from "react-redux";
import {sendEmail} from "../../../actions/contact/contact";
import ContactForm from "./ContactForm";

export const Contact = (props) => {

    const dispatch = useDispatch();

    const formSubmit = (email) => {
        dispatch(sendEmail(email));
    };

    return (
        <div className='container min-vh-100'>
            <div className='row justify-content-center mt-3'>
                <div className='col-md-5 col-10'>
                    <div className='row justify-content-center mt-md-3 mt-2 form-container'>
                        <ContactForm formSubmit={formSubmit}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;