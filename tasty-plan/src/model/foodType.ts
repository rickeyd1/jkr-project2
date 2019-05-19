import { Unit } from "./unit";

export class FoodType {
    typeId: number;
    typeName: String;
    units: Unit

    constructor(typeId = 0, typeName = '', units = undefined) {
        this.typeId = typeId;
        this.typeName = typeName;
        this.units = units;
    }
}