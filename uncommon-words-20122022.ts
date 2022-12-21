// This question is asked by Amazon. Given two strings representing sentences, return the words that are not common to both strings (i.e. the words that only appear in one of the sentences). You may assume that each sentence is a sequence of words (without punctuation) correctly separated using space characters.

// Ex: given the following strings...

// sentence1 = "the quick", sentence2 = "brown fox", return ["the", "quick", "brown", "fox"]
// sentence1 = "the tortoise beat the haire", sentence2 = "the tortoise lost to the haire", return ["beat", "to", "lost"]
// sentence1 = "copper coffee pot", sentence2 = "hot coffee pot", return ["copper", "hot"]


function unCommonWords(sentence1: string, sentence2: string): string[] {

    let output: string[] = [];
    let sentence1Array = sentence1.split(" ");
    let sentence2Array = sentence2.split(" ");

    for (let i in sentence1Array){
        if(sentence2Array.indexOf(sentence1Array[i]) == -1)
        output.push(sentence1Array[i]);
    }
    for (let j in sentence2Array){
        if(sentence1Array.indexOf(sentence2Array[j]) == -1)
        output.push(sentence2Array[j]);
    }


    return output;
}


//let sentence1 = "the quick", sentence2 = "brown fox";
//let sentence1 = "the tortoise beat the haire", sentence2 = "the tortoise lost to the haire";
let sentence1 = "copper coffee pot", sentence2 = "hot coffee pot"
console.log(unCommonWords(sentence1, sentence2));

