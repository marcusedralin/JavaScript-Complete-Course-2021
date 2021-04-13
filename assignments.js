const country = 'USA';
// users country shouldn't change
const continent = 'North America';
// users continent shouldn't mutate
let population = '328 Million';
// number can change as people birthed/die

// console.log(country, continent, population);

const isIsland = false;
// const because we wouldn't want a boolean to change in this situation
let language = 'English';

language = 'Spanish';
// isIsland = true; // doesn't work because we are mutating a const

console.log(typeof isIsland); //boolean
console.log(typeof language); //undefined


