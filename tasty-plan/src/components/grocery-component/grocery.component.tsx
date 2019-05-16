import * as React from 'react';
import { Component } from 'react';

export interface GroceryComponentProps {
    
}
 
export class GroceryComponent extends React.Component<GroceryComponentProps> {
    render() {
        return (
            <div>
                {"Groceries go here! >:("}
            </div>
        )
    }
}