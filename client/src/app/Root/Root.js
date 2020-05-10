import React, { Component } from 'react';
import logo from '../../assets/images/logo.png';
import './Root.css';

export default class Root extends Component {
    state = {
        loading: false,
        error: "",
    };
    submitForm = (e) => {
        e.preventDefault();
        this.setState({loading: true});
        setTimeout(() => {
            this.setState({loading: false, error: "LOGIN_INCORRECT"});
        }, 1000);
    }
    render() {
        const { loading, error } = this.state;
        return (
            <div className="container">
                <form className="text-center border border-light p-3" action="#!" onSubmit={this.submitForm}>
                    <img className="logo" alt="alpha saturn logo" src={logo} />
                    <p className="h4 mb-4">Alpha Saturn Sign in</p>
                    {
                        error === 'LOGIN_INCORRECT' &&
                        <div className="login-incorrect alert alert-danger" role="alert">
                            Login credentials incorrect.
                        </div>
                    }
                    <input type="email" id="defaultLoginFormEmail" className="form-control mb-4" placeholder="E-mail" />
                    <input type="password" id="defaultLoginFormPassword" className="form-control mb-4" placeholder="Password" />

                    <div className="d-flex justify-content-around">
                        <div>
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" />
                                <label className="custom-control-label">Remember me</label>
                            </div>
                        </div>
                    </div>

                    <button className="btn btn-elegant btn-block mt-4" type="submit">
                        {
                            loading ?
                                <span className="loading">
                                    <i className="fas fa-cog fa-spin"></i>
                                </span>
                            :
                                <span className="sign-in">Sign in</span>
                        }
                    </button>
                </form>
            </div>
        );
    }

}
