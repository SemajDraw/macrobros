import React, {Component, Fragment} from 'react'
import {withAlert} from 'react-alert';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

class Alerts extends Component {

    static propTypes = {
        error: PropTypes.object.isRequired,
        message: PropTypes.object.isRequired
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        const {alert, error, message} = this.props;
        if (error !== prevProps.error) {
            if (error.msg.passwordsNotMatch) {
                alert.error(error.msg.passwordsNotMatch)
            }
            if (error.msg.nonFieldErrors) {
                alert.error(error.msg.nonFieldErrors.join());
            }
            if (error.msg.email) {
                alert.error(`A ${error.msg.email.join()}`);
            }
        }

        if (message !== prevProps.message) {
            if (message) {
                alert.info(message);
            }
        }
    }

    render() {
        return (
            <Fragment/>
        );
    }
}

const mapStateToProps = (state) => ({
    error: state.errors,
    message: state.messages
});

export default connect(mapStateToProps)(withAlert()(Alerts));