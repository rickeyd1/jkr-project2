
import * as React from 'react';
import { Recipe } from '../../model/recipe';
import { Ingredients } from '../../model/ingredient';
import { RecipeIngredient } from '../../model/recipe_ingredient';
import { IngredientFoodTypeComponent } from './ingredient-foodtype.component';
import { User } from '../../model/user';

interface RecipeProps {
    recipes : Recipe;
    user: User
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

    buttonClicked = async (listing:RecipeIngredient[]) => {
        let ingListing = listing;
        const resp = await fetch('http://localhost:8080/groceries/user/' + this.props.user.userId, {
            credentials: 'include'
        });
        const body = await resp.json();

        try {
            for(let i=0; i < ingListing.length; i++) {

                await fetch('http://localhost:8080/grocery/ingredients', {
                    method: 'POST',
                    credentials: 'include',
                    body: JSON.stringify({amount: ingListing[i].amount,
                        groceryList: {
                            groceryInt: body[0].groceryInt
                        },
                        ingredient: {
                            ingredientsId: ingListing[i].ingredient.ingredientsId
                        }}),
                    headers: {
                        'content-type': 'application/json'
                    }
                });
            }
        } catch (err) {
            console.log(err);
        }
    }

    render() {
        const listing = this.state && this.state.ingredientList;
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
                   <button className= "btn btn-primary" onClick = {() => this.buttonClicked(listing)}>Add Ingredients to Grocery List</button>
               </div>
               </div>
           </div>
            </>
        );
    }
}