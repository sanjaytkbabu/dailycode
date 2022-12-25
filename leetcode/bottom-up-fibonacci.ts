function getFibonacciBottomUp(n: number): number {

    if(n == 1 || n  == 2)
    return 1;
    else {
        let bottomUp = Array(n);
        bottomUp[0] = 1;
        bottomUp[1] = 1;
        for(let i = 2; i < n; i++){
            bottomUp[i] = bottomUp[i-1] + bottomUp[i-2];
        }
        return bottomUp[n-1];
    }
    


}

console.log(getFibonacciBottomUp(2).toString())
