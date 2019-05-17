import * as React from 'react';
import { Component } from 'react';
import { GroceryIngredients } from '../../model/grocery-ingredients';

export interface GroceryListItemComponentProps {
    groceryList: GroceryIngredients;
    amount: number;
    updateAmount: (event) => void;
}

export class GroceryListItemComponent extends React.Component<GroceryListItemComponentProps> {
    render() {
        const gList = this.props.groceryList;
        return (
            <>
                <li className="list-option" onClick={()=> console.log('I was clicked')}>
                    <div className="innerDiv">
                        <h6 className="list-font-size">{gList && gList.ingredient.name}</h6>
                        <div className="rightInnerDiv">
                            <h6 className="list-font-size">
                                {gList && `${gList.ingredient.foodType.units.unitName}`}
                            </h6>
                            <input className="ingredient-input" type="number" value={this.props.amount} onClick={(e) => e.stopPropagation()} onChange={(e) => this.props.updateAmount(e)} /> 
                        </div>
                    </div>
                </li>
            </>
        );
    }
}