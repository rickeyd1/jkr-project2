import React, { Component } from 'react';
import { User } from "../../model/user";
import { login } from "../../actions/login.action";
import { logout } from "../../actions/logout.action";
import { connect } from 'react-redux';
import { IState } from "../../reducers";
import '../../includes/bootstrap';

interface ILoginState {
    username: string;
    password: string;
}

interface ILoginProps {
    currentUser: User
    login: (username: string, password: string, history: any) => void
    logout: () => void
}

export class LoginComponent extends Component<ILoginProps, ILoginState> {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
    }

    //Log in
    login = async (e) => {

    }

    //Log out
    logout = async (e) => {

    }

    //Update username
    updateUsername = (e) => {
        this.setState({
            username: e.target.value
        });
    }

    //Update password
    updatePassword = (e) => {
        this.setState({
            password: e.target.value
        });
    }

    render() {
        const user = this.props.currentUser;
        const { username, password } = this.state;
        const stylesObj = {
            background: 'linear-gradient(to right, #45bfb5, #e06f50)'
        };

        return (
            <div style={stylesObj} className="mainContainer">
            <div className="row">
            <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                <div className="card card-signin my-5">
                <div className="card-body">
                    <h5 className="card-title text-center">Sign In</h5>
                    <form className="form-signin">
                    <div className="form-label-group">
                        <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required />
                        <label htmlFor="inputEmail">Email address</label>
                    </div>

                    <div className="form-label-group">
                        <input type="password" id="inputPassword" className="form-control" placeholder="Password" required />
                        <label htmlFor="inputPassword">Password</label>
                    </div>

                    <div className="custom-control custom-checkbox mb-3">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember password</label>
                    </div>
                    <button className="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Sign in</button>
                    </form>
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
        auth: state.auth,
        currentUser: state.auth.currentUser
    }
}

const mapDispatchToProps = {
    login: login,
    logout: logout
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent);