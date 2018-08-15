class LineManager {
    constructor(stops) {
        this.stops = stops;
        this.delay = 0;
        this.currentStop = 0;
        this.duration = 0;
    }

    get atDepot() {
        return this.currentStop === this._stops.length - 1;
    }

    get nextStopName() {
        if(this.atDepot){
            return 'At depot.';
        }
        return this._stops[this.currentStop + 1].name;
    }

    get currentDelay() {
        return this.delay;
    }

    set stops(value){
        for (let i = 0; i < value.length; i++) {
            if(typeof value[i].name !== 'string' || typeof value[i].timeToNext !== 'number' ||
                value[i].name === '' || value[i].timeToNext < 0){
                throw new Error('Invalid data');
            }
        }
        this._stops = value;
    }

    arriveAtStop(minutes) {
        if(minutes < 0 || this.atDepot){
            throw new Error('Invalid data');
        }
        this.duration += minutes;
        this.delay += minutes - this._stops[this.currentStop].timeToNext;
        this.currentStop++;
        return !this.atDepot;
    }

    toString() {
        let currentStop = '';
        if(this.atDepot){
            currentStop = 'Course completed';
        }else{
            currentStop = this._stops[this.currentStop + 1].name;
        }
        return `Line summary
- Next stop: ${currentStop}
- Stops covered: ${this.currentStop}
- Time on course: ${this.duration} minutes
- Delay: ${this.delay} minutes`
    }
}


// Initialize a line manager with correct values
const man = new LineManager([
    {name: 'Depot', timeToNext: 4},
    {name: 'Romanian Embassy', timeToNext: 2},
    {name: 'TV Tower', timeToNext: 3},
    {name: 'Interpred', timeToNext: 4},
    {name: 'Dianabad', timeToNext: 2},
    {name: 'Depot', timeToNext: 0},
]);

// Travel through all the stops until the bus is at depot
while(man.atDepot === false) {
    console.log(man.toString());
    man.arriveAtStop(4);
}

console.log(man.toString());

//Should throw an Error (minutes cannot be negative)
//man.arriveAtStop(-4);
// Should throw an Error (last stop reached)
//man.arriveAtStop(4);

// Should throw an Error at initialization
const wrong = new LineManager([
    { name: 'Stop', timeToNext: { wrong: 'Should be a number'} }
]);
