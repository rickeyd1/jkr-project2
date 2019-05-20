import React from 'react';
import { Link } from 'react-router-dom';

export class NavComponent extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-toggleable-md navbar-expand-lg navbar-light bg-light display-front nav-pad">
        <div className="navbar-header c-pointer shift-left">
        </div>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className=" navbar-collapse" id="navbarsExample04">
          <ul className="navbar-nav ml-auto margin-nav">
            <li className="nav-item active">
              <Link to="/sign-in" className="unset-anchor nav-link">Sign In</Link>
            </li>
            <li className="nav-item active dropdown">
              <div className="nav-link dropdown-toggle pointer" id="examples-dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Recipes</div>
              <div className="dropdown-menu" aria-labelledby="examples-dropdown">
                <div className="dropdown-item"><Link to="/allRecipes" className="unset-anchor nav-link active">All Recipes</Link></div>
                <div className="dropdown-item"><Link to="/recipe" className="unset-anchor nav-link active">Create Recipe</Link></div>
              </div>
            </li>
            <li className="nav-item active dropdown">
              <div className="nav-link dropdown-toggle pointer" id="examples-dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Reimbursements</div>
              <div className="dropdown-menu" aria-labelledby="examples-dropdown">
                <div className="dropdown-item"><Link to="/reimbursementByAuthor" className="unset-anchor nav-link active">Find By User Id</Link></div>
                <div className="dropdown-item"><Link to="/reimbursementByStatus" className="unset-anchor nav-link active">Find By Status Id</Link></div>
                <div className="dropdown-item"><Link to="/submitReimbursement" className="unset-anchor nav-link active">Submit Reimbursement</Link></div>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}