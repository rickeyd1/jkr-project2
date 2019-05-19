import React, { Component } from "react";
import { IState, IIngredientState, IRecipeState } from "../../reducers";
import { recipeSet, setRecipeName, setCalories, setCategory, updateAmountOne, updateAmountTwo, updateAmountThree, updateIngrOne, updateIngrTwo, updateIngrThree, createRecipeIngredient } from "../../actions/recipe.action";
import { connect } from "react-redux";
import '../../includes/bootstrap';
import { findIngredientByType } from "../../actions/ingredient.action";
import { AddIngredientComponent } from "../ingredient-component/add-ingredients.component";
import { Recipe } from "../../model/recipe";

interface IRecipeProps {
    recipe: IRecipeState,
    ingredient: IIngredientState,
    recipeSet: (recipeId: number, recipeName: string, totalcalorie: number, category: number, user: undefined, meal: undefined) => void,
    setCalories: (e) => void,
    setRecipeName: (e) => void,
    setCategory: (e) => void,
    findIngredientByType: (typeId: number) => void
    updateAmountOne: (event) => void,
    updateAmountTwo: (event) => void,
    updateAmountThree: (event) => void,
    updateIngrOne: (event) => void,
    updateIngrTwo: (event) => void,
    updateIngrThree: (event) => void,
    createRecipeIngredient: (newRecipe: Recipe, ingIdOne: number, ingIdTwo: number, ingIdThree: number, 
        amountOne: number, amountTwo: number, amountThree: number) => void
}

interface IRecipeContainerState {
    addIngredientArr: any[];
    addBool: boolean,
    someNum: number
}

class RecipeComponent extends Component<IRecipeProps, IRecipeContainerState> {
    constructor(props: any) {
        super(props);
        this.state = {
            addIngredientArr: [],
            addBool: false,
            someNum: 0
        }
    }

    addIngredientMenu = (e) => {
        e.preventDefault();
        let newArr = this.state.addIngredientArr.slice();
        newArr.push(<AddIngredientComponent key={'new ingredient-' + this.createUnique(1)} category={this.props.recipe.category} recipeName={this.props.recipe.recipeName} totalcalorie={this.props.recipe.totalcalorie}
            findIngredientByType={this.props.findIngredientByType} recipeSet={this.props.recipeSet} ingredientList={this.props.ingredient.ingredientList} />);
        this.setState({
            addIngredientArr: newArr,
            addBool: true
        })
    }

    createUnique = (num: number) => {
        const id = this.state && this.state.someNum + num;
        this.setState({
            someNum: id
        })
        return id;
    }

    handleChange = (e) => {
        console.log(e.target.value);
        let typeName = e.target.value;
        let typeId = 0;
        switch (typeName) {
            case 'Dairy':
                typeId = 1;
                break;
            case 'Meat':
                typeId = 2;
                break;
            case 'Vegetable':
                typeId = 3;
                break;
            case 'Breads':
                typeId = 4;
                break;
            case 'Cheese':
                typeId = 5;
                break;
            case 'Fruits':
                typeId = 6;
                break;
            default:
                break;
        }
        console.log(typeId);
        this.props.findIngredientByType(typeId);
    }

    SendNewRecipe = (e) => {
        e.preventDefault();
        this.props.recipeSet(0, this.props.recipe.recipeName, this.props.recipe.totalcalorie, this.props.recipe.category, undefined, undefined)
        this.props.createRecipeIngredient(this.props.recipe.newRecipe, this.props.recipe.ingred1, this.props.recipe.ingred2, this.props.recipe.ingred3, this.props.recipe.amount1, this.props.recipe.amount2, this.props.recipe.amount3);
        console.log('Submitted');
    }

    addIngredient = (e) => {
        e.preventDefault();
    }

    render() {
        const { recipeName, totalcalorie } = this.props.recipe;
        const ingredientList = this.props.ingredient && this.props.ingredient.ingredientList;
        const stylesObj = {
            background: '#9ae681'
        };

        return (
            <div style={stylesObj}>
                <div className="row">
                    <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                        <div className="card card-signin my-5">
                            <div className="card-body">
                                <h5 className="card-title text-center">Create new Recipe</h5>
                                <form className="form-signin" >
                                    <div className="form-label-group">
                                        <input type="text" id="inputRecipeName" className="form-control" placeholder="Teriyaki chicken"
                                            required value={recipeName} onChange={(event) => this.props.setRecipeName(event)} />
                                        <label htmlFor="inputRecipeName">Recipe Name</label>
                                    </div>

                                    <div className="form-label-group">
                                        <input type="text" id="calories" className="form-control" placeholder="Calories"
                                            value={totalcalorie} onChange={(event) => this.props.setCalories(event)} />
                                        <label htmlFor="calories">Calories</label>
                                    </div>

                                    <div className="form-label-group">
                                        <input type="text" id="category" placeholder="Food Category"
                                            onChange={(event) => this.props.setCategory(event)} />
                                        <label htmlFor="category">Category</label>
                                    </div>

                                    <div className="form-label-group">
                                        <h4> Add Ingredients :</h4>
                                    </div>
                                    <div className="form-label-group">
                                        <input type="number" id="ingredient1" className="form-control" placeholder="Food Category"
                                            onChange={(event) => this.props.updateIngrOne(event)} value={this.props.recipe.ingred1}/>
                                        <label htmlFor="ingredient1">Ingredient 1</label>
                                    </div>
                                    <div className="form-label-group">
                                        <input type="number" id="amount1" className="form-control" placeholder="Food Category"
                                            onChange={(event) => this.props.updateAmountOne(event)} value={this.props.recipe.amount1}/>
                                        <label htmlFor="amount1">Amount 1:</label>
                                    </div>

                                    <div className="card"></div>
                                    <br />
                                    <div className="form-label-group">
                                        <input type="number" id="ingredient2" className="form-control" placeholder="Food Category"
                                            onChange={(event) => this.props.updateIngrTwo(event)} value={this.props.recipe.ingred2} />
                                        <label htmlFor="ingredient2">Ingredient 2</label>
                                    </div>
                                    <div className="form-label-group">
                                        <input type="number" id="amount2" className="form-control" placeholder="Food Category"
                                            onChange={(event) => this.props.updateAmountTwo(event)} value={this.props.recipe.amount2} />
                                        <label htmlFor="amount2">Amount 2:</label>
                                    </div>

                                    <div className="card"></div>
                                    <br />
                                    <div className="form-label-group">
                                        <input type="number" id="ingredient3" className="form-control" placeholder="Food Category"
                                            onChange={(event) => this.props.updateIngrThree(event)} value={this.props.recipe.ingred3}/>
                                        <label htmlFor="ingredient3">Ingredient 3</label>
                                    </div>
                                    <div className="form-label-group">
                                        <input type="number" id="amount3" className="form-control" placeholder="Food Category"
                                            onChange={(event) => this.props.updateAmountThree(event)} value={this.props.recipe.amount3}/>
                                        <label htmlFor="amount3">Amount 3:</label>
                                    </div>
                                    
                                    <button onClick={(e) => this.SendNewRecipe(e)} className="btn btn-lg btn-primary text-uppercase submit">Submit</button>
                                </form>
                                <br />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state: IState) => {
    return {
        recipe: state.recipe,
        ingredient: state.ingredient
    }
}

const mapDispatchToProps = {
    recipeSet: recipeSet,
    setCalories: setCalories,
    setRecipeName: setRecipeName,
    setCategory: setCategory,
    findIngredientByType: findIngredientByType,
    updateAmountOne: updateAmountOne,
    updateAmountTwo: updateAmountTwo,
    updateAmountThree: updateAmountThree,
    updateIngrOne: updateIngrOne,
    updateIngrTwo: updateIngrTwo,
    updateIngrThree: updateIngrThree,
    createRecipeIngredient: createRecipeIngredient
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipeComponent)