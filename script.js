// refrence Apna college Js

//Practice Questions :

//Q1) Prompt the user to enter their full name, generate a username based on their input eg: user name: Rahul, username should be "@rahul123" .

/*let userInput = prompt("Enter your full name");

let userName = "@" + userInput + userInput.length;

console.log(userName);*/

//Q2) Print all even numbers from 0 to 100. video 3
// let arr = []
// for(let i = 0; i<=100; i++){
//     if(i%2===0){
//         arr.push(i)
//     }
// }
// console.log(arr);

//Q3) create a game where you start any random game number. Ask user to gess the correct number, until the user enters correct number. -video 3  37:40min
//------------------------------------------

/*let randomNum = Math.floor(Math.random() * 10);
let userNum = prompt("Gess the number");
while (randomNum != userNum) {
  if (userNum > randomNum) {
    userNum = prompt("worng, too high number");
  }
  if (userNum < randomNum) {
    userNum = prompt("worng, too low number");
  }
}
console.log(`You win 💐💐💐, The correct number is ${randomNum}`);*/

//  ----------------------------------------
//Q : For a given array with marks of students [...], Find the average marks of entire class? v4 -25:34 min
/*let studentMarks = [85,97,44,37,76,60]
let sum = 0;
for (let marks of studentMarks){
    sum = sum + marks
}
let averageMarks = sum/studentMarks.length 
console.log(averageMarks);*/

// ------------------------------------
// Q) For a given array with price of 5 items [...], All items have an offer of 10% OFF on them. change the array to stire final price after appluing offer. V4- 27:05 min

let array = [250, 645, 300, 900, 50];
// let index = 0;
// for (let item of array) {
//   let offer = item / 10;
//   array[index] = array[index] - offer;
//   console.log(array[index]);
//   index++;
// }
for(let i=0; i<array.length; i++){
    let offer = array[i] / 10;
     array[i] -= offer;
}
console.log(array)