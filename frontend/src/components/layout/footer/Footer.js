import React, {Component} from 'react';
import './Footer.scss';
import {Link} from "react-router-dom";

export class Footer extends Component {

    render() {
        return (
            <footer>
                <div className="footer" id="footer">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 pt-5 mx-auto">
                                <Link className='footerLink' to=''>
                                    <h4 className='footerLink'> MacroBros </h4>
                                </Link>
                            </div>
                            <div className="col-lg-3 col-sm-2 col-xs-3 pt-5 pb-3">
                                <br/>
                                <Link className='footerLink' to='/contact'>
                                    <h3 className='footerLink'> Contact </h3>
                                </Link>
                                <ul>
                                    <br/>
                                    <li>
                                        <Link className='footerLink' to='/terms-of-service'>
                                            <p className='footerLink'>Terms of Service</p>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className='footerLink' to='/privacy-policy'>
                                            <p className='footerLink'>Privacy Policy</p>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-3 col-sm-2 col-xs-3 pt-5 pb-3">
                                <br/>
                                <ul>
                                    <li>
                                        <Link className='footerLink inactiveLink' to=''>
                                            <p className='footerLink'>ABOUT US</p>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className='footerLink inactiveLink' to=''>
                                            <p className='footerLink'>CURRENT SERIES</p>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className='footerLink inactiveLink' to=''>
                                            <p className='footerLink'>THE HOUSE</p>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className='footerLink inactiveLink' to=''>
                                            <p className='footerLink'>LOOKING BACK</p>
                                        </Link>
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </div>

                    <div className="footer-bottom">
                        <div className="container">
                            <p className="pull-left copyright"> Copyright © Footer 2014. All right reserved. </p>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;