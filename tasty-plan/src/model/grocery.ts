import { User } from "./user";

export class Groceries {
    groceryInt: number;
    groceryUser: User;
    

<<<<<<< HEAD
    constructor(groceryId=0, ingredient=new Ingredient()) {
        this.groceryId = groceryId;
        this.ingredient = ingredient;
        
=======
    constructor(groceryInt= 0, groceryUser= undefined) {
        this.groceryInt = groceryInt;
        this.groceryUser = groceryUser;
>>>>>>> grocery-list
    }
    
}