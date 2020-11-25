import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons/faFacebook";
import { faInstagram } from "@fortawesome/free-brands-svg-icons/faInstagram";
import { faTwitter } from "@fortawesome/free-brands-svg-icons/faTwitter";
import './SocialIcons.scss';

export const SocialIcons = () => {

    return (
        <div className='mb-1 mt-5' style={ { width: '100%' } }>
            <div className='d-flex justify-content-around'>
                <div>
                    <Link className='social-link' to=''>
                        <FontAwesomeIcon size='2x' icon={ faFacebook }/>
                    </Link>
                </div>
                <div>
                    <Link className='social-link' to=''>
                        <FontAwesomeIcon size='2x' icon={ faInstagram }/>
                    </Link>
                </div>
                <div>
                    <Link className='social-link' to=''>
                        <FontAwesomeIcon size='2x' icon={ faTwitter }/>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SocialIcons;