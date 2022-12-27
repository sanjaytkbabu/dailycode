// This question is asked by Google. Given a string, return whether or not it uses capitalization correctly. A string correctly uses capitalization if all letters are capitalized, no letters are capitalized, or only the first letter is capitalized.

// Ex: Given the following strings...

// "USA", return true
// "Calvin", return true
// "compUter", return false
// "coding", return true


let s1 = "USA";
let s2 = "Calvin"
let s3 = "compUter";
let s4 = "coding";

//console.log(s1.substring(1,s1.length));


const checkIt = (input: string ):any => {

    let lowercase: string = input.toLocaleLowerCase();
    
    let uppercase: string = input.toLocaleUpperCase();

    let firstLetter: string = input.substring(0,1);

    let rest: string = input.substring(1, input.length);
    
    if(input == lowercase || input == uppercase || (firstLetter == firstLetter.toUpperCase() && rest == rest.toLowerCase()))
    console.log("true")
    else 
    console.log("false");

}

checkIt(s4);