

function getFibonacci(n: number): number {

    if(n == 1 || n  == 2)
    return 1;
    else
    return getFibonacci(n-1) + getFibonacci(n-2)


}


console.log(getFibonacci(6).toString());