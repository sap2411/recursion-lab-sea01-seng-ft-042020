// Code your solution here!

function printString(myString) {
    console.log(myString[0]);
  
    if (myString.length > 1) {
      let mySubString = myString.substring(1, myString.length);
      printString(mySubString);
    } else {
      return true;
    }
}

function reverseString(string){
    return (string === '') ? '' : reverseString(string.substr(1)) + string.charAt(0);
}

function isPalindrome(string){
    if (string.length <= 1) return true
    return string.charAt(0) === string.charAt(string.length-1) ? isPalindrome(string.substring(1, string.length-1)) : false
}

function addUpTo(arr, index){
    return index === 0 ? arr[0] : arr[0] + addUpTo(arr.slice(1,arr.length), index-1)
}

function maxOf(arr, max = arr[0]){
    let newMax = arr[0] > max ? arr[0] : max
    return arr.length > 1 ? maxOf(arr.slice(1, arr.length), newMax) : newMax
}

function includesNumber(arr, num){
    if (arr.length === 1 && arr[0] !== num) return false
    return arr[0] === num ? true : includesNumber(arr.slice(1, arr.length), num)
}