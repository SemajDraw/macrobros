import React from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import MotionPathPlugin from "gsap/MotionPathPlugin";
import './PageNotFound.scss'

gsap.registerPlugin(MotionPathPlugin);


export const PageNotFound = () => {

    return (
        <div className='d-flex' style={{height: '90%'}}>
            <div className="text"><p>404</p></div>
            <div className="container animContainer d-none d-md-block">
                {/*--cavemanleft-- */ }
                <div className="caveman">
                    <div className="leg">
                        <div className="foot">
                            <div className="fingers"/>
                        </div>
                    </div>
                    <div className="leg">
                        <div className="foot">
                            <div className="fingers"/>
                        </div>
                    </div>
                    <div
                        className="shape">
                        <div className="circle"/>
                        <div className="circle"/>
                    </div>
                    <div className="head">
                        <div className="eye">
                            <div className="nose"/>
                        </div>
                        <div className="mouth"/>
                    </div>
                    <div className="arm-right">
                        <div className="club"/>
                    </ div>
                </div>
                {/*-- caveman right --*/ }
                <div className="caveman">
                    <div className="leg">
                        <div className="foot">
                            <div className="fingers"/>
                        </div>
                    </div>
                    <div className="leg">
                        <div className="foot">
                            <div className="fingers"/>
                        </div>
                    </div>
                    <div className="shape">
                        <div className="circle"/>
                        <div className="circle"/>
                    </div>
                    <div className="head">
                        <div className="eye">
                            <div className="nose"/>
                        </div>
                        <div className="mouth"/>
                    </div>
                    <div className="arm-right">
                        <div className="club"/>
                    </div>
                </div>
            </div>

            <Link className='homeLink mb-5' to='/'>
                <button className='homeBtn btn-lg px-5'>
                    HOME
                </button>
            </Link>
        </div>
    );
}

export default PageNotFound;