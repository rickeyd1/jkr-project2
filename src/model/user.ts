import { Role } from "./role";

export class User {
    user_id: number;
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    email: string;
    role?: Role;

    constructor(userId = 0, username = '', password = '', firstName = '', lastName = '', email = '', role = new Role()) {
        this.user_id = userId;
        this.username = username;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.role = role;
    }
}