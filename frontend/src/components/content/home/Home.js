import React, {Component} from 'react';
import {Link} from "react-router-dom";

export class Home extends Component {
    render() {
        return (
            <div className='container mt-4'>
                <div className="jumbotron">
                    <h1 className="display-4">Welcome to MacroBros</h1>
                    <p className="lead">We make all kinds of awesome blogs about making you dollahs</p>
                    <hr className="my-4"/>
                    <p>Click the button below to checkout out our awesome blogs</p>
                    <Link className='btn btn-primary btn-lg' to='/blog' role='button'>Check out or Blog!</Link>
                </div>
            </div>
        );
    }
}

export default Home;