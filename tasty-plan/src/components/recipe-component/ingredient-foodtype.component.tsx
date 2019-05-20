import { Ingredient } from "../../model/ingredient";
import React from "react";

interface IIngredientProps {
    ingredientName: Ingredient;
    ingredientAmount: number;
}

export class IngredientFoodTypeComponent extends React.Component<IIngredientProps> {

    render() {
        return (
            <div>
                <h4>{this.props.ingredientName.name}</h4>
                <h6>{this.props.ingredientAmount}</h6>
            </div>
        );
    }
}