////// Intro ///////

// let js = 'amazing';
// console.log(32+43+222-389);

// console.log('Marcus');
// // just reviewing values
// // nice to get back to the basics to master React
// // you can store values in variables to use them over and over again

// let firstName = 'Marcus';
// let first = 'See';
// let firstNameDog = 'Skywalker';
// let first_name_person = 'bobby';
// // this is declaring a variable
// // it stores that value inside that variable
// console.log(firstName);
// // instead of passing a literal value we call the variable name
// console.log(firstName);
// console.log(firstName);
// // you can change a variable name once and it will change in all places used
// // without variables you would have to change it everywhere

// // camelCase is a naming convention

// //let 3years = 3; this is an invalid or unexpected error token due to the name of the variable
// // marcus&see = 'ms'; this also doesn't work due to the & sign
// // let new = 27; this doesn't work because new is a reserved key word
// // let function = 56; this will not work but $function will
// // let Person = 'Steven'; another naming convention-all names should start lower case
// let PI = 3.135; 

// // REMEMBER TO WRITE YOUR VARIABLE NAMES IN A DESCRIPTIVE WAY
// let myFirstJob = 'Recreational Aide';
// let myCurrentJob = 'Developer';
// // the above example makes more descriptive
// let job1 = 'rec aide';
// let job2 = 'developer';

// console.log(myCurrentJob);

// let javascriptIsFun = true;
// console.log(javascriptIsFun);
// // a boolean value with a type of true

// console.log(typeof true); // boolean
// console.log(typeof javascriptIsFun); // boolean
// console.log(typeof 'Marcus'); // string
// console.log(typeof 30); // number
// // typeof shows the type of whatever you are calling

// javascriptIsFun = 'YUP it is!';
// console.log(javascriptIsFun);
// console.log(typeof javascriptIsFun);
// // the value changed but the previous value/typeof still returns as true/boolean;

///// Data Types //////

// let year;
// console.log(year);
// console.log(typeof year);
// // returns undefined

// year = 1991;
// console.log(typeof year);
// // number

// console.log(typeof null);
// // typeof is object
// // error. null is not an object.

////// Var, Let and Const //////

// let age = 30;
// age = 31;
// // with let you can reassign/mutate a value to the variable

// const birthYear = 1990;
// // birthYear = 1990; 
// // error/immutable 
// // const dog;
// // error missing initalizer

// // Always use const by default to help from causing bugs do unwanted mutation unless you know you variable is supposed to change.
// // var shouldn't be used

// var job = 'programmer';
// job = 'teacher';

// lastName = 'Edralin';
// console.log(lastName);
// // this works but JS creates a property on the global object by not declaring the variable

// Operators //

// Math operators
// const now = 2021;
// const ageMarcus = now - 1990;
// const ageSee = now - 1994;
// console.log(ageMarcus, ageSee);

// console.log(ageMarcus * 2, ageMarcus / 10, 2 ** 3);
// // 2 ** 3 means two to the power of three 3 = 2 * 2 * 2

// const firstName = 'Marcus';
// const lastName = 'Edralin';
// console.log(firstName + ' ' + lastName);
// // concatenation

// // Assignment Operators
// let x = 23 + 3; // 26
// x += 12; // x = x + 12 = 38
// x *= 2; // x = x * 2 = 76
// x++; // x = x + 1 = 77
// x--; // x = x - 1 = 76
// console.log(x);

// // Comparison Operators
// console.log(ageMarcus > ageSee); // true < > <= >=
// console.log(ageSee >= 18); // true 

// const isFullAge = ageSee >= 18;

// console.log(now - 1990 > now - 1994);
// // JS doesn't work left to right
// // handles the math operations then the comparison operation

// Operator Precedance //

// const now = 2021;
// const ageMarcus = now - 1990;
// const ageSee = now - 1994;

// console.log(now - 1990 > now - 1994);

// let x, y;
// x = y = 10 - 5 - 1;
// console.log(x,y);
// // assignment operators happen right to left
// // 10 - 5 = 5 - 1 = 4 = y = x //
// // x and y = 4

// const averageAge = (ageMarcus + ageSee) / 2;
// console.log(ageMarcus, ageSee, averageAge);
// // PEMDAS applies here

// Strings and Template Literals //

const firstName = 'Marcus';
const job = 'frontend web developer';
const birthYear = 1990;
const year = 2021;

const intro = () => {
    console.log(`I am ${firstName}, a ${year - birthYear} year old ${job}.`);
};

intro();

console.log(`You can use backticks for all strings too!`);

console.log('String with\n\
multiple \n\
lines');

console.log(`String
with
multi-lines
using
backticks`);












