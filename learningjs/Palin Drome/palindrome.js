function isPalindrome(palindrome){
    for(var i = palindrome.length; i > 0; i-- )
    {
        if( palindrome[i] == palindrome.charAt(palindrome.length)-1 - i ){
            console.log('the word is palindrome.');
        } else
            {
            console.log('the word is not palindrome!');
            }
        }
    }
    // isPalindrome('wordthatwillbechecked');
    isPalindrome('madam');