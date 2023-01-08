

let n = 3;

let memo = Array(n).fill(0);

function getFibonacciMemo(n: number, memo: number[]): number {
    
    if(memo[n-1] != 0)
    return memo[n-1];
    let result = 0;
    if(n == 1 || n  == 2)
    result = 1;
    else
    result = getFibonacciMemo(n-1, memo) + getFibonacciMemo(n-2, memo)

    memo[n-1] = result;
    return result;


}


console.log(getFibonacciMemo(n, memo).toString());

export{}