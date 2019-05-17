import { Meal } from "./meal";
import { Timeoftable } from "./timeoftable";

export class Datemeal {
    dateId: number;
    date: string;
    meal?: Meal;
    timeoftable?: Timeoftable;

    constructor(dateId=0, date='', meal= new Meal(), timeoftable= new Timeoftable()) {
        this.dateId = dateId;
        this.date = date;
        this.meal = meal;
        this.timeoftable = timeoftable;
    }
}