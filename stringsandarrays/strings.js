var arr = [1,3,4,5,-10,7];
var op = [arr[0]];
var tmp;
for(var i = 1; i < arr.length; i++){
    tmp = arr[i] + op[op.length-1];
    op.push(tmp);
}

//give me suffix sum array 

//op = [1,4,8,13,3,10]

var st = "shdkashj askjd...haskdasklasdhsajchkasjkaxjksahex";
//count all the vowels 
function countVowels(str) {
    var vowels = ['a', 'e', 'i', 'o', 'u'];
    var vowelCount = 0;

    for (var i = 0; i < str.length; i++) {
        for (var j = 0; j < vowels.length; j++) {
            if (str[i] === vowels[j]) {
                vowelCount++;
            }
        }
    }
    return vowelCount;
}

console.log("*******************");
console.log("VowelCount is: " + countVowels(st));

//interchange the 1st vowel with last one, 2nd with the 
//2ndlast one and so on
//Remeber string is immutable 
function replaceVowels(str) {
    var vowels = ['a', 'e', 'i', 'o', 'u'];
    var start = -1;
    var end = str.length;

    while (start <= end) {
        for (var i = start + 1; i < str.length; i++) {
            for (var j = 0; j < vowels.length; j++) {
                if (str[i] === vowels[j]) {
                    start = i;
                    i = str.length;
                    break;

                }
            }
        }

        for (var k = end - 1; k > -1; k--) {
            for (var j = 0; j < vowels.length; j++) {
                if (str[k] === vowels[j]) {
                    end = k;
                    k = -1;
                    break;
                }
            }
        }

        if (end > start) {
            var temp = str[start];
            str = str.substring(0, start) + str[end] + str.substring(start + 1);
            str = str.substring(0, end) + temp + str.substring(end + 1);
        }
    }
    return str;
}

console.log("++++++++++++++++++++++++++++++");
console.log("Vowel str before replace is: " + st);
console.log("Vowel str after replace is: " + replaceVowels(st));


var vowels = ["a", "e", "i", "o", "u"];
var count = 0;
for(var i = 0; i < st.length; i++){
    for(var j = 0; j < vowels.length; j++){
        if(st[i] === vowels[j]){
            count++;
            break;
        }
    }
}


st = "dfghaxentiostu"
// "dfghuxontiesta"

// "sdfgh"
// "sdfgh"

//"aeiou"
//"uoiea"

//"aaaaaa"
//"aaaaaa"
var s = st.split("");
var i = 0; 
var j = s.length-1;
var tmp;
while(i < j){
    if(vowels.has(s[i])  && vowels.has(s[j])){
        //swap;
        tmp = s[i];
        s[i] = s[j];
        s[j] = tmp;
        i++;
        j--;
    }else if(vowels.has(s[i])){
        j--;
    }else if(vowels.has(s[j])){
        i++;
    }else{
        i++;
        j--; 
    }
}

st = s.join("");


console.log(count);

var vowels = new Set(["a", "e", "i", "o", "u"]);
var count = 0;
for(var i = 0; i < st.length; i++){
    if(vowels.has(st[i])){
        count++;
    }
}
console.log(count);




console.log("////////////////////////");
var str = "aba";//"aa";//"a";//"";//"abbcdba";
if (isPalindrome(str)) {
    console.log("It is a palindrome");
} else {
    console.log("It is not a palindrome");
}

function isPalindrome(st) {
    var i = 0;
    var j = st.length - 1;
    while (i <= j) {
        if (st[i] === st[j]) {
            i++;
            j--;
        } else {
            return false;
        }
    }
    return true;
}
console.log("////////////////////////");
var st = "aba";//"aa";//"a";//"";//"abbcdba";
//write a loop to see if this is a palindrom
var i = 0;
var j = st.length - 1;
while (i <= j) {
    if (st[i] === st[j]) {
        i++;
        j--;
    } else {
        break;
    }
}

if (i > j) {
    console.log("It is a palindrome");
} else {
    console.log("It is not a palindrome");
}

console.log("////////////////////////");
var st = "jsckahaohsdoohsdojldpadjjsallaohsdoscnbkuhcshasklk";
var toSearch = "ohsdouhsdklsdjlkjscklsaclaslksalaks";
var ind = -1;
do {
    ind = st.indexOf(toSearch, ind + 1);
    if (ind !== -1) {
        console.log("String Found at index " + ind);
    } else {
        console.log("No more incedences of the string");
    }
} while (ind !== -1);


console.log("////////////////////////");
////////////////////////
var st = "  a quIck Brown fox jUmps over the laYy Dog  ".trim();
var initSt = st.slice(0, 5);
var midSt = st.slice(5, 20);
var endSt = st.slice(-5).toUpperCase();
var len = st.length;
console.log(initSt);
console.log(midSt);
console.log(endSt);
//we want to use two strings show last 5 characters in caps

