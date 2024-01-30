// .js File

console.log("Hello World");
// btn=alert("me");
// what is variable= contain no ect//
// console.warn("This  a warinng");
// console.error("Error File")
// var number1 = 34;
// var number2 = 56;
// console.log(number1 + number2);

//data types in js//

/*var num1 = 455;
var num2 = 56.78;

//string
var str1 = "This is a string"
var str2 = "This is also string"

//objects
var marks = {
    ravi: 34,
    sab: 78,
}
//Functions
function avg(a, b){
    c = (a + b)/2;
    return c;
}
c1 = avg (4 , 6);
c2 = avg (14 , 16);
console.log(c1 ,c2);
*/

//if-else statment
// age = 16;
// if(age > 32){
//     console.log("Thsnks");
// }
// else if(age > 22){
//     console.log("zaid");
// }
// else if(age > 15){
//     console.log("zaiddd");
// }
// else if(age > 8){
//     console.log("zaidoo");
// }
// else{
//     console.log("Mrzaid");
// }
// console.log("End of ladder");

//ligical oprators
//logic and
// console.log(true & true);
// console.log(true & false);
// console.log(false & false);
// console.log(false & true);

//logical OR (if any one is true then print true)
// console.log(true | true);
// console.log(false | true);
// console.log(true || false);
// console.log(false | false);

// var b = 2;
// var c = b;
// console.log(c);
// console.log(c+b);
//arrays
// var arr = [1,2,3,4,5]
// console.log(arr);

//Question: Make a array1 and array2, push the items in array2 but it not push in array1?
// let array1 = [1,2,3,4];
// let array2 = [10,11,13,14];

// array2.push(5);
// array2.pop(88);
// console.log(array1);
// console.log(array2);
//done 👍

//Q: Make a array1 and  in array2 all the items of array1 and other items also?
// let array1 = [1,2,3,4];
// let array2 = array1.slice(0).concat([20, 25, 30]); this is slice method
// OR array2 also writen as
// let array2 = [].concat(array1, [25, 30, 35]);
//OR array2 also writen as
// let array2 = [...array1 .concat(5,78)];
//OR
// let array2 = [...array1, "item1","item2"];

// console.log(array1);
// console.log(array2);

//done 👍
//Q: Make 2 array and 3rd on is the combination of those 2 array?
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let allArray = [...array1, ...array2];
console.log(array1 === array2); //false :it means array1 and array2 are diff from each other.
console.log(allArray);
