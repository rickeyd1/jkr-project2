import { User } from "./user";

export class Groceries {
    groceryInt: number;
    groceryUser: User;
    

    constructor(groceryInt= 0, groceryUser= undefined) {
        this.groceryInt = groceryInt;
        this.groceryUser = groceryUser;
    }
    
}