let score = "adeel" //

//console.log(typeof score);
//console.log(typeof(score)); //it is like method()
 
let valueInNumber = Number(score) //first letter of dt is capital, because conversion to number taking place

//console.log(typeof valueInNumber);
//console.log(valueInNumber);

// let score = null
// "33" => 33
// "33abc" or any string like "adeel" => NaN //if you check typeof this NaN, it will show as number which is confusing.

// null => Number() changes it to 0 so it's not right. e.g. user inputs nothing in temperature field, then Number() changes it to 0 and that's not correct at all.

// undefined => Number() changes it to NaN, that's also not correct.
//  true => 1; false => 0

let isLoggedIn = "adeel" // trying with different values here like adeel, 1, true etc

let booleanIsLoggedIn = Boolean(isLoggedIn)
//  console.log(booleanIsLoggedIn);
// 1 => true; 0 => false
// "" => false
// "adeel" => true

let someNumber = 33

let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);

// *********************** Operations ***********************

let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = " adeel"

let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

// console.log( (3 + 4) * 5 % 3);

// console.log(+true);
// console.log(+"");

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
++gameCounter;
console.log(gameCounter);

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion