// This question is asked by Google. Create a class CallCounter that tracks the number of calls a client has made within the last 3 seconds. Your class should contain one method, ping(int t) that receives the current timestamp (in milliseconds) of a new call being made and returns the number of calls made within the last 3 seconds.
// Note: you may assume that the time associated with each subsequent call to ping is strictly increasing.

// Ex: Given the following calls to ping…

// ping(1), return 1 (1 call within the last 3 seconds)
// ping(300), return 2 (2 calls within the last 3 seconds)
// ping(3000), return 3 (3 calls within the last 3 seconds)
// ping(3002), return 3 (3 calls within the last 3 seconds)
// ping(7000), return 1 (1 call within the last 3 seconds)

class CallCounter {

    t = new Array();
    //count: number;

    ping(t: number): number{
        this.t.push(t);
      //  this.count++;
      for(let i of this.t){
        if(i < this.t[this.t.length-1]-3000)
        this.t.splice(this.t.indexOf(i), 1);
        
    }

        let count = 0;
        for(let i of this.t){
            if(i > this.t[this.t.length-1]-3000)
            count ++;
            //else
          //  this.t.splice(this.t.indexOf(i), 1);
            
        }


        return count;
    };

    

}

let t1 = 1, t2 = 300, t3 = 3000, t4 = 3002, t5 = 7000;

let callCounter = new CallCounter();
let output = callCounter.ping(t1);
//output = callCounter.ping(t2);
//output = callCounter.ping(t3);
//output = callCounter.ping(t4);
//output = callCounter.ping(t5);

console.log(output)

export{}