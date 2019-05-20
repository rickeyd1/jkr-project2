import React from "react";
import { IRecipeState, IState, IGroceryState, ILoginState } from "../../reducers";
import { findAllRecipe, findUserRecipes, findRecipeIngredients } from "../../actions/recipe.action";
import { connect } from "react-redux";
import { RecipeCard } from "./recipe_card.component";
import { User } from "../../model/user";
import { Recipe } from "../../model/recipe";

interface IRecipeCardProps {
    recipeList: IRecipeState,
    findAllRecipe: () => void
    findUserRecipes: (user: User) => void
    findRecipeIngredients: (recipe: Recipe) => void
    user: ILoginState;
    getUserGroceryList: (user: User) => void;
}

interface IRecState {
    someNum: number
}

class RecipeContainer extends React.Component<IRecipeCardProps, IRecState> {
    
    constructor(props:IRecipeCardProps) {
        super(props);
        this.state = {
            someNum: 0
        }

    }

    componentDidMount = () => {
        this.props.findUserRecipes(this.props.user.user);
    }

    createUnique = (num: number) => {
        const id = this.state && this.state.someNum + num;
        this.setState({
            someNum: id
        })
        return id;
    }

    render() {

        const recipeList = this.props.recipeList && this.props.recipeList.recipeList;
        const stylesObj = {
            background: '#9ae681'
        };
        return (
            <>
                <div style={stylesObj}>
                    { recipeList &&
                        recipeList.map(currRecipe => (
                            <RecipeCard key={'recipe-' + currRecipe.recipeId} recipes={currRecipe} user={this.props.user.user}/>
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
        recipeList: state.recipe,
        user: state.login
    }
}

const mapDispatchToProps = {
    findAllRecipe: findAllRecipe,
    findUserRecipes: findUserRecipes,
    findRecipeIngredients: findRecipeIngredients
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipeContainer)