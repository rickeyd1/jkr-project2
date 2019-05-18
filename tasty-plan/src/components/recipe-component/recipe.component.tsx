import React, { Component } from "react";
import { IState, IRecipeState } from "../../reducers";
import { recipeSet, setRecipeName, setCalories, setCategory } from "../../actions/recipe.action";
import { connect } from "react-redux";
import '../../includes/bootstrap';
import { Category } from "../../model/category";

interface IRecipeProps {
    recipe: IRecipeState,
    recipeSet: (recipeId: number, recipeName: string, totalcalorie: number, category: number, user: undefined, meal: undefined) => void,
    setCalories: (e) => void,
    setRecipeName: (e) => void,
    setCategory : (e) => void
}
class RecipeComponent extends Component<IRecipeProps> {
    
    SendNewRecipe = (e) => {
        e.preventDefault();
        this.props.recipeSet(0, this.props.recipe.recipeName, this.props.recipe.totalcalorie, this.props.recipe.category, undefined, undefined)
        console.log('Submitted');
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

                             <div>
                                <label htmlFor="exampleInputId">Category : </label>
                                <input type="text" className="form-control" id="exampleInputUserid" placeholder="Food Category"
                                    onChange={(event) => this.props.setCategory(event)} />
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
    setRecipeName: setRecipeName,
    setCategory : setCategory
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipeComponent)