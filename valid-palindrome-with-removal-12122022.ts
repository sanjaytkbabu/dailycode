// This question is asked by Facebook. Given a string and the ability to delete at most one character, return whether or not it can form a palindrome.
// Note: a palindrome is a sequence of characters that reads the same forwards and backwards.

// Ex: Given the following strings...

// "abcba", return true
// "foobof", return true (remove the first 'o', the second 'o', or 'b')
// "abccab", return false

let checkPalindrome = (input: string): boolean => {

    input = input.toLowerCase();
    let reverseString:string = "";
    for(let i = input.length-1; i>=0; i--){

        reverseString = reverseString.concat(input[i]);
    
    }
    //console.log(reverseString);
    if (input==reverseString){
       // console.log("true");
        return true;
    }
    
    else{
      //  console.log("false")
        return false;
    }


}


let eliminateChar = (input: string) => {

    let flag = false;

    for(let i = 0; i < input.length; i++){
        if(checkPalindrome(input.replace(input[i],'')))
        {
            console.log("true");
            flag = true;
            break;
        }
    }
 
    if(!flag)
    console.log("false")
 
 }







//checkPalindrome("foobof");
eliminateChar("abccab");

//checkPalindrome("abcba");