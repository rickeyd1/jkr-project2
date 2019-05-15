import React, { Component } from 'react';
import { connect } from 'react-redux';
import { IState, ILoginState } from "../../reducers";
import '../../includes/bootstrap';
import { updateUsername, submitLogin, updatePassword } from '../../actions/login.action';
import history from '../../util/history';

export interface ILoginProps {
    login: ILoginState,
    updateUsername: (event) => void,
    updatePassword: (event) => void,
    submitLogin: (username: string, password: string, event, history) => void
}

export class LoginComponent extends Component<ILoginProps> {

    render() {
        const stylesObj = {
            background: 'linear-gradient(to right, #45bfb5, #e06f50)'
        };

        const {username, password } = this.props.login;

        return (
            <div style={stylesObj} className="mainContainer">
            <div className="row">
            <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                <div className="card card-signin my-5">
                <div className="card-body">
                    <h5 className="card-title text-center">Sign In</h5>
                    <form className="form-signin" onSubmit={(e) => this.props.submitLogin(username, password, e, history)}>
                    <div className="form-label-group">
                        <input type="text" id="inputEmail" className="form-control" placeholder="Username" required value={username} onChange={(e) => this.props.updateUsername(e)} />
                        <label htmlFor="inputEmail">Username</label>
                    </div>

                    <div className="form-label-group">
                        <input type="password" id="inputPassword" className="form-control" placeholder="Password" required value={password} onChange={(e) => this.props.updatePassword(e)}/>
                        <label htmlFor="inputPassword">Password</label>
                    </div>

                    <div className="custom-control custom-checkbox mb-3">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember password</label>
                    </div>
                    <button className="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Sign in</button>
                    </form>
                    <br />
                    <h6 className="text-center">{this.props.login.errorMessage}</h6>
                </div>
                </div>
            </div>
            </div>
        </div>
        );
    }
}

const mapStateToProps = (state: IState) => {
    return {
        login: state.login
    }
}

const mapDispatchToProps = {
    updateUsername: updateUsername,
    updatePassword: updatePassword,
    submitLogin: submitLogin
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent);