
import * as React from 'react';
import { Recipe } from '../../model/recipe';

export interface RecipeProps {
    recipes : Recipe;
}

export class RecipeCard extends React.Component<RecipeProps> {
    render() {
        return (
            <div className="card text-white bg-success mb-3 card-recipe container">
                <div className="card-header">{this.props.recipes.recipeName}</div>
                <div className="card-body">
                    <h5 className="card-title">Success card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
        );
    }
}