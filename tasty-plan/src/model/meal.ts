import { User } from '../model/user';

export class Meal {
    mealId: number;
    mealName: String;
    size: number;
    user: User;

    constructor(mealId = 0, mealName = '', size = 0, user = undefined) {
        this.mealId = mealId;
        this.mealName = mealName;
        this.size = size;
        this.user = user;
    }
    
}