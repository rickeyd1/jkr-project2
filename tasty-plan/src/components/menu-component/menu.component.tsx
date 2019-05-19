import * as React from 'react';
import { Component } from 'react';
import { Link } from 'react-router-dom';
import { IState, ILoginState } from '../../reducers';
import { User } from '../../model/user';

export interface MenuComponentProps {
    handleMouseDown: (e) => void;
    user2: User;
    menuVisibility: boolean;
}

// This class is what controls the options for our menu aka the Link section
class MenuComponent extends React.PureComponent<MenuComponentProps> {
    render() {
        let visibility = "hide";

        if (this.props.menuVisibility) {
            visibility = "show";
        }
        const user2 = this.props.user2;
        return (
            <div id="flyoutMenu" onMouseDown={(e) => {this.props.handleMouseDown(e)}} 
            className={visibility}>
                <Link to="/profile" className="unset-anchor"><h2>Profile</h2></Link>
                <div className="card"></div>
                <Link to="/login" className="unset-anchor"><h2>
                    { user2 
                    ? <><div className="card"></div>
                    <Link to="/login" className="unset-anchor"><h2>Sign-out</h2></Link>
                    </>:
                    <><div className="card"></div>
                    <Link to="/login" className="unset-anchor"><h2>Sign-in</h2></Link>
                    </>
                    }
                </h2></Link>
                <div className="card"></div>
                <Link to="/recipe" className="unset-anchor"><h2>Recipes</h2></Link>
                <div className="card"></div>
                <Link to="/grocery" className="unset-anchor"><h2>Grocery List</h2></Link>
            </div>
        );
    }
}
 
export default MenuComponent;