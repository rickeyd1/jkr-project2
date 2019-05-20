import * as React from 'react';
import { GroceryIngredients } from '../../model/grocery-ingredients';
import { User } from '../../model/user';

export interface GroceryListItemComponentProps {
    groceryList: GroceryIngredients;
    user: User;
    updateGroceryIngredient: (amount: number, id: number) => void;
    deleteGroceryIngredient: (id: number) => void;
    getUserGroceryList: (user: User) => void;
}

export interface GroceryListItemComponentState {
    amount: number;
}

export class GroceryListItemComponent extends React.Component<GroceryListItemComponentProps, GroceryListItemComponentState> {

    constructor(props: any) {
        super(props);
        this.state = {
            amount: 0
        }
    }

    componentDidMount = () => {
        this.props.getUserGroceryList(this.props.user);
        this.setState({
            amount: this.props.groceryList.amount
        });
    }

    updateAmount = (event) => {
        this.setState({
            amount: event.target.value
        });
    }

    updateGroceryList = (user: User, amount: number, id: number) => {
        if (amount > 0) {
            this.props.updateGroceryIngredient(amount, id);
        } else {
            this.props.deleteGroceryIngredient(id);
        }
    }

    render() {
        const gList = this.props.groceryList;
        return (
            <>
                <li className="list-option" onClick={() => this.updateGroceryList(this.props.user, this.state.amount, gList.id)}>
                    <div className="innerDiv">
                        <h6 className="list-font-size">{gList && gList.ingredient.name}</h6>
                        <div className="rightInnerDiv">
                            <h6 className="list-font-size">
                                {gList && `${gList.ingredient.foodType.units.unitName}`}
                            </h6>
                            <input className="ingredient-input" type="number" value={this.state.amount} onClick={(e) => e.stopPropagation()} onChange={(e) => this.updateAmount(e)} /> 
                        </div>
                    </div>
                </li>
            </>
        );
    }
}