
// function isPalindrome(palindrome){
//     for(var i = palindrome.length; i > 0; i-- )
//     {
//         if( palindrome[i] == palindrome.charAt(palindrome.length)-1 - i )
//             {
//                 console.log('the word is palindrome.');
//             } else
//             {
//             console.log('the word is not palindrome!');
//             }
//     }
// }

if (isPalindrome("madam")){
    console.log("It is a Palindrome");
}
else{
    console.log("Not a Palindrome");
};

function isPalindrome(st) {
    var  i = 0;
    var j = st.length-1;
    while (i<j){
        if(st[i] === st[j]){
            i++;
            j--;
        }else{
            return false;
        }  
    }
        return true;
}
    //isPalindrome('wordthatwillbechecked');
