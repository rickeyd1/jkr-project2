export class Unit {
    unitId: number;
    unitName: string;

    constructor(unitId = 0, unitName = '') {
        this.unitId = unitId;
        this.unitName = unitName;
    }
}