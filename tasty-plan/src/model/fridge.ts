import { User } from '../model/user';
import { Groceries } from './grocery';

export class Fridge {
    fridgeId: number;
    userId: User;
    groceryList: Groceries;

    constructor(fridgeId = 0, userId = undefined, groceryList = undefined) {
        this.fridgeId = fridgeId;
        this.userId = userId;
        this.groceryList = groceryList;
    }
    
}