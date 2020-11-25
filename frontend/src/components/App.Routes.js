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
                        <Route exact path='/blog' component={ Blogs }/>
                        <Route exact path='/blog/:slug' component={ BlogDetails }/>
                        <Route exact path='/blog/category/:category' component={ CategoryBlogs }/>
                        <Route exact path='/blog/search/:search' component={ SearchBlogs }/>

                        {/*Account Routes*/ }
                        <Route exact path='/login' component={ Login }/>
                        <Route exact path='/register' component={ Register }/>
                        <PrivateRoute exact path='/profile' component={ Profile }/>
                        <Route exact path='/verify-email/:token' component={ EmailVerification }/>
                        <Route exact path='/password-reset' component={ PasswordReset }/>
                        <Route exact path='/forgot-password' component={ ForgotPassword }/>

                        {/*Common Routes*/ }
                        <Route exact path='/success/:form' component={ FormSuccess }/>

                        {/*Footer Routes*/ }
                        <Route exact path='/contact' component={ Contact }/>

                        {/*Terms and Conditions*/ }
                        <Route exact path='/terms-of-service' component={ TermsService }/>
                        <Route exact path='/privacy-policy' component={ PrivacyPolicy }/>

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