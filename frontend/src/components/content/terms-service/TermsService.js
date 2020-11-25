import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTermsService } from "../../../actions/terms-conditions/termsConditions";
import Moment from "react-moment";

export const TermsService = () => {

    const dispatch = useDispatch();
    const termsService = useSelector(state => state.termsConditions.termsService);

    useEffect(() => {
        dispatch(getTermsService());
    }, []);

    const renderTermsService = (content) => {
        return { __html: content };
    }

    return (
        <div className='container mt-5 min-vh-100'>
            <h1>{ termsService.title }</h1>
            <div className='mt-5 mb-5' dangerouslySetInnerHTML={ renderTermsService(termsService.content) }/>
            <p>These Terms of Service was last updated on
                <Moment format="Do MMMM YYYY">{ termsService.dateCreated }</Moment>
                .
            </p>
        </div>
    );
};

export default TermsService;