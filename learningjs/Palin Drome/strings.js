//var st = "a quick brown fox jumps over the lazy dog".toLowerCase();
var st = "a quick brown fox jumps over the lazy dog".toUpperCase();
var st1 = st.slice(10,20);
// Substring is similar to Slice but substring() cannot accept negative indexes
var st2 = st.substring(15,18);
var st3 = "  a quick brown fox jumps over the lazy dog  ".trim();
var len = st.length;    // Length of the String
// visit www.w3schools.com for Javascript examples
// also visit leetcode.com for Data Structure and more problems on Strings

var st4 = "This is a Life Long achievement for Life Long efforts".toLowerCase();
var toSearch = "Life Long".toLowerCase();
var ind = -1; 
do {
    ind = st4.indexOf(toSearch, ind+1);
    if (ind !== -1){
        console.log("String Found at Index: " + ind);
    }else{
        console.log("No more occurences of the string: ");
    }

} while (ind !== -1);

//console.log (ind);

// console.log(st.length);
// console.log(st);
// console.log(st1);
// console.log(st2);
// console.log(st3);