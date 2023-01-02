// This question is asked by Microsoft. Design a class, MovingAverage, which contains a method, next that is responsible for returning the moving average from a stream of integers.
// Note: a moving average is the average of a subset of data at a given point in time.

// Ex: Given the following series of events...

// // i.e. the moving average has a capacity of 3.
// MovingAverage movingAverage = new MovingAverage(3);
// m.next(3) returns 3 because (3 / 1) = 3
// m.next(5) returns 4 because (3 + 5) / 2 = 4 
// m.next(7) = returns 5 because (3 + 5 + 7) / 3 = 5
// m.next(6) = returns 6 because (5 + 7 + 6) / 3 = 6


class MovingAverage {

    dataArray = new Array();
    capacity: number;

    constructor(capacity: number){
        this.capacity = capacity;
    }

    next(data: number): number {
        let total = 0;
        if (this.dataArray.length == this.capacity)
            this.dataArray.splice(0,1);

        this.dataArray.push(data);

        for (let i of this.dataArray){
            total+=i;
        }

        return total/this.dataArray.length;
    }

}

let m = new MovingAverage(3);

let output = 0;

output = m.next(3); //returns 3 because (3 / 1) = 3
//output = m.next(5); //returns 4 because (3 + 5) / 2 = 4 
//output = m.next(7); //= returns 5 because (3 + 5 + 7) / 3 = 5
//output = m.next(6); //= returns 6 because (5 + 7 + 6) / 3 = 6

console.log(output);

export { }