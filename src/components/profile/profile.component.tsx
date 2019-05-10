import React, { Component } from 'react';
import { User } from '../../model/user';
import { IState } from '../../reducers';
import { connect } from 'react-redux';
import { Role } from '../../model/role';
import { ProfileCardComponent } from './profile=card.component';
import { Link } from 'react-router-dom';

interface IProfileProps {
  currentUser: User,
  role: Role
}

interface IProfileState {
  user: User[];
  holderid: 0;
}
export class ProfileComponent extends Component<IProfileProps, IProfileState> {
  constructor(props) {
    super(props)
    this.state = {
      user: [],
      holderid: 0
    }
  }

  componentDidMount = async () => {
    try {
      const resp = await fetch('http://localhost:8081/user',
        {
          method: 'GET',
          credentials: 'include'
        });
      const body = await resp.json();
      await this.setState({
        user: body
      });
    } catch {
      const resp2 = await fetch('http://localhost:8081/user/' + this.props.currentUser.user_id, {
        method: 'GET',
        credentials: 'include'
      })
      console.table(resp2);
      const body2 = await resp2.json();
      await this.setState({
        user: body2
      })
    }
  }

  render() {
    const user = this.props.currentUser;
    const userlist = this.state.user;

    const role = this.props.role;
    if (user) {
      if (role.role === 'Admin' || role.role === 'Finance Manager') {

        return (
          <>
            <div>
              <input className="Sortfunc" placeholder="Find By ID"></input>
              <button className="btn btn-primary">Search</button>

            </div>
            <div>
              <div className="container">
                <div className="row">
                  {this.state.user.map(name => (
                    <ProfileCardComponent key={'author-' + name.user_id} user={name} />
                  ))}
                </div>
              </div>
            </div>

          </>
        )
      } else {
        return (
          <>
      <div className="container">
      <div className="row">
        <div className="card col-md-4 col-sm-2 col-xs-12">

          <div className="card hovercard">
            <div className="cardheader">

            </div>
            <div className="card-body">
            <div className="avatar">
              <img alt="" src="https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.minprint.co.uk%2Fwp-content%2Fuploads%2F2015%2F05%2Fmsn-people-person-profile-user-icon-icon-search-engine-16-180x180.png&f=1" />
            </div>
            <div className="info">
              <div className="title">
                <a target="_blank" href="">{user.firstName} {user.lastName}</a>
              </div>
              <div className="desc">Email: {user.email}</div>
              <div className="desc">User ID: {user.user_id}</div>
              <div className="desc">Tech geek</div>
            </div>
            <div className="bottom">
              <Link to="/reimbursement"> Reimbursements </Link>
            </div>
            </div>
          </div>
            </div>

        </div>

	</div>
        </>
        )
      }
    } else {
      return (
        <div>
          You shouldn't be here. How did you get here.
            </div>
      )
    }
  }
}
const mapStateToProps = (state: IState) => {
  return {
    currentUser: state.auth.currentUser,
    role: state.auth.role
  }
}

export default connect(mapStateToProps)(ProfileComponent)
