import * as React from 'react';
import { Component } from 'react';
import { Ingredient } from '../../model/ingredient';
import { IngredientComponent } from './ingredient.component';

interface IAddIngredientProps {
    category: number,
    recipeName: string,
    totalcalorie: number,
    findIngredientByType: (typeId: number) => void,
    recipeSet: (recipeId: number, recipeName: string, totalcalorie: number, category: number, user: undefined, meal: undefined) => void
    ingredientList: Ingredient[]
}


export class AddIngredientComponent extends React.Component<IAddIngredientProps> {

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
        this.props.recipeSet(0, this.props.recipeName, this.props.totalcalorie, this.props.category, undefined, undefined)
        console.log('Submitted');
    }


    render() {
        const {ingredientList} = this.props;
        return (
            <div className="spaced-selection">
                <div className="form-label-group">
                    <select className="rounded-drop spacing" onChange={(e) => this.handleChange(e)}>
                        <option> Dairy </option>
                        <option> Breads </option>
                        <option> Meat </option>
                        <option> Vegetable </option>
                        <option> Fruits </option>
                        <option> Cheese </option>
                    </select>
                </div>
                <div className="form-label-group">

                    <select className="rounded-drop  spacing-button">
                        {
                            ingredientList &&
                            ingredientList.map(currIngredient => (
                                <IngredientComponent key={'ingredient-' + currIngredient.ingredientsId} ingredient={currIngredient} />
                            ))
                        }
                    </select>
                </div>
            </div>
        )
    }
}