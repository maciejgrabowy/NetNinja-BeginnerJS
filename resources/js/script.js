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

//strings
var myString = "Hast thou sampled from the root of T'Char?";
console.log("The length is " + myString.length);
console.log(myString.toUpperCase());
console.log(myString.toLowerCase());
console.log("The index of the word 'root' is " + myString.indexOf("root"));

//arrays
myArray = [];
myArray[0] = 10;
myArray[1] = "Derp"
myArray[2] = 12.5;
myArray[3] = true;
console.log(myArray);

myArray2 = [2,5,3,true,"stuff"];  //this is much faster
console.log(myArray2);
myArray2.sort();
console.log("Sorted: " + myArray2);
myArray2.reverse();
console.log(myArray2);

//objects
var myCar = new Object();
myCar.maxSpeed = 50;
myCar.driver = "Mac";
myCar.drive = function() {
  console.log("I'm driving now");
};

myCar.drive();

var myCar2 = {

  maxSpeed: 70,
  driver: "The other guy",
  drive: function(speed, time) {
    console.log(speed * time);    
  }
};

console.log(myCar2.maxSpeed);
myCar2.drive(50, 3);