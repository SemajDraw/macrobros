import React, { useState } from "react";
import { clapBlog } from "../../../../actions/blog/blog";
import ClapButton from 'react-clap-button';
import StickyBox from 'react-sticky-box';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark as farFaBookmark } from "@fortawesome/free-regular-svg-icons";
import { faBookmark as fasFaBookmark } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import './ActivityBar.scss';
import { saveBlog } from "../../../../actions/account/account";

export const ActivityBar = (props) => {

    const dispatch = useDispatch();
    const [saveIcon, setSaveIcon] = useState(farFaBookmark);
    const styles = {
        buttonColor: '#0fc4be',
    };
    let clapCount = props.blogPost.claps;

    const likeBlog = ({count, countTotal}) => {
        clapCount += countTotal;
        dispatch(clapBlog(props.blogPost.id))
    };

    const saveBlogg = () => {
        setSaveIcon(fasFaBookmark);
        dispatch(saveBlog(props.blogPost.id))
    };

    return (
        <StickyBox style={{marginTop: '10px'}} id='side-bar' offsetTop={props.offsetTop}
                   offsetBottom={100}>
            <div className='d-flex flex-column'>
                <div className='mb-2'>
                    <ClapButton
                        count={0}
                        countTotal={clapCount}
                        maxCount={1}
                        isClicked={false}
                        onCountChange={likeBlog}
                        theme={{
                            primaryColor: styles.buttonColor,
                            secondaryColor: styles.buttonColor
                        }}
                    />
                </div>
                <div>
                    <button
                        type='button'
                        className='btn btn-circle'
                        onClick={saveBlogg}>
                        <FontAwesomeIcon icon={saveIcon} color={styles.buttonColor}/>
                    </button>
                </div>
            </div>
        </StickyBox>
    );
};

export default ActivityBar;