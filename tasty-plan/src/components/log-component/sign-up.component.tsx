import * as React from 'react';
import { Component } from 'react';

export interface SignUpComponentProps {
    
}
 
export interface SignUpComponentState {
    
}
 
class SignUpComponent extends React.Component<SignUpComponentProps, SignUpComponentState> {

    render() { 
        const stylesObj = {
            background: 'linear-gradient(to right, #45bfb5, #e06f50)'
        };

        return (
            <div style={stylesObj} className="mainContainer">
            <div className="row">
            <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                <div className="card card-signin my-5">
                <div className="card-body">
                    <h5 className="card-title text-center">Sign Up</h5>
                    <form className="form-signin">
                    <div className="form-label-group">
                        <input type="text"className="form-control" placeholder="Name" required />
                        <label>Name</label>
                    </div>

                    <div className="form-label-group">
                        <input type="email" className="form-control" placeholder="Email" required />
                        <label>Email</label>
                    </div>
                    <div className="form-label-group">
                        <input type="text" className="form-control" placeholder="Username" required />
                        <label>Username</label>
                    </div>

                    <div className="form-label-group">
                        <input type="password" className="form-control" placeholder="Password" required />
                        <label>Password</label>
                    </div>

                    <button className="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Finish Registration</button>
                    </form>
                    <br />
                    <h6 className="text-center"></h6>
                </div>
                </div>
            </div>
            </div>
        </div>
        );
    }
}
 
export default SignUpComponent;