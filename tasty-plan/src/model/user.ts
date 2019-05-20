import { Grocery } from "./grocery";

export class User {
    userId: number;
    username: string;
    password: string;
    name: string;
    email: string;
    groceryList: Grocery;

    constructor(userId=0, username='', password='', name='', email='', groceryList=new Grocery()) {
        this.userId = userId;
        this.username = username;
        this.password = password;
        this.name = name;
        this.email = email;
        this.groceryList = groceryList;
        
    }

}