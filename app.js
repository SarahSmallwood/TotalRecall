// 
// 1. How do we assign a value to a variable?
//let the variable equal something or const =


// 2. How do we change the value of a variable?
//change value of variable by changing it in a function


// 3. How do we assign an existing variable to a new variable?
//calling the old variable in the function and assigning it a new value



// 4. Remind me, what are declare, assign, and define?
//Declare, assign, and define are all terms associated with variables and their role in functions


// 5. What is pseudocoding and why should you do it?
//Pseudocode shows other developers your thought process when they are reading your code, and helps you organize before writing your code.

// 6. What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it?
//^0%

// STRINGS

// let fistVariable = ('Hello World')
// let firstVariable = 12
// let secondVariable = (firstVariable)


// BOOLEANS
const a = 4;
  const b = 53;
  const c = 57;
  const d = 16;
  const e = 'Kevin';

  console.log(a + b);
  console.log(c - d);
  console.log('Name', 'Name');
  // FOR THE NEXT TWO, USE ONLY && OR ||
  console.log(true || false);
  console.log(false && false, false || false, false && true);
  console.log(false && false)
  console.log(e || 'Kevin');
  console.log(a && b || c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
  console.log(a || a && d); // note: the answer is a simple arithmetic equation, not something "weird"
  console.log(48 || '48');

//   THE FARM
const animal = []
 if (animal === 'cow'){
  console.log('MOOOOOO')
 } else{
  console.log('Hey! Youre not a cow.')
 }

//DriversED

let driverAge = 18
 if (driverAge >= 16){
  console.log('Here are the keys!')
 } else {
  console.log('Sorry, youre too young!')
 };

//A. THE BASICS
//print 1 to 10 
for (let input = 1; input <= 10; input++) {
  console.log(input);
};

// print 10 - 400

for (let i = 10; i <= 400; i++){
  console.log(i);
};

//print out every third number

for (let i = 12; i <= 4000; i+=3){
  console.log(i);
};

//GET EVEN

for (let i = 2; i <= 100; i +=2) {
  console.log('{i} is an even number.');
};

for (let i = 1; i <= 100; i++){
  if(i%5 === 0) {
    console.log( `I found a {i}.High five!`);
  }
  if (i%3 === 0){
    console.log( `I found a {i}. Three is a crowd!`)
  }
};

//Bank Account

let bankAccount = 0;

for(let i = 1; i<=100; i++*2){
  bankAccount +=i;
};

// Talk about it:



// What are the things in an array called?
//data
// Do Arrays guarantee those things will be in order?
//yes
// What real-life thing could you model with an array?
//music titles, menu, birthyears

let quotes = [
  "Hello",
  "You are",
  "The Best"
];

const randomThings = [1, 10, "World", true]
console.log(randomThings)

// (0)


const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Octocat", "cloudCity"]


const myArray = ['Bob Marley', 10, 500, 20, 'aegon','life']

//
const kristynsCloset = [
  "left shoe",
  "cowboy boots",
  "right sock",
  "Per Scholas hoodie",
  "green pants",
  "yellow knit hat",
  "ray-bans",
  "marshmallow peeps"
];
console.log('Kristyn is rocking that today!')

// Thom's closet is more complicated. Check out this nested data structure!!
const thomsCloset = [
  [
    // These are Thom's shirts
    "grey button-up",
    "dark grey button-up",
    "light blue button-up",
    "blue button-up",
  ],[
    // These are Thom's pants
    "grey jeans",
    "jeans",
    "Footie Pajamas"
  ],[
    // Thom's accessories
    "wool mittens",
    "wool scarf",
    "raybans"
  ]
];
console.log('Thom is looking fierce in a grey button-up, jeans and (3)!');

//IV FUNCTIONS
console.log(printGreeting("Slimer"));
console.log(printCool("Captain Reynolds"));
console.log(calculateCube(5));
console.log(isVowel("a"));
console.log(getTwoLengths("Hank", "Hippopopalous"));
console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));
console.log(maxOfThree(6, 9, 1));
console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]));


let user = [
  name= '',
  email='',
  age=12,
  purchased=[],
  location='',
];

user.age++
console.log(age);

user.friend = {
  name: "Grace Hopper",
  age: 85,
  purchased:[],
};








