//Hw
/*
We have a string s and another string t write a 
function which gives true if t is a subsequence of s 
otherwise it gives false;

Constrains: s and t consists of lower case letters

s = "baabaandftgnga"
t = "bang"
return true

s = "baaaandftg"
t = "bagn"
return false

s = "bandftg"
t = "baang"
return false

s = "bamandftg"
t = "baang"
return true

*/


var sortedArr = [-15,-10,-4, 0, 5,7,8,9,20,23];
//we have sorted array and we want to take the square of each 
//element and give the result in sorted form.
sortedArr = sortedArr.map(e=>e*e);
console.log(sortedArr);
var i = 0; 
var j = sortedArr.length-1;
op = [];
while(i <= j){
    if(sortedArr[i] >= sortedArr[j]){
        op.push(sortedArr[i]);
        i++;
    }else{
        op.push(sortedArr[j]);
        j--;
    }
}

op = op.reverse();
console.log(op);



var arr4 = [1,2,3,4,5,6,7,8,9,15,20,3];
//we want all even
var arr4 = arr4.filter(e=>e%2===0);
console.log(arr4);


var arr3 = [1,2,3,4,5,6,7,8,9];
//we want to add all the elements of arr3
var sum = arr3.reduce((acc,crr)=>acc+crr,0);
//we want to take the product of all the elements
var sum = arr3.reduce((acc,crr)=>acc*crr,1);

var arr2 = [2,6,3,5,6,7];
//map each element of arry to 3 time the element plus index
arr2 = arr2.map((e,i)=>3*e+i);


var arrOfSt = ["fox","coin","blue","yellow","bread"];

arrOfSt.sort();

console.log(arrOfSt);


var arr = [-10,-3,-1,5,6,7,-20,-30];

//Multiply each element by 2 and add 3 into it.
//map is a builtin array function which maps each element to a 
//morphed value
arr = arr.map(e=>2*e+3);
console.log(arr);


arr.sort((a,b)=>a-b);




// arr.sort(function (a,b){
//     return a-b;
// });
console.log(arr);

var getMinAndMax = a=>{
    var maxEle = a[0];
    var minEle = a[0];
    for(var i = 1; i < a.length; i++){
        maxEle = Math.max(maxEle, a[i]);
        minEle = Math.min(minEle, a[i]);
    }
    return [minEle, maxEle];
};

// var getMinAndMax = function (a){
//     var maxEle = a[0];
//     var minEle = a[0];
//     for(var i = 1; i < a.length; i++){
//         maxEle = Math.max(maxEle, a[i]);
//         minEle = Math.min(minEle, a[i]);
//     }
//     return [minEle, maxEle];
// };

var [max, min] = getMinAndMax(arr);

// console.log(maxMin);
// console.log("Min element is: " + maxMin[0]);
// console.log("Max element is: " + maxMin[1]);

console.log("Min element is: " + min);
console.log("Max element is: " + max);

