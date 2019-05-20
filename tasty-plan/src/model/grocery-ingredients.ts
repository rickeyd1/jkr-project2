import { Groceries } from "./grocery";
import { Ingredient } from "./ingredient";

export class GroceryIngredients {
    id: number;
    amount: number;
    groceryList: Groceries;
    ingredient: Ingredient;

    constructor(id = 0, amount = 0, groceryList = undefined, ingredient = undefined) {
        this.id = id;
        this.amount = amount;
        this.groceryList = groceryList;
        this.ingredient = ingredient;
    }
}