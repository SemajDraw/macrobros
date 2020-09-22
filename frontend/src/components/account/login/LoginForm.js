import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {login} from '../../../actions/auth/auth';
import {Redirect} from 'react-router-dom';

export class LoginForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    };

    static propTypes = {
        login: PropTypes.func.isRequired,
        isAuthenticated: PropTypes.bool
    };

    onChange = e => this.setState({
        [e.target.name]: e.target.value
    });

    onSubmit = e => {
        e.preventDefault();
        this.props.login(this.state.email, this.state.password);
        this.setState({
            email: '',
            password: ''
        });
    };

    render() {
        if (this.props.isAuthenticated) {
            return <Redirect to='/'/>;
        }
        const {email, password} = this.state;
        return (
            <div className='register-card card card-body my-1'>
                <form onSubmit={this.onSubmit}>
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
                    <div className='form-group mb-0 mt-5'>
                        <button type='submit' className='btn btn-primary btn-block'>Login</button>
                    </div>
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, {login})(LoginForm);