import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPrivacyPolicy } from "../../../actions/terms-conditions/termsConditions";
import Moment from "react-moment";

export const PrivacyPolicy = () => {

    const dispatch = useDispatch();
    const privacyPolicy = useSelector(state => state.termsConditions.privacyPolicy);

    useEffect(() => {
        dispatch(getPrivacyPolicy());
    }, []);

    const renderPrivacyPolicy = (content) => {
        return { __html: content };
    }

    return (
        <div className='container mt-5 min-vh-100'>
            <h1>{ privacyPolicy.title }</h1>
            <div className='mt-5 mb-5' dangerouslySetInnerHTML={ renderPrivacyPolicy(privacyPolicy.content) }/>
            <p>This Privacy Policy was last updated on
                <Moment format="Do MMMM YYYY">{ privacyPolicy.dateCreated }</Moment>
                .
            </p>
        </div>
    );
};

export default PrivacyPolicy;