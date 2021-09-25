var arr3 = [1,2,3,4,5,6,7,8,9];
var arr2 = [2,6,3,5,6,7];
var arr = [-10,-3,-1,5,6,7, -20,-30];
var ArrOfSt = ["Fox","Coin","Blue","Yellow","Red"];
var sortedArr = [-15,-10,-4,0,5,7,8,9,20,23];

//Sorting an Array; sorting is done lexiographically. Arrow function was introducted because of Microsoft's C-sharp language

ArrOfSt.sort();

// arr.sort(function (a,b){
//     return a-b;
// })

arr.sort((a,b)=>{
    return a-b;
})

// or for a single statemnet just write
// arr.sort((a,b)=>a-b);

console.log(arr);

// We can also use Map function with the Arrays
//Multiply each element by 2 and add 3 into it

arr = arr.map(e=>2*e+3);
console.log(arr);

// Map each element of Array to 3 x the element plus index.

arr2 = arr2.map((e,i)=>3*e+i);

//We can  use Reduce function to get the aggregate value of the array. E.g. we want to add all the elements of Array3

var sum = arr3.reduce((acc,crr)=>acc+crr,0);

//We want to take the product of all the elements; start with the index value of 1; not Zero.

var sum = arr3.reduce((acc,crr)=>acc*crr,1);

// To get all even numbers
var arr4 = [1,2,3,4,5,6,7,8,9,15,20,30];
var arr5 = arr4.filter(e=>e%2===0);
console.log("Array 5 is Even numbers only", arr5);

// We have sorted array and we want to take the square of each element and give the result in sorted form. 
// Square of a number is always positive


sortedArr = sortedArr.map(e=>e*e);
var i = 0;
var j = sortedArr.length-1;
op = [];
while (i<j){
    if(sortedArr[i] >= sortedArr[j]){
        op.push(sortedArr[i]);
        i++;
    } else{
        op.push(sortedArr[j]);
        j--;
    }
}
op = op.reverse();
console.log(op);

//console.log(sortedArr);

// Working with Functions
// var getMinMax = function(a);

// function getMinMax(a){
//     //sorting is N log n; it is an overkill
//     var maxElement = a[0];
//     var minElement = a[0];

//     for (var i=1; i<a.length; i++){
//         // max is a function of Math class
//         maxElement = Math.max(maxElement, a[i]);
//         minElement = Math.min(minElement, a[i]);
//     }
//     return [minElement, maxElement];
// }

// Using Arrows to declare a function
var getMinMax = (a)=> {
    //sorting is N log n; it is an overkill
    var maxElement = a[0];
    var minElement = a[0];

    for (var i=1; i<a.length; i++){
        // max is a function of Math class
        maxElement = Math.max(maxElement, a[i]);
        minElement = Math.min(minElement, a[i]);
    }
    return [minElement, maxElement];
}

// Calling function in JavaScript

var maxMin = getMinMax(arr);

//console.log(maxMin);
console.log("Minimum Element in the Array is: ", maxMin[0]);
console.log("Maximum Element in the Array is: ", maxMin[1]);
console.log(ArrOfSt);