export class TimeOfTable {
    timeId: number;
    day: String;
    timeName: String;

    constructor(timeId = 0, day = '', timeName = '') {
        this.timeId = timeId;
        this.day = day;
        this.timeName = timeName;
    }
    
}