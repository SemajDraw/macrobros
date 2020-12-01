import React, { useState } from 'react';
import './Footer.scss';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons/faFacebook";
import { faInstagram } from "@fortawesome/free-brands-svg-icons/faInstagram";
import { faTwitter } from "@fortawesome/free-brands-svg-icons/faTwitter";
import Bounce from 'react-reveal/Bounce';
import { Blog, TermsConditions } from "../../common/Routes";
import DonateModal from "./DonateModal";

export const Footer = () => {

    const [modalShow, setModalShow] = useState(false);

    return (
        <footer>
            <div className="footer" id="footer">
                <div className="container text-center text-md-left">
                    <div className="row">
                        <div className="col-lg-7 col-md-8 col-sm-12 pt-5">
                            <Link className='footerLink' to=''>
                                <h4 className='footerLink'> MacroBros </h4>
                            </Link>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-12 pt-5 pb-3">
                            <Link className='footerLink' to='/contact'>
                                <h3 className='footerLink'> Contact </h3>
                            </Link>
                            <ul>
                                <br/>
                                <li>
                                    <Link className='footerLink' to={ TermsConditions.TERMS_SERVICE }>
                                        <p className='footerLink'>Terms of Service</p>
                                    </Link>
                                </li>
                                <li>
                                    <Link className='footerLink' to={ TermsConditions.PRIVACY_POLICY }>
                                        <p className='footerLink'>Privacy Policy</p>
                                    </Link>
                                </li>
                                <li>
                                    <a className='footerLink' onClick={ () => setModalShow(true) }>
                                        <p className='footerLink'>Donate</p>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-2 col-md-4  pt-5 pb-3 d-none d-lg-block">
                            <br/>
                            <br/>
                            <ul className='mt-3'>
                                <li>
                                    <Link className='footerLink inactiveLink' to={ Blog.BLOGS }>
                                        <p className='footerLink'>Blog</p>
                                    </Link>
                                </li>
                                {/*<li>*/ }
                                {/*    <Link className='footerLink inactiveLink' to='/video'>*/ }
                                {/*        <p className='footerLink'>Videos</p>*/ }
                                {/*    </Link>*/ }
                                {/*</li>*/ }
                            </ul>
                        </div>

                    </div>
                </div>

                <div className='container-fluid mb-4'>
                    <Bounce left duration={ 1000 } cascade>
                        <div className='row d-flex align-items-center justify-content-around'>
                            <div>
                                <Link className='icon-left footerLink' to=''>
                                    <FontAwesomeIcon size='2x' icon={ faFacebook }/>
                                </Link>
                            </div>
                            <div>
                                <Link className='footerLink' to=''>
                                    <FontAwesomeIcon size='2x' icon={ faInstagram }/>
                                </Link>
                            </div>
                            <div>
                                <Link className='icon-right footerLink' to=''>
                                    <FontAwesomeIcon size='2x' icon={ faTwitter }/>
                                </Link>
                            </div>
                        </div>
                    </Bounce>
                </div>

                <div className="footer-bottom">
                    <div className="container text-center">
                        <p className="pull-left copyright"> Copyright © MacroBros 2020. All right reserved. </p>
                    </div>
                </div>
            </div>
            <DonateModal show={ modalShow } onHide={ () => setModalShow(false) }/>
        </footer>
    );
}

export default Footer;