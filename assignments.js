// const country = 'USA';
// // // users country shouldn't change
// const continent = 'North America';
// // // users continent shouldn't mutate
// let usaPop = 328000000;
// // // number can change as people birthed/die
// usaPop++;
// console.log(usaPop); // 328000001

// const finlandPop = 6000000;

// if(usaPop > finlandPop) {
//     console.log('USA has larger population');
// } else {
//     console.log('Finland has a larger population');
// };

// const averagePop = 33000000;

// if(usaPop > averagePop) {
//     console.log('USA has an above average population');
// } else {
//     console.log('USA has a below average population');
// }


// // // console.log(country, continent, population);

// // const isIsland = false;
// // // const because we wouldn't want a boolean to change in this situation
// let language = 'English';

// console.log(`${country} is in ${continent}, and its ${usaPop} people speak ${language}`);

// language = 'Spanish';
// // isIsland = true; // doesn't work because we are mutating a const

// console.log(typeof isIsland); //boolean
// console.log(typeof language); //undefined

const weekday = 'Wednesday';

if (weekday === 'Monday') {
    console.log('do monday stuff');
} else if (weekday === 'Tuesday') {
    console.log('do tuesday stuff');
} else if (weekday === 'Wednesday' || 'Thursday') {
    console.log('do wednesday or thursday stuff');
} else if (weekday === 'Friday') {
    console.log('do friday stuff');
} else if (weekday === 'Saturday' || 'Sunday') {
    console.log('Enjoy the weekend');
} else {
    console.log('Not a valid day...');
}

// The same as the switch statement but with if else statements and or comparisons


