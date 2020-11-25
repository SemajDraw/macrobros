import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './content/home/Home';
import Login from './account/login/Login';
import Register from './account/register/Register';
import EmailVerification from "./account/email-verification/EmailVerification";
import Header from './layout/navbar/NavBar';
import Alerts from "./common/alerts/Alerts";
import PageNotFound from "./content/page-not-found/PageNotFound";
import Blogs from "./content/blog/Blogs";
import BlogDetails from "./content/blog/BlogDetails";
import SearchBlogs from "./content/blog/SearchBlogs";
import Footer from "./layout/footer/Footer";
import Contact from "./content/contact/Contact";
import TermsService from "./content/terms-service/TermsService";
import PrivacyPolicy from "./content/privacy-policy/PrivacyPolicy";
import { Profile } from "./account/profile/Profile";
import PrivateRoute from "./common/PrivateRoute";
import PasswordReset from "./account/password-reset/PasswordReset";
import FormSuccess from "./common/FormSuccess";
import ForgotPassword from "./account/forgot-password/ForgotPassword";
import CategoryBlogs from "./content/blog/CategoryBlogs";
import ProfileSettings from "./account/profile/settings/ProfileSettings";
import { Account, Blog, Common, ContactR, TermsConditions } from './common/Routes';

class AppRouter extends Component {
    render() {
        return (
            <Router>
                <Fragment>
                    <Header/>
                    <Alerts/>
                    <Switch>
                        <Route exact path='/' component={ Home }/>
                        {/*Blog Routes*/ }
                        <Route exact path={ Blog.BLOGS } component={ Blogs }/>
                        <Route exact path={ Blog.BLOG_DETAILS } component={ BlogDetails }/>
                        <Route exact path={ Blog.BLOG_CATEGORIES } component={ CategoryBlogs }/>
                        <Route exact path={ Blog.BLOG_SEARCH } component={ SearchBlogs }/>

                        {/*Account Routes*/ }
                        <Route exact path={ Account.LOGIN } component={ Login }/>
                        <Route exact path={ Account.REGISTER } component={ Register }/>
                        <Route exact path={ Account.EMAIL_VERIFICATION } component={ EmailVerification }/>
                        <Route exact path={ Account.PASSWORD_RESET } component={ PasswordReset }/>
                        <Route exact path={ Account.FORGOT_PASSWORD } component={ ForgotPassword }/>
                        <PrivateRoute exact path={ Account.PROFILE } component={ Profile }/>
                        <PrivateRoute exact path={ Account.PROFILE_SETTINGS } component={ ProfileSettings }/>

                        {/*Common Routes*/ }
                        <Route exact path={ Common.FORM_SUCCESS } component={ FormSuccess }/>

                        {/*Contact Routes*/ }
                        <Route exact path={ ContactR.CONTACT } component={ Contact }/>

                        {/*Terms and Conditions*/ }
                        <Route exact path={ TermsConditions.TERMS_SERVICE } component={ TermsService }/>
                        <Route exact path={ TermsConditions.PRIVACY_POLICY } component={ PrivacyPolicy }/>

                        {/*Page Not Found*/ }
                        <Route component={ PageNotFound }/>
                    </Switch>
                    <Footer/>
                </Fragment>
            </Router>
        );
    }
}

export default AppRouter;