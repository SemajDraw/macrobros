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
                                <h4> MacroBros </h4>
                            </div>
                            <div className="col-lg-3 col-sm-2 col-xs-3 pt-5">
                                <Link to='/contact'>
                                    <h3> Contact </h3>
                                </Link>
                                <ul>
                                    <li><a className="email" href="#"> insert email here </a></li>
                                    <br/>
                                    <li><p> address line one </p></li>
                                    <li><p> address line two </p></li>
                                </ul>
                            </div>
                            <div className="col-lg-3 col-sm-2 col-xs-3 pt-5">
                                <ul>
                                    <li>
                                        <h5><a href="#"> ABOUT US</a> </h5>
                                    </li>
                                    <li>
                                        <h5><a href="#"> CURRENT SERIES </a> </h5>
                                    </li>
                                    <li>
                                        <h5><a href="#"> THE HOUSE </a> </h5>
                                    </li>
                                    <li>
                                        <h5><a href="#"> LOOKING BACK </a> </h5>
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