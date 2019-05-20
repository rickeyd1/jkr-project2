import { Ingredient } from "./ingredient";

export class Grocery {
    groceryId: number;
    ingredient: Ingredient;

    constructor(groceryId=0, ingredient=new Ingredient()) {
        this.groceryId = groceryId;
        this.ingredient = ingredient;
        
    }
}