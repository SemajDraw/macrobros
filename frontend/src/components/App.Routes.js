import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './content/home/Home';
import Login from './account/login/Login';
import Register from './account/register/Register';
import EmailVerification from './account/email-verification/EmailVerification';
import Header from './layout/navbar/NavBar';
import PageNotFound from './content/page-not-found/PageNotFound';
import Blogs from './content/blog/Blogs';
import BlogDetails from './content/blog/details/BlogDetails';
import SearchBlogs from './content/blog/search/SearchBlogs';
import Footer from './layout/footer/Footer';
import Contact from './content/contact/Contact';
import TermsService from './content/terms-service/TermsService';
import PrivacyPolicy from './content/privacy-policy/PrivacyPolicy';
import { Profile } from './account/profile/Profile';
import PrivateRoute from './shared/PrivateRoute';
import PasswordReset from './account/password-reset/PasswordReset';
import FormSubmit from './shared/FormSubmit';
import ForgotPassword from './account/forgot-password/ForgotPassword';
import CategoryBlogs from './content/blog/category/CategoryBlogs';
import ProfileSettings from './account/profile/settings/ProfileSettings';
import {
	Account,
	Blog,
	Common,
	ContactR,
	TermsConditions
} from './shared/Routes';
import useWithTracker from '../hooks/useWithTracker';

export const AppRouter = () => {
	return (
		<Router>
			<Fragment>
				<Header />
				<Switch>
					<Route exact path='/' component={useWithTracker(Home)} />
					{/*Blog Routes*/}
					<Route exact path={Blog.BLOGS} component={useWithTracker(Blogs)} />
					<Route
						exact
						path={Blog.BLOG_DETAILS}
						component={useWithTracker(BlogDetails)}
					/>
					<Route
						exact
						path={Blog.BLOG_CATEGORIES}
						component={useWithTracker(CategoryBlogs)}
					/>
					<Route
						exact
						path={Blog.BLOG_SEARCH}
						component={useWithTracker(SearchBlogs)}
					/>

					{/*Account Routes*/}
					<Route exact path={Account.LOGIN} component={useWithTracker(Login)} />
					<Route
						exact
						path={Account.REGISTER}
						component={useWithTracker(Register)}
					/>
					<Route
						exact
						path={Account.EMAIL_VERIFICATION}
						component={useWithTracker(EmailVerification)}
					/>
					<Route
						exact
						path={Account.PASSWORD_RESET}
						component={useWithTracker(PasswordReset)}
					/>
					<Route
						exact
						path={Account.FORGOT_PASSWORD}
						component={useWithTracker(ForgotPassword)}
					/>
					<PrivateRoute
						exact
						path={Account.PROFILE}
						component={useWithTracker(Profile)}
					/>
					<PrivateRoute
						exact
						path={Account.PROFILE_SETTINGS}
						component={useWithTracker(ProfileSettings)}
					/>

					{/*Common Routes*/}
					<Route
						exact
						path={Common.FORM_SUBMIT}
						component={useWithTracker(FormSubmit)}
					/>

					{/*Contact Routes*/}
					<Route exact path={ContactR.CONTACT} component={useWithTracker(Contact)} />

					{/*Terms and Conditions*/}
					<Route
						exact
						path={TermsConditions.TERMS_SERVICE}
						component={useWithTracker(TermsService)}
					/>
					<Route
						exact
						path={TermsConditions.PRIVACY_POLICY}
						component={useWithTracker(PrivacyPolicy)}
					/>

					{/*Page Not Found*/}
					<Route component={useWithTracker(PageNotFound)} />
				</Switch>
				<Footer />
			</Fragment>
		</Router>
	);
};

export default AppRouter;
