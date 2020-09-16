import React, {Component} from 'react';
import PropType from 'prop-types';
import {connect} from 'react-redux';
import {getTermsService} from "../../../actions/terms-conditions/termsConditions";
import Moment from "react-moment";

export class TermsService extends Component {

    static propTypes = {
      termsService: PropType.object.isRequired
    };

    componentDidMount() {
        this.props.getTermsService();
    }

    renderTermsServiceContent(content) {
        return {__html: content};
    }

    render() {
        const {termsService} = this.props;
        return (
           <div className='container mt-5 min-vh-100'>
                <h1>{termsService.title}</h1>
                <div className='mt-5 mb-5' dangerouslySetInnerHTML={this.renderTermsServiceContent(termsService.content)}/>
                <p>These Terms of Service was last updated on <Moment format="Do MMMM YYYY">{termsService.dateCreated}</Moment>.</p>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    termsService: state.termsConditions.termsService
});

export default connect(mapStateToProps, {getTermsService})(TermsService);