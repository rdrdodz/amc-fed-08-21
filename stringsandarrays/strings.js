//var st = "shdkashjaskjdhaskdasklasdhsajchkasjkaxjksahx";
var st = "shdkashjasekjdihaskdaskloasdhsaojcuhkasjkaxujksahx";
//count all the vowels 
//interchange the 1st vowel with last one, 2nd with the 
//2ndlast one and so on
//Remeber string is immutable 
var vowelMap = {    
    'A': 'U',
    'E': 'O',
    'I': 'I',
    'O': 'E',
    'U': 'A',
    'a': 'u',    
    'e': 'o',    
    'i': 'i',
    'o': 'e',
    'u': 'a'    
};

function countVowels(st) {
    var count = 0;    
    if((st !== undefined) && (st.length > 0)) {
        //var vowelArray = ['a', 'e', 'i', 'o', 'u'];
        var len = st.length;
        var vowelList = getObjectKeys(vowelMap);
        for(var i = 0; i < len; i++) {
            //if(containsString(st[i], vowelArray)) {
            if(containsStringBinarySearch(st[i], vowelList)) {
                count++;
            }
        }
    }
    return count;
}

function containsString(ch, chArray) {
    var result = false;
    if((chArray !== undefined) && (chArray.length > 0)) {
        var len = chArray.length;
        for(i = 0; i < len; i++) {
            if(ch === chArray[i]) {
                result = true;
                break;
            }
        }
    }
    return result;
}

function containsStringBinarySearch(ch, chArray) {
    var result = false;
    if((chArray !== undefined) && (chArray.length > 0)) {
        var index = indexOfStringBinarySearch(ch, chArray);
        result = (index !== -1);
    }
    return result;
}

function indexOfStringBinarySearch(ch, chArray) {
    var result = -1;
    if((chArray !== undefined) && (chArray.length > 0)) {
        var len = chArray.length;        
        var startIndex = 0;
        var endIndex = len - 1;
        while(startIndex <= endIndex) {
            var length = endIndex - startIndex + 1;
            var midIndex = startIndex + Math.floor(length / 2);        
            if(ch === chArray[midIndex]) {
                result = midIndex;
                break;
            }
            else if(ch < chArray[midIndex]) {
                endIndex = midIndex - 1;
            }
            else {
                startIndex = midIndex + 1;
            }
        }
    }
    return result;
}

console.log("Number of vowels in " + st + " = " + countVowels(st));

function swapVowels(ch) {
    var result = ch;
    if((ch !== undefined) && (ch.length == 1)) {
        var vowelArray = ['a', 'e', 'i', 'o', 'u'];
        var len = vowelArray.length;
        for(var i = 0; i < len; i++) {
            if(ch === vowelArray[i]) {
                result = vowelArray[len - i - 1];
                break;
            }
        }
    }
    return result;
}

function getObjectKeys(objMap) {
    var result = [];
    if(objMap !== undefined) {
        for(var key in objMap) {
            result.push(key);
        }    
    }
    return result;
}

function interChangeVowels(st) {
    var result = "";
    if((st !== undefined) && (st.length > 0)) {
        var len = st.length;
        for(var i = 0; i < len; i++) {
            //result += swapVowels(st[i]);
            var existingChar = st[i];
            var newChar = vowelMap[existingChar];
            result += (newChar !== undefined) ? newChar : existingChar;
        }
    }
    return result;
}
st = "hElloUAmerIca";
console.log("st: " + st);
var swappedVowelledSt = interChangeVowels(st);
console.log("st with swapped vowels: " + swappedVowelledSt);
console.log("st with swapped vowels again: " + interChangeVowels(swappedVowelledSt));
// console.log("////////////////////////");
// var str = "aba";//"aa";//"a";//"";//"abbcdba";
// if(isPalindrome(str)){
//     console.log("It is a palindrome");
// }else{
//     console.log("It is not a palindrome");
// }

function isPalindrome(st){
    var i = 0; 
    var j = st.length-1;
    while(i <= j){
        if(st[i] === st[j]){
            i++;
            j--;
        }else{
            return false;
        }
    }
    return true;
}
// console.log("////////////////////////");
// var st = "aba";//"aa";//"a";//"";//"abbcdba";
// //write a loop to see if this is a palindrom
// var i = 0; 
// var j = st.length-1;
// while(i <= j){
//     if(st[i] === st[j]){
//         i++;
//         j--;
//     }else{
//         break;
//     }
// }

// if(i > j){
//     console.log("It is a palindrome");
// }else{
//     console.log("It is not a palindrome");
// }

// console.log("////////////////////////");
// var st = "jsckahaohsdoohsdojldpadjjsallaohsdoscnbkuhcshasklk";
// var toSearch = "ohsdouhsdklsdjlkjscklsaclaslksalaks";
// var ind = -1;
// do{
//     ind = st.indexOf(toSearch, ind+1);
//     if(ind !== -1){
//         console.log("String Found at index " + ind);
//     }else{
//         console.log("No more incedences of the string");
//     }
// }while(ind !== -1);


// console.log("////////////////////////");
// ////////////////////////
// var st = "  a quIck Brown fox jUmps over the laYy Dog  ".trim();
// var initSt = st.slice(0,5);
// var midSt =  st.slice(5, 20);
// var endSt =  st.slice(-5).toUpperCase();
// var len = st.length;
// console.log(initSt);
// console.log(midSt);
// console.log(endSt);
//we want to use two strings show last 5 characters in caps

