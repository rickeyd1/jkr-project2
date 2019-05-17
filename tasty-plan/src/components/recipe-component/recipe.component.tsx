import React, { Component } from "react";
import { IState, IRecipeState } from "../../reducers";
import { recipeSet, setRecipeName, setCalories } from "../../actions/recipe.action";
import { connect } from "react-redux";
import '../../includes/bootstrap';

interface IRecipeProps {
    recipe: IRecipeState,
    recipeSet: (recipeId: number, recipeName: string, totalcalorie: number, category: undefined, user: undefined, meal: undefined) => void,
    setCalories: (e) => void,
    setRecipeName: (e) => void

}
class RecipeComponent extends Component<IRecipeProps> {
    //Grabbing current Recipe from user session
    componentDidMount = async () => {

    }

    //Storing the new Recipe
    SendNewRecipe = (e) => {
        e.preventDefault();
        this.props.recipeSet(0, this.props.recipe.recipeName, this.props.recipe.totalcalorie, undefined, undefined, undefined)
        console.log('Submitted');
    }
    //Adding Ingreident to Recipe
    addIngredient = (e) => {

    }

    //Removing Ingredient from Recipe
    removeIngredient = (e) => {

    }


    render() {
        const { recipeName, totalcalorie } = this.props.recipe;
        return (
            <div className="container">
                <div>
                    <button type="button" className="btn btn-info">Find All Recipes</button>
                </div>
                <div>
                    <form onSubmit={(e) => this.SendNewRecipe(e)}>
                        <div className="form-group">
                            <div>
                                <label htmlFor="exampleInputId">Recipe Name : </label>
                                <input type="text" className="form-control" id="exampleInputUserid" placeholder="Recipe Name"
                                    value={recipeName} onChange={(event) => this.props.setRecipeName(event)} />
                            </div>
                            <div>
                                <label htmlFor="exampleInputId">Calories : </label>
                                <input type="text" className="form-control" id="exampleInputUserid" placeholder="Calories"
                                    value={totalcalorie} onChange={(event) => this.props.setCalories(event)} />
                            </div>
                        </div>

                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state: IState) => {
    return {
        recipe: state.recipe
    }
}

const mapDispatchToProps = {
    recipeSet: recipeSet,
    setCalories: setCalories,
    setRecipeName: setRecipeName
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipeComponent)