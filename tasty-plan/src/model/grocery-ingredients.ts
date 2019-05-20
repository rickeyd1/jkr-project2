import { Groceries } from "./grocery";
import { Ingredients } from "./ingredient";

export class GroceryIngredients {
    id: number;
    amount: number;
    groceryList: Groceries;
    ingredient: Ingredients;

    constructor(id = 0, amount = 0, groceryList = undefined, ingredient = undefined) {
        this.id = id;
        this.amount = amount;
        this.groceryList = groceryList;
        this.ingredient = ingredient;
    }
}