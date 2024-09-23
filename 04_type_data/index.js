let message = null;
 
console.log(message); // output: null

const name1 = { first: 'Dicoding', last: null };
const name2 = { first: 'Dicoding', last: undefined };

console.log(JSON.stringify(name1)); // output: {"first":"Dicoding","last":null}
console.log(JSON.stringify(name2)); // output: {"first":"Dicoding"}