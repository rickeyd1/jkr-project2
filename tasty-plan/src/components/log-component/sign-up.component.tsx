import * as React from 'react';
import { ISignUpState, IState } from '../../reducers';
import history from '../../util/history';
import { connect } from 'react-redux';
import { createUser, updateSignUpName, updateSignUpEmail, updateSignUpUsername, updateSignUpPassword } from '../../actions/signup.action';

export interface SignUpComponentProps {
    signUp: ISignUpState,
    createUser: (name, email, username, password, event, history) => void,
    updateName: (event) => void,
    updateEmail: (event) => void,
    updateUsername: (event) => void,
    updatePassword: (event) => void
}
 
class SignUpComponent extends React.Component<SignUpComponentProps> {
    render() { 
        const stylesObj = {
            background: 'linear-gradient(to right, #45bfb5, #e06f50)'
        };

        const {name, email, username, password} = this.props.signUp;
        return (
            <div style={stylesObj} className="mainContainer">
            <div className="row">
            <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                <div className="card card-signin my-5">
                <div className="card-body">
                    <h5 className="card-title text-center">Sign Up</h5>
                    <form className="form-signin" onSubmit={(e) => this.props.createUser(name, email, username, password, e, history)}>
                        <div className="form-label-group">
                            <input type="text" id="inputName" className="form-control" placeholder="Name" value={name} onChange={(e) => this.props.updateName(e)} required />
                            <label htmlFor="inputName">Name</label>
                        </div>

                        <div className="form-label-group">
                            <input type="email" id="inputEmail" className="form-control" placeholder="Email" value={email} onChange={(e) => this.props.updateEmail(e)} required />
                            <label htmlFor="inputEmail">Email</label>
                        </div>
                        <div className="form-label-group">
                            <input type="text" id="inputUsername" className="form-control" placeholder="Username" value={username} onChange={(e) => this.props.updateUsername(e)} required />
                            <label htmlFor="inputUsername">Username</label>
                        </div>

                        <div className="form-label-group">
                            <input type="password" id="inputPassword" className="form-control" placeholder="Password" value={password} onChange={(e) => this.props.updatePassword(e)} required />
                            <label htmlFor="inputPassword">Password</label>
                        </div>

                        <button className="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Finish Registration</button>
                    </form>
                    <br />
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
        signUp: state.signup
    }
}

const mapDispatchToProps = {
    createUser: createUser,
    updateName: updateSignUpName,
    updateEmail: updateSignUpEmail,
    updateUsername: updateSignUpUsername,
    updatePassword: updateSignUpPassword
}
 
export default connect(mapStateToProps, mapDispatchToProps)(SignUpComponent);