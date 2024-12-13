//Task 1
function CheckForPalindrome(number)
{
    if (number.isNaN){
        return false;
    }

    let numString = number.toString();

    numString.split('').reverse().join('');
    console.log(String(numString));
    return number === numString;
}

