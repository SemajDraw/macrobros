import React, {Component} from 'react';
import {connect} from 'react-redux'
import PropTypes from 'prop-types';
import {register} from '../../../actions/auth/auth';
import {createError} from "../../../actions/alerts/errors/errors";
import {Redirect} from "react-router-dom";

export class RegisterForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            password2: ''
        }
    };

    static propTypes = {
        isAuthenticated: PropTypes.bool.isRequired,
        register: PropTypes.func.isRequired,
        createError: PropTypes.func
    };

    onChange = e => this.setState({
        [e.target.name]: e.target.value
    });

    onSubmit = e => {
        e.preventDefault();
        const {password, password2} = this.state;
        if (password !== password2) {
            this.props.createError({passwordsNotMatch: 'Password and Confirm password must match.'});
        } else {
            this.props.register(this.state);
            this.setState({
                firstName: '',
                lastName: '',
                email: '',
                password: '',
                password2: ''
            });
        }
    };

    render() {
        if (this.props.isAuthenticated) {
            return <Redirect to='/'/>;
        }
        const {firstName, lastName, email, password, password2} = this.state;
        return (
            <div className='register-card card card-body my-1'>
                <form onSubmit={this.onSubmit}>
                    <div className='form-group'>
                        <label className='mb-0'>First name</label>
                        <input
                            className='form-control'
                            type='text'
                            name='firstName'
                            onChange={this.onChange}
                            value={firstName}
                        />
                    </div>
                    <div className='form-group'>
                        <label className='mb-0'>Last name</label>
                        <input
                            className='form-control'
                            type='text'
                            name='lastName'
                            onChange={this.onChange}
                            value={lastName}
                        />
                    </div>
                    <div className='form-group'>
                        <label className='mb-0'>Email address</label>
                        <input
                            className='form-control'
                            type='email'
                            name='email'
                            onChange={this.onChange}
                            value={email}
                        />
                    </div>
                    <div className='form-group'>
                        <label className='mb-0'>Password</label>
                        <input
                            className='form-control'
                            type='password'
                            name='password'
                            onChange={this.onChange}
                            value={password}
                        />
                    </div>
                    <div className='form-group'>
                        <label className='mb-0'>Confirm password</label>
                        <input
                            className='form-control'
                            type='password'
                            name='password2'
                            onChange={this.onChange}
                            value={password2}
                        />
                    </div>
                    <div className='form-group mb-0 mt-5'>
                        <button type='submit' className='btn btn-primary btn-block'>Register</button>
                    </div>
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, {register, createError})(RegisterForm);