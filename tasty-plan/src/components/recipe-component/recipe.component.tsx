import React, { Component } from "react";
import { Ingredient } from "../../model/ingredient";
import { IState } from "../../reducers";
import { recipeSet } from "../../actions/recipe.action";
import { connect } from "react-redux";
import '../../includes/bootstrap';

interface IRecipeState {
    ingredient: Ingredient[];
    totalCalories: number;
}

interface IRecipeProps {
    ingredient: Ingredient
    totalCalories: number

}
export class RecipeComponent extends Component<IRecipeProps, IRecipeState> {
    constructor(props) {
        super(props)
        this.state = {
            ingredient: [],
            totalCalories: 0
        }
    }
    //Grabbing current Recipe from user session
    componentDidMount = async () => {

    }

    //Storing the new Recipe
    SendNewRecipe = (e) => {

    }
    //Adding Ingreident to Recipe
    addIngredient = (e) => {

    }

    //Removing Ingredient from Recipe
    removeIngredient = (e) => {

    }


    render() {
        return (
            <div>
                {"Karmanya's branch"}
            </div>
        )
    }
}

const mapStateToProps = (state: IState) => {
    return {
        recipe: state.recipe.recipe
    }
}

const mapDispatchToProps = {
    recipe: recipeSet
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipeComponent)