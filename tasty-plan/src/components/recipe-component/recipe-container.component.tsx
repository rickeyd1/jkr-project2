import React from "react";
import { IRecipeState, IState } from "../../reducers";
import { findAllRecipe } from "../../actions/recipe.action";
import { connect } from "react-redux";
import { RecipeCard } from "./recipe_card.component";

interface IRecipeCardProps {
    recipes: IRecipeState,
    findAllRecipe: () => void
}

class RecipeContainer extends React.Component<IRecipeCardProps> {
    
    componentDidMount = () => {
        this.props.findAllRecipe();
    }

    render() {

        const recipeList = this.props.recipes.recipeList;
        return (
            <>
                <div>
                    { recipeList &&
                        recipeList.map(currRecipe => (
                            <RecipeCard key={'recipe-' + currRecipe.recipeId} recipes={currRecipe}/>
                        ))
                    }
                </div>
            </>
            /* <div className="card text-white bg-success mb-3 card-recipe container">
                    <div className="card-header">{this.props.recipes.recipe.recip}</div>
                    <div className="card-body">
                            <h5 className="card-title">Success card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div> */

        );
    }
}

const mapStateToProps = (state: IState) => {
    return {
        recipes: state.recipe
    }
}

const mapDispatchToProps = {
    findAllRecipe: findAllRecipe
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipeContainer)