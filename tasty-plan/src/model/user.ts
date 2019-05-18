import { Groceries } from "./grocery";

export class User {
    userId: number;
    name: String;
    email: String;
    username: String;
    password: String;

    constructor(userId=0, name='', email='', username='', password='') {
        this.userId = userId;
        this.name = name;
        this.email = email;
        this.username = username;
        this.password = password;
        
    }

}