import { Ingredients } from "../../model/ingredient";
import React from "react";
import { FoodType } from "../../model/foodType";
import { RecipeIngredient } from "../../model/recipe_ingredient";

interface IIngredientProps {
    ingredientName: Ingredients;
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