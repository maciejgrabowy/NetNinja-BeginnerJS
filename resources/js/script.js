//console logging stuff 
console.log(4);
console.log("batonik");
var theNumberTen = 10;
var numbersNumbers = theNumberTen + 5;
document.write(numbersNumbers);
console.log(numbersNumbers);
numbersNumbers += 1;
console.log(numbersNumbers);

//trying an if statement or two
if (numbersNumbers == 16) {
  console.log("Yup, it's 16")
} else {
  console.log("Nope, it's not 16");
}

//if else conditionals: age tester
var myAge = 33;
if (myAge > 30) {
  console.log("You're over thirty! Basically a boomer!");

} else if (myAge > 20) {
  console.log("You're over twenty! Shine on!");

} else if (myAge > 10) {
  console.log("You're over ten! Good job!");

} else {
  console.log("You're basically a baby");
}

//for loop
var links = document.getElementsByTagName("a");

for (i = 1; i < links.length; i++) {
  console.log("that's a link number" + i);
}
document.write("all links are now looped, friend");

//simple function
function getAverage(a,b,c) {
  var average = (a + b + c) /3;
  console.log(average);
  return average;
}
getAverage(5,10,3);