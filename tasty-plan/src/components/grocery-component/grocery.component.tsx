import * as React from 'react';
import { Component } from 'react';

export interface GroceryComponentProps {
    
}
 
export class GroceryComponent extends React.Component<GroceryComponentProps> {
    
    render() {
        const stylesObj = {
            background: '#d1ffc2'
        };
        return (
            <div style={stylesObj} className="mainContainer">
                <div id="myDIV" className="header">
                <h2>Grocery List</h2>
                </div>

                <ul id="myUL" className="grocery-list">
                    <li className="list-option"><div className="innerDiv"><h6 className="list-font-size">Hit the gym</h6><h6 className="list-font-size">Hello</h6></div></li>
                    <li className="list-option"><div className="innerDiv"><h6 className="list-font-size">Pay bills</h6><h6 className="list-font-size">Hello</h6></div></li>
                    <li className="list-option"><div className="innerDiv"><h6 className="list-font-size">Meet George</h6><h6 className="list-font-size">Hello</h6></div></li>
                    <li className="list-option"><div className="innerDiv"><h6 className="list-font-size">Buy eggs</h6><h6 className="list-font-size">Hello</h6></div></li>
                    <li className="list-option"><div className="innerDiv"><h6 className="list-font-size">Read a book</h6><h6 className="list-font-size">Hello</h6></div></li>
                    <li className="list-option"><div className="innerDiv"><h6 className="list-font-size">Organize office</h6><h6 className="list-font-size">Hello</h6></div></li>
                </ul>
            </div>
        )
    }
}