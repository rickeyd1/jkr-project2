import { User } from "./user";

export class Meal {
    mealId : number;
    mealName : string;
    size : number;
    user : User;
    
    constructor(mealId = 0, mealName = '', size = 0, user = new User) {
        
        this.mealId = mealId;
        this.mealName = mealName;
        this.size = size;
        this.user = user;
    }
}