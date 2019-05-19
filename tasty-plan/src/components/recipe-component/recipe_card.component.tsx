
import * as React from 'react';
import { Recipe } from '../../model/recipe';

interface RecipeProps {
    recipes : Recipe;
}

export class RecipeCard extends React.Component<RecipeProps> {

    buttonClicked = (e) => {
        e.preventDefault();
        
    }

    render() {
        return (
            <>
            <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
               <div className="card card-signin my-5">
               <div className="card-body">
                   <h5 className="card-title text-center">{this.props.recipes.recipeName}</h5>
                   <h5 className="card-title">Total Calories : {this.props.recipes.calories}</h5>
                   <p className="card-text"></p>
                   <button className= "btn btn-primary" onClick = {(e) =>this.buttonClicked(e)}>Edit</button>
               </div>
               </div>
           </div>
            </>
        );
    }
}