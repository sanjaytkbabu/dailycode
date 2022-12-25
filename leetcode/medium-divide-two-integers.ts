// Given two integers dividend and divisor, divide two integers without using multiplication, division, and mod operator.

// The integer division should truncate toward zero, which means losing its fractional part. For example, 8.345 would be truncated to 8, and -2.7335 would be truncated to -2.

// Return the quotient after dividing dividend by divisor.

// Note: Assume we are dealing with an environment that could only store integers within the 32-bit signed integer range: [−231, 231 − 1]. For this problem, if the quotient is strictly greater than 231 - 1, then return 231 - 1, and if the quotient is strictly less than -231, then return -231.



function divide(dividend: number, divisor: number): number {
    if(Math.abs(dividend) != Math.abs(divisor)){

    let count = 0;

    let divisorSign = divisor<0?-1:1;

    let dividentSign = dividend<0?-1:1;


    divisor = Math.abs(divisor);

    dividend = Math.abs(dividend);

    while(dividend > divisor){
        dividend -= divisor;
        count++; 
    }
    count = divisorSign<0?-count:count;
    count = dividentSign<0?-count:count;

  
    if(count > Math.pow(2, 31)-1){
        console.log("its here");
    return Math.pow(2, 31);
    
    }
    else if (count < -Math.pow(2, 31))
    return -Math.pow(2, 31);
    else
    return count;
}
return ((dividend<0 && divisor>0) || (dividend>0 && divisor<0))?-1:1;
}

console.log(divide(10, 3).toString());