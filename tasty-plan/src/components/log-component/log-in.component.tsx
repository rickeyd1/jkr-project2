import React, { Component } from 'react';
import { connect } from 'react-redux';
import { IState, ILoginState } from "../../reducers";
import '../../includes/bootstrap';
import { updateUsername, submitLogin, updatePassword, goToSignUp, logout } from '../../actions/login.action';
import history from '../../util/history';

export interface ILoginProps {
    login: ILoginState,
    updateUsername: (event) => void,
    updatePassword: (event) => void,
    submitLogin: (username: string, password: string, event, history) => void,
    goToSignUp: (event, history) => void,
    logout: ()=> void
}

export class LoginComponent extends Component<ILoginProps> {

    render() {
        const stylesObj = {
            background: 'linear-gradient(to right, #45bfb5, #e06f50)'
        };
        const user = this.props.login;
        const {username, password } = this.props.login;
        if(user) {
        return (
            <div style={stylesObj} className="mainContainer">
            <div className="row">
            <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                <div className="card card-signin my-5">
                <div className="card-body">
                    <h5 className="card-title text-center">Sign In</h5>
                    <form className="form-signin">
                    <div className="form-label-group">
                        <input type="text" id="inputEmail" className="form-control" placeholder="Username" required value={username} onChange={(e) => this.props.updateUsername(e)} />
                        <label htmlFor="inputEmail">Username</label>
                    </div>

                    <div className="form-label-group">
                        <input type="password" id="inputPassword" className="form-control" placeholder="Password" required value={password} onChange={(e) => this.props.updatePassword(e)}/>
                        <label htmlFor="inputPassword">Password</label>
                    </div>

                    <button className="btn btn-lg btn-primary btn-block text-uppercase" onClick={(e) => this.props.submitLogin(username, password, e, history)}>Sign in</button>
                    <button className="btn btn-lg btn-success btn-block text-uppercase" onClick={(e) => this.props.goToSignUp(e, history)}>Sign Up</button>
                    </form>
                    <br />
                    <h6 className="text-center">{this.props.login.errorMessage}</h6>
                </div>
                </div>
            </div>
            </div>
        </div>
        );
              
    } else {
        return (
    <div style={stylesObj} className="mainContainer">
            <div className="row">
            <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                <div className="card card-signin my-5">
                <div className="card-body">
                    <h5 className="card-title text-center">Sign Out</h5>
                    <form className="form-signin">

                    <button className="btn btn-lg btn-primary btn-block text-uppercase" onClick={(e) => this.props.logout()}>Sign in</button>
                    </form>
                    <br />
                    <h6 className="text-center">{this.props.login.errorMessage}</h6>
                </div>
                </div>
            </div>
            </div>
        </div>
        )
    }
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
    submitLogin: submitLogin,
    goToSignUp: goToSignUp,
    logout: logout
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent);