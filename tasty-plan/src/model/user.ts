import { Groceries } from "./grocery";

export class User {
    userId: number;
    name: String;
    email: String;
    username: String;
    password: String;
    groceryId: Groceries;

    constructor(userId=0, name='', email='', username='', password='', groceryId: undefined) {
        this.userId = userId;
        this.username = username;
        this.password = password;
        this.name = name;
        this.email = email;
        this.groceryId = groceryId;
        
    }

}