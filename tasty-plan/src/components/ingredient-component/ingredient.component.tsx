import React from 'react';
import { Ingredients } from '../../model/ingredient';

interface IIngredientProps {
    ingredient: Ingredients
}

export class IngredientComponent extends React.Component<IIngredientProps> {

    render() {
        return (
            <option>{this.props.ingredient.name}</option>
        )
    }
}