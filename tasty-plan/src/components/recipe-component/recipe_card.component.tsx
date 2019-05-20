import * as React from 'react'
import { Recipe } from '../../model/recipe';
import { RecipeIngredient } from '../../model/recipe_ingredient';
import { IngredientFoodTypeComponent } from './ingredient-foodtype.component';

interface RecipeProps {
    recipes : Recipe;
}

interface IRecipeCardState {
    ingredientList: RecipeIngredient[];
}

export class RecipeCard extends React.Component<RecipeProps, IRecipeCardState> {

    constructor(props:RecipeProps) {
        super(props)
        this.state = {
            ingredientList: []
        }
    }

    componentDidMount = async() => {
        try{
            const resp = await fetch('http://localhost:8080/recipe-ingredient/recipe/' + this.props.recipes.recipeId, {
            credentials: 'include'
            })
            const body = await resp.json();
            this.setState({
                ingredientList: body
            });

        } catch (err) {
            console.log(err);
        }
    }

    buttonClicked = (e) => {
        e.preventDefault();
        
    }

    render() {
        const listing = this.state && this.state.ingredientList;
        console.log(listing);
        return (
            <>
            <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
               <div className="card card-signin my-5">
               <div className="card-body">
                   <h5 className="card-title text-center">{this.props.recipes.recipeName}</h5>
                   <h5 className="card-title">Total Calories : {this.props.recipes.calories}</h5>
                   <p className="card-text"></p>
                   {
                       this.state.ingredientList.map(ingre => (
                        <IngredientFoodTypeComponent key={'ingredient-' + ingre.id} ingredientName={ingre.ingredient} ingredientAmount={ingre.amount} />
                        ))
                   }
                   <button className= "btn btn-primary" onClick = {(e) =>this.buttonClicked(e)}>Edit</button>
               </div>
               </div>
           </div>
            </>
        );
    }
}