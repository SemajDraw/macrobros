import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {gsap, TweenLite} from 'gsap';
import MotionPathPlugin from "gsap/MotionPathPlugin";

gsap.registerPlugin(MotionPathPlugin);


import './PageNotFound.scss'


class PageNotFound extends Component {


    render() {
        return (
            <div className='vh-100'>
                <div className="text"><p>404</p></div>
                <div className="container animContainer">
                    {/*--cavemanleft-- */}
                    <div className="caveman">
                        <div className="leg">
                            <div className="foot">
                                <div className="fingers"></div>
                            </div>
                        </div>
                        <div className="leg">
                            <div className="foot">
                                <div className="fingers"></div>
                            </div>
                        </div>
                        <div
                            className="shape">
                            <div
                                className="circle"></div>
                            <div className="circle"></div>
                        </div>
                        <div className="head">
                            <div className="eye">
                                <div className="nose"></div>
                            </div>
                            <div className="mouth"></div>
                        </div>
                        <div
                            className="arm-right">
                            <div
                                className="club"></div>
                        </
                            div>
                    </div>
                    {/*-- caveman right --*/}
                    <div className="caveman">
                        <div className="leg">
                            <div className="foot">
                                <div className="fingers"></div>
                            </div>
                        </div>
                        <div className="leg">
                            <div className="foot">
                                <div className="fingers"></div>
                            </div>
                        </div>
                        <div className="shape">
                            <div className="circle"></div>
                            <div className="circle"></div>
                        </div>
                        <div className="head">
                            <div className="eye">
                                <div className="nose"></div>
                            </div>
                            <div className="mouth"></div>
                        </div>
                        <div className="arm-right">
                            <div className="club"></div>
                        </div>
                    </div>
                </div>
                {/*//////////////// CREDIT ////////////////*/}
                <Link className='homeLink mb-5' to='/'>
                    <button className='homeBtn btn-lg px-5'>
                        Back to Home
                    </button>
                </Link>
            </div>
        );

    }
}

export default PageNotFound;