import React from 'react';
import { Authorinfo } from '../../model/reimbursement';
import { ReimbursementCardComponent } from './reimbursement-card.component';
import { connect } from 'react-redux';
import { IState } from '../../reducers';
import { User } from '../../model/user';
import { Role } from '../../model/role';
import { SingleReimbursementCardComponent } from './single-reimbursement-card.component';
import { Link } from 'react-router-dom';

interface IReimbursementState {
  author: Authorinfo[];
  reim: Authorinfo[];
  holderid: number;
}

interface IReimbursementProp {
  currentUser: User,
  role: Role
}
export class ReimbursementComponent extends React.Component<IReimbursementProp, IReimbursementState> {

  constructor(props) {
    super(props)
    this.state = {
      author: [],
      reim: [],
      holderid: 0
    };
  }

  componentDidMount = async () => {
    try {
    const resp = await fetch('http://localhost:8081/reimbursements/author',
      {
        method: 'GET',
        credentials: 'include'
      });
    const body = await resp.json();
    await this.setState({
      author: body
    });
  } catch {
    const resp2 = await fetch('http://localhost:8081/reimbursements/author/userId/' + this.props.currentUser.user_id, {
      method: 'GET',
      credentials: 'include'
    })
    console.table(resp2);
    const body2 = await resp2.json();
    await this.setState({
      reim: body2
    })
  }
  }
  SortbyStatus = (e) => {

  }

  updateholderid = (e) => {
    this.setState({
      holderid: e.target.value
    });
  }
  
  render() {
    const role = this.props.role;
    if (undefined === role) {
      return (
        <div>
          You have no profile
        </div>
      )
    } else {
      if (role.role === 'Admin' || role.role === 'Finance Manager') {
        return (
          <div className="container">
          <input className="Sortfunc" placeholder="Sort by ID" onChange={this.updateholderid}></input>
          <button className="btn btn-primary">Status</button>
          <button className="btn btn-secondary">Type</button>
            <div className="row">
            <div className="sortby">
            </div>
              {this.state.author.map(name => (
                <ReimbursementCardComponent key={'author-' + name.reimbursement_id} author={name}/>
              ))}
            </div>
          </div>
        );
      } else {
        if (typeof(this.state.reim) === 'object') {
        return (
          <div className="model-content">
            <h1> Hello Here is your reimbursements!</h1>
            <div>
              {this.state.reim.map(name => (
                <SingleReimbursementCardComponent key={'author-' + name.reimbursement_id} reim={name}/>
              ))}
            </div>
            </div>
        )
        } else {
          return (
            <div className="model-content">
              <h1> You don't have any claims!</h1>
              <div>
                Do you need a claim. Click <Link to="/claims/new" className="redirectclaim">HERE</Link> to add one.
              </div>
              </div>
          )
        }

      }
    }
  }
}

const mapStatetoProps = (state: IState) => {
  return {
    currentUser: state.auth.currentUser,
    role: state.auth.role

  }
}

export default connect(mapStatetoProps)(ReimbursementComponent);
