export class Day {
    dayId : number;
    day :string;
    time : string;

    constructor(dayId = 0, day = '', time = '') {
        this.dayId = dayId;
        this.day = day;
        this.time = time
    }
}