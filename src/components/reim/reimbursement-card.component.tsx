import React from 'react';
import { Authorinfo } from '../../model/reimbursement';

interface IReimCardProps {
  author: Authorinfo;
}

export class ReimbursementCardComponent extends React.PureComponent<IReimCardProps> {


  deleteUpdate = async (e) => {
    e.preventDefault();
    try {
        await fetch('http://localhost:8081/reimbursements/' + this.props.author.reimbursement_id, {
          method: 'DELETE',
          credentials: 'include'
        })
    } catch (err) {
      console.trace(err);
    }
  }

  render() {
    const author = this.props.author;
    return (
      <div className="card col-sm-3 col-sm-2 col-xs-12">
        <img src={author.image}
          className="card-img-top"
          alt="..." />
        <div className="card-body">
          <h5 className="card-title">{author.reimbursement_id}</h5>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Author: {author.full_name}</li>
          <li className="list-group-item">Amount: ${author.amount}</li>
          <li className="list-group-item">Date Sb: {author.date_submitted}</li>
          <li className="list-group-item">Date Rv: {author.date_resolved}</li>
          <li className="list-group-item">Desc: {author.description}</li>
          <li className="list-group-item">Resolver: {author.resolver_name}</li>
          <li className="list-group-item">Status: {author.status}</li>
          <li className="list-group-item">Type: {author.type}</li>
          <li className="list-group-item"><button className="btn btn-danger" onClick={this.deleteUpdate}>Delete</button>
          </li>
        </ul>
      </div>
    )
  }
}