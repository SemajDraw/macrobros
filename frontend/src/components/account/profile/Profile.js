import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import './Profile.scss';
import {UserSvg} from "./UserSvg";
import ClappedBlogs from "./clapped-blogs/ClappedBlogs";
import {getSavedBlogs} from "../../../actions/account/account";

export const Profile = (props) => {

    const user = useSelector(state => state.auth.user);
    const clappedBlogs = useSelector(state => state.account.savedBlogs)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getSavedBlogs());
    }, []);

    const capitalizeInitials = (names) => {
        return names.map(name => name[0].toUpperCase() + ' ')
    }

    return (
        <div className='container mt-3 min-vh-100'>
            <div className='row justify-content-center'>
                <div className='col-10 col-lg-8 mt-5 user-details'>
                    <div className='d-flex justify-content-between my-3'>
                        <div>
                            <h1>{capitalizeInitials([user.firstName, user.lastName])}</h1>
                        </div>
                        <UserSvg initial={user.firstName[0].toUpperCase()}/>
                    </div>
                </div>
                <div className='col-10 col-lg-8 mt-2 user-claps'>
                    <div className='row my-3'>
                        <div>
                            <h4>Blogs saved by {capitalizeInitials([user.firstName, user.lastName])}</h4>
                        </div>
                    </div>
                    <div className='mb-5'>
                        <ClappedBlogs blogs={clappedBlogs.results}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;