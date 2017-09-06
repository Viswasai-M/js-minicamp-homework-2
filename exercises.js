// Do not change any of the function names

function getBiggest(x, y) {

    if(x>y | x===y){
        return x;
    }else{
        return y;
    }
  // x and y are integers.  Return the larger integer
  // if they are the same return either one
}

getBiggest(20,30);

function greeting(language) {
    
    var greeting1 = 'Guten Tag!';
    var greeting2 = 'Hello!';
    var greeting3 = 'Hola!';
    if (language === 'German'){
        return greeting1;
    }else if(language === 'English'){
        return greeting2;
    }else if(language === 'Spanish'){
        return greeting3;
    }else{
         var greeting = 'Hello!';
        return greeting;
    }
  // return a greeting for three different languages:
  // language: 'German' -> 'Guten Tag!'
  // language: 'English' -> 'Hello!'
  // language: 'Spanish' -> 'Hola!'
  // if language is undefined return 'Hello!'
}

greeting('Spanish');

function isTenOrFive(num) {
    if(num === 10||num === 5){
        return true;
    }else{
        return false;
    }
  // return true if num is 10 or 5
  // otherwise return false
}

isTenOrFive(5);
function isInRange(num) {
    if(num<50 && num>20){
        return true;
    }else{
        return false;
    }
  // return true if num is less than 50 and greater than 20
}
isInRange(49);
isInRange(19);

function isInteger(num) {
    
    if(num%1===0){
        return true;
    }else{
        return false;
    }
  // return true if num is an integer
  // 0.8 -> false
  // 1 -> true
  // -10 -> true
  // otherwise return false
  // hint: you can solve this using Math.floor
}
isInteger(5);
isInteger(0.1);
isInteger(-20);
isInteger(0);

function fizzBuzz(num) {
    var x = 'fizz';
    var y = 'buzz';
    var z = 'fizzbuzz';
    if (num%3 ===0  && num%5===0){
        return z;
    }else if(num%3===0){
        return x;
    }else if(num%5===0){
        return y;
    }else{
        return num;
    }
  // if num is divisible by 3 return 'fizz'
  // if num is divisible by 5 return 'buzz'
  // if num is divisible by 3 & 5 return 'fizzbuzz'
  // otherwise return num
}

fizzBuzz(3);

function isPrime(num) {
if (num>1){
    for( var i =2; i<num; i++){
        if(num%i === 0){
            return false;
            }
        }
            return true;
           
        }else{
            return false;
        }
   // return true if num is prime.
  // otherwise return false
  // hint: a prime number is only evenly divisible by itself and 1
  // hint2: you can solve this using a for loop
  // note: 0 and 1 are NOT considered prime numbers
}

isPrime(1);
isPrime(5);


function returnFirst(arr) {
    if (arr.size!= 0){
        return arr[0];
    }
    
  // return the first item from the array
}
  var arr = ['sa','ri','ga','ma', 'pa'];
returnFirst(arr);
function returnLast(arr) {
     if (arr.size!= 0){
        return arr[arr.length-1];
    }
  // return the last item of the array
}
returnLast(arr);

function getArrayLength(arr) {
    return arr.length;
  // return the length of the array
}
getArrayLength(arr);

function incrementByOne(arr) {
    for(var i =0 ; i<arr.length; i++){
        arr[i] = arr[i]+1;
        
    
    }
    
 return arr;   
  // arr is an array of integers
  // increase each integer by one
  // return the array
} 
 var arr1 = [1,2,3,4];
incrementByOne(arr1);

function addItemToArray(arr, item) {
    
     arr.push(item);
    return arr;
  // add the item to the end of the array
  // return the array
}
var item = 'da';
addItemToArray(arr, item);

function addItemToFront(arr, item) {
    
    arr.splice(0, 0, item);
    return arr;
  // add the item to the front of the array
  // return the array
  // hint: use the array method .unshift
}
addItemToFront(arr, item);


function wordsToSentence(words) {
  
   var sen = words.join(' ');
    return sen;
  // words is an array of strings
  // return a string that is all of the words concatenated together
  // spaces need to be between each word
  // example: ['Hello', 'world!'] -> 'Hello world!'
}
var words = ['Hello', 'world!'];
wordsToSentence(words);

function contains(arr, item) {
    if(arr.includes(item)){
        return true;
    }else{
        return false;
    }
  // check to see if item is inside of arr
  // return true if it is, otherwise return false
}
 contains(arr, item);
 contains(arr, 'sai');


function addNumbers(numbers) {
    var total = 0;
    
    for(var i=0; i<numbers.length; i++){
        total = total + numbers[i];
       
    }
    return total;
  // numbers is an array of integers.
  // add all of the integers and return the value
}

var numbers = [1,2,3,4];
 addNumbers(numbers); 

function averageTestScore(testScores) {
    var total =0;
     for(var i=0; i<testScores.length; i++){
        total = total + testScores[i];
       
    }
     total = total/testScores.length;
    return total;
    
  // testScores is an array.  Iterate over testScores and compute the average.
  // return the average
}
var testScores = [1,2,3,4];
averageTestScore(testScores);

function largestNumber(numbers) {
    
    
    var largest = Math.max.apply(Math, numbers); 
    return largest;
    
  // numbers is an array of integers
  // return the largest integer
}
largestNumber(numbers);

// Do not modify code below this line.
// --------------------------------

module.exports = {
  getBiggest: getBiggest,
  greeting: greeting,
  isTenOrFive: isTenOrFive,
  isInRange: isInRange,
  isInteger: isInteger,
  fizzBuzz: fizzBuzz,
  isPrime: isPrime,
  returnFirst: returnFirst,
  returnLast: returnLast,
  getArrayLength: getArrayLength,
  incrementByOne: incrementByOne,
  addItemToArray: addItemToArray,
  addItemToFront: addItemToFront,
  wordsToSentence: wordsToSentence,
  contains: contains,
  addNumbers: addNumbers,
  averageTestScore: averageTestScore,
  largestNumber: largestNumber
};
