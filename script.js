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

// const firstName = 'Marcus';
// const job = 'frontend web developer';
// const birthYear = 1990;
// const year = 2021;

// const intro = () => {
//     console.log(`I am ${firstName}, a ${year - birthYear} year old ${job}.`);
// };

// intro();

// console.log(`You can use backticks for all strings too!`);

// console.log('String with\n\
// multiple \n\
// lines');

// console.log(`String
// with
// multi-lines
// using
// backticks`);

// If Else Statements

// const age = 14;

// if(age >= 18) {
//     console.log(`${age} years old, is old enough to drive 🚗`);
// } else {
//     const yearsLeft = 18 - age;
//     console.log(`${age} years old is NOT old enough to drive 🤷‍♀️. \n\Wait ${yearsLeft} years to drive.`);
// }
// The if condition code block occurs as long as the argument is truthy
// The else condition code block occurs as long as the agrument is falsy
// This gives you a controlled structure that will execute code based on conditions

// const birthYear = 1990;

// let century;

// if(birthYear <= 2000) {
//     century = 20;
// } else {
//     century = 21;
// }

// console.log(century);

// Type Conversion //

// const inputYear = '1990';
// console.log(Number(inputYear));
// The Number() function converts a string to a number. 
// This doesn't mutate the original variable
// console.log(Number(inputYear) + 18);

// console.log(Number('Jonas'));
// NaN-Not a number
// console.log(typeof NaN);
// The typeof function shows you what type of value something is
// NaN means an invalid number

// console.log(String(30), 30);
// The String() function converts a value to a string.

//JS can only convert to 3 types, a number, a string or a boolean.

// Type Coercion //

// This occurs whenever an operator is dealing two values that have different types
// JS behind the scenes will convert one value to match the other so the operation can be executed.

// console.log('I am ' + 30 + ' years old');
// console.log('I am ' + '30' + ' years old');
// console.log('I am ' + String(30) + ' years old');

// The plus (+) operator knows to convert the number to a string. This is built in coercion done by JavaScript. The results are the same.
// The same occurs in string template literals.

// console.log('34' - '23' - 10);

// JS converted the strings to numbers via the (-) operator.

// console.log('34' + '23' + 10);

// JS did the opposite and converted everthing to stings and concatenated them.

// console.log('23' * '2');
// console.log('23' / '2');
// console.log('23' > '18');

// JS converts all of these strings to numbers using (*, /, >);
// The only way this doesn't occur is when using the (+) operator.

// let n = '1' + 1;
// // 11
// n = n - 1;
// // 11 - 1
// console.log(n);
// 10

// Truthy and Falsy Values //

// 5 falsy values: 0, '', undefined, null, NaN
// These are falsy values when converted to a boolean

// console.log(Boolean(0)); // F
// console.log(Boolean(undefined)); // F
// console.log(Boolean('Marcus')); // T
// console.log(Boolean({})); // T
// console.log(Boolean('')); // F

// // We are asking if these values ran in the function Boolean() are truthy.
// // Basically asking if they are present

// const money = 0;
// if (money) {
//     console.log("Don't spend it all!")
// } else {
//     console.log("You should get a job!")
// }

// // We are asking if the variable money is truthy then don't spend otherwise get a job if you have a falsy value for money.
// // In turn the else block exectures because it is falsy (0).

// let height = 0;
// if (height) {
//     console.log('Woot! Height is DEFINED.')
// } else {
//     console.log('Uh Oh! Height is UNDEFINED.')
// }

// The variable height has no value so it is undefined. In turn the ELSE block executes as height is not a truthy value.

// Equality Operators == VS === //

const age = '18';
// = is the assignment operator, === is a strict comparison operator
if (age === 18) console.log('You are an adult :D (strict)');
// This returns a true or false value only if both sides are exactly the same.
if (age == 18) console.log('You are an adult :D(loose)');
// This does type coercion to the values even though '18' is a string it is still equal to 18 the number.

//When comparing values use === rather than == 

const favNum = Number(prompt('What is your favorite number?'));
// prompt returns a string so we use Number() to convert it to a number
console.log(favNum); // whatever the user inputs
console.log(typeof favNum); //string

if (favNum === 36) {
    console.log("Hey! Thats my favorite number too!");
} else if (favNum === 7) {
    console.log("Whoa! Thats my fiance's favorite number!")
} else if (favNum === 5) {
    console.log("Thats how old my dogs are!")
} else {
    console.log("Not OUR favorite numbers...")
}
// This converts the string value entered in the prompt function by the user to a number and then compares favNum to the number 36.

if (favNum !== 36) console.log('Why not 36?');

// This is the not equals strict operator 

















