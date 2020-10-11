import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {verifyEmail} from "../../../actions/email/email";
import {Link} from "react-router-dom";
import LoginForm from "../login/LoginForm";

export const EmailVerification = (props) => {

    const dispatch = useDispatch();
    const emailVerification = useSelector(state => state.email.emailVerification);

    console.log('url token', props.match.params.token);
    useEffect(() => {
        dispatch(verifyEmail(props.match.params.token));
    }, []);

    return (
        <div className='container mt-3 min-vh-100'>
            <div className='row justify-content-center'>
                <div className='col-md-8 col-10 mt-5'>
                    <div className='d-flex justify-content-center my-3'>
                        <p>Put logo here</p>
                    </div>
                </div>
            </div>
            <div className='row justify-content-center mt-3'>
                <div className='col-md-5 col-10 text-center'>
                    <h3 className='pt-5 pb-2'>{emailVerification.message[0]}</h3>
                    <h5 className='pb-5'>{emailVerification.message[1]}</h5>
                </div>
            </div>
            <div className='row justify-content-center'>
                <div className='col-md-5 col-10 text-center'>
                    {emailVerification.emailVerified === true ?
                        <Link className='btn btn-primary btn-lg' role='button' to='/login'>Login</Link> :
                        <Link className='btn btn-primary btn-lg' role='button' to='/register'>Register</Link>
                    }
                </div>
            </div>
        </div>
    );
}

export default EmailVerification;