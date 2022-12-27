// This question is asked by Amazon. Given a string representing your stones and another string representing a list of jewels, return the number of stones that you have that are also jewels.

// Ex: Given the following jewels and stones...

// jewels = "abc", stones = "ac", return 2
// jewels = "Af", stones = "AaaddfFf", return 3
// jewels = "AYOPD", stones = "ayopd", return 0

let findNumberOfOccurences = (jewels: string, stones: string) => {

    console.log("jewels = " + jewels + " stones = " + stones)

    let count = 0;
    for(let i = 0; i < jewels.length; i++){

        count+= stones.split(jewels[i]).length-1;

    }

    console.log("count = " + count)


}

let jewels: string[] = ["abc","Af","AYOPD"];
let stones: string[] = ["ac","AaaddfFf","ayopd"];

findNumberOfOccurences(jewels[2], stones[2]);