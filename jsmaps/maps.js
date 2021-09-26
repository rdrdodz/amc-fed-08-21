//There are two sentences composed of lower case lettrs
//and the words are separated by single spaces. We want to 
//get a list of commin words in these two strings.
//st1 = "this is a sentence with many words"
//st2 = "sentence number two is also composed of words"

//sentence, is, words

var st1 = "this is a sentence with many words";
var st2 = "sentence number two is also composed of words";

var set1 = new Set(st1.split(" "));
var set2 = new Set (st2.split(" "));

const commonWords = new Set([...set2].filter(x => set1.has(x)))

var output = "";
commonWords.forEach(function(value) {
    output += value + ", ";
})
console.log(output);

var x = 10;
var y = x;

y = 4;

console.log(x); //10

var arr1 = [10, 20, 30];
var arr2 = arr1;
var arr3 = [...arr1];

arr2[0] = 100;

console.log(arr1[0]);



// we have a sentence and we want to count all the 
//words present in the sentence.

var sentence = "this is a long sentence which has so many words the sentence can be completely meaningless but we want to count the occorance of each word in it the sentence has spaces and lower case letters this is a long sentence which has so many words the sentence can be completely meaningless but we want to count the occorance of each word in it the sentence has spaces and lower case letters"
var alphaCountArr = new Array(26).fill(0);
for(var i = 0; i < sentence.length; i++){
    if(sentence[i] !== " "){
        alphaCountArr[sentence.charCodeAt(i)-97]++;
    }
}

// console.log(alphaCountArr);

for(var i = 0; i < alphaCountArr.length; i++){
    console.log("The char '" + String.fromCharCode(97+i) + "' in sentence " + alphaCountArr[i] + " times");
}

var alphaCount = new Map();
for(var i = 0; i < sentence.length; i++){
    if(sentence[i] !== " "){
        if(!alphaCount.has(sentence[i])){
            alphaCount.set(sentence[i], 0);
        }
        alphaCount.set(sentence[i], alphaCount.get(sentence[i])+1);
    }
}
console.log(alphaCount);
sentence = sentence.split(" ");
var countMap = new Map();


// console.log(sentence);
for(var i = 0; i < sentence.length; i++){
    if(!countMap.has(sentence[i])){
        countMap.set(sentence[i], 0);
    }
    countMap.set(sentence[i], countMap.get(sentence[i])+1);
}

for(var [word, count] of countMap){
    console.log("The word '" + word + "' occers " + count + " times");
}

console.log(countMap);

