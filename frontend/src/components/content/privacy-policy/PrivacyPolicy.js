import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getPrivacyPolicy} from "../../../actions/terms-conditions/termsConditions";
import Moment from "react-moment";

export class PrivacyPolicy extends Component {

    static propTypes = {
      privacyPolicy: PropTypes.object.isRequired
    };

    componentDidMount() {
        this.props.getPrivacyPolicy();
    }

    renderPrivacyPolicyContent(content) {
        return {__html: content};
    }

    render() {
        const {privacyPolicy} = this.props;
        return (
            <div className='container mt-5 min-vh-100'>
                <h1>{privacyPolicy.title}</h1>
                <div className='mt-5 mb-5' dangerouslySetInnerHTML={this.renderPrivacyPolicyContent(privacyPolicy.content)}/>
                <p>This Privacy Policy was last updated on <Moment format="Do MMMM YYYY">{privacyPolicy.dateCreated}</Moment>.</p>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    privacyPolicy: state.termsConditions.privacyPolicy
});

export default connect(mapStateToProps, {getPrivacyPolicy})(PrivacyPolicy);