// dicoding
const number = 123;
const string = 'Dicoding';
const empty = null;

const boolFromNumber = Boolean(123);
const boolFromString = Boolean(string);
const boolFromNull = Boolean(empty);

console.log(boolFromNumber); // output: true
console.log(boolFromString); // output: true
console.log(boolFromNull); // output: false


// me
let name  = "Teuku";
const StringToBoolean = Boolean(name);
console.log(StringToBoolean);

// jika undefine maka nilainya tetap undefined 
let notDefine = undefined;
const convertDefine = Boolean(notDefine);
console.log(notDefine);

// kenapa ini hasilnya false? menururt chatgpt, nilai daripada NaN addalah bersifat falsy
let notNaN = NaN;
const convertNaN  = Boolean(notNaN);
console.log(convertNaN);