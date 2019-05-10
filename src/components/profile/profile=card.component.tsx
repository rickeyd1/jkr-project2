import React from 'react';
import { User } from '../../model/user';
import { Link } from 'react-router-dom';

interface IProfileCardProps {
  user: User
}

export class ProfileCardComponent extends React.PureComponent<IProfileCardProps> {


  deleteUpdate = async (e) => {
    e.preventDefault();
    try {
        await fetch('http://localhost:8081/user/' + this.props.user.user_id, {
          method: 'DELETE',
          credentials: 'include'
        })
    } catch (err) {
      console.trace(err);
    }
  }

  render() {
      const user = this.props.user;
    return (
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
            <button className="btn btn-danger" onClick={this.deleteUpdate}>Delete</button>
            </div>
          </div>
            </div>

        </div>

	</div>
    )
  }
}