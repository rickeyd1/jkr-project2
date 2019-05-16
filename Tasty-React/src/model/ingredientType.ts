import { Unit } from "./unit";

export class IngredientType {

    ingredientTypeId: number;
    category: string;
    unit: Unit;

    constructor(ingredientTypeId=0, category='', unit=new Unit) {
        this.ingredientTypeId = ingredientTypeId;
        this.category = category;
        this.unit = unit;
    }
}