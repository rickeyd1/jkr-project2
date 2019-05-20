import React from 'react';
import { Ingredient } from '../../model/ingredient';

interface IIngredientProps {
    ingredient: Ingredient
}

export class IngredientComponent extends React.Component<IIngredientProps> {

    render() {
        return (
            <option>{this.props.ingredient.name}</option>
        )
    }
}