// Routine to calculate Prefix and Suffix sums

// function prefix_sums (arr){
//     var new_arr = [];
//     for (var i = 0; i < arr.length; i++){
//         new_arr[i] = 0;
//         for (var j = 0; j < i + 1; j++){
//             new_arr[i] += arr[j];
//         }
//     }
// return new_arr;
// }

function prefix_sums(arr){
    var arr1 = []; 
    arr1 = [arr[0]] ;
    
     for(var i = 1 ; i < arr.length ;i++){
    
        arr1[i] = arr[i]+arr1[i-1];
    
    }
    return arr1;
   
}
    
console.log(prefix_sums([1, 2, 3, 4, 5, 6, 7]));   //[1, 3, 6, 10, 15]


// console.log (prefix_sums([1, 2, 3, 4, 5]));


function suffix_sums(arr){
    var n = arr.length;
    var arr1 = [];

    arr1[n-1] = arr[n-1];

    for(var i = n - 2; i>=0; i--)
        arr1[i] = arr1[i+1] + arr[i];
    
    return arr1
}

console.log(suffix_sums([2, 4, 6, 8, 10, 12, 14]));