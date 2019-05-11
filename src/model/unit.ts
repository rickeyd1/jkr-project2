export class Unit {
    mass: number;
    measure: string;
    amount: number;

    constructor(mass=0, measure='', amount=0) {
        this.mass = mass;
        this.measure = measure;
        this.amount = amount;
    }
}