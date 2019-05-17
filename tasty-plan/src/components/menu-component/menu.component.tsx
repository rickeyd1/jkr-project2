import * as React from 'react';
import { Component } from 'react';
import { Link } from 'react-router-dom';

export interface MenuComponentProps {
    handleMouseDown: (e) => void;
    menuVisibility: boolean;
}

// This class is what controls the options for our menu aka the Link section
class MenuComponent extends React.Component<MenuComponentProps> {
    render() {
        let visibility = "hide";

        if (this.props.menuVisibility) {
            visibility = "show";
        }

        return (
            <div id="flyoutMenu" onMouseDown={(e) => {this.props.handleMouseDown(e)}} 
            className={visibility}>
                <Link to="/profile" className="unset-anchor"><h2>Profile</h2></Link>
                <div className="card"></div>
                <Link to="/login" className="unset-anchor"><h2>Sign-In</h2></Link>
                <div className="card"></div>
                <Link to="/signup" className="unset-anchor"><h2>Sign-Up</h2></Link>
                <div className="card"></div>
                <Link to="/recipe" className="unset-anchor"><h2>Recipes</h2></Link>
                <div className="card"></div>
                <Link to="/grocery" className="unset-anchor"><h2>Grocery List</h2></Link>
            </div>
        );
    }
}
 
export default MenuComponent;