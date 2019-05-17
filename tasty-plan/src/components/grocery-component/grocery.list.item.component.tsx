import * as React from 'react';
import { Component } from 'react';

export interface GroceryListItemComponentProps {
    
}

export class GroceryListItemComponent extends React.Component<GroceryListItemComponentProps> {
    render() { 
        return (
            <>
                <li className="list-option">
                    <div className="innerDiv">
                        <h6 className="list-font-size">Hit the gym</h6>
                        <h6 className="list-font-size">Hello</h6>
                    </div>
                </li>
            </>
        );
    }
}