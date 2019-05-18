
import * as React from 'react';
import { Recipe } from '../../model/recipe';

export interface RecipeProps {
    recipes : Recipe;
}

export class RecipeCard extends React.Component<RecipeProps> {

    buttonClicked = (e) => {

    }

    render() {
        return (
            <>
                <div className="card-header card-tab card-header-shadow">{this.props.recipes.recipeName}</div>
                <div className="card text-white bg-success">
                    <div className="card-body">
                        <h6 className="card-text">Total Calories : {this.props.recipes.calories}</h6>
                        <h6 className="card-text">User : {this.props.recipes.user && this.props.recipes.user.name} </h6>
                    </div>
                    <button onClick = {(e) => this.buttonClicked(e)}> Edit </button>
                </div>  
            </>
        );
    }
}