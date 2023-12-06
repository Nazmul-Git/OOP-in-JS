// Here Person is a blueprint, constructor function.
const Person=function(firstName, birthYear){
    // console.log(this); //Person {}

    // instances properties
    this.fName= firstName;
    this.bYear= birthYear;

    // NEVER USE A METHOD IN CONSTRUCTOR FUNCTION
    // this.calAge= function(){
    //     console.log(2024-birthYear);
    // }
    // SO, SOLVE IT BY USING PROTOTYPE
};

// new Person('sunny', 1998);
const sunny=new Person('sunny', 1998);
console.log(sunny); //Person { fName: 'sunny', bYear: 1998 }

//  Process of making constructor function

// 1. New {} is created
// 2. Function is called, this = {}
// 3. {} linked to prototype
// 4. Function automatically return {}

const jonas= new Person('jonas', 1990);
console.log(jonas); //Person { fName: 'jonas', bYear: 1990 }

// HERE, sunny and jonas are instance of Person.
// console.log(jonas instanceof Person); //true

// ////////////////////////////////////////////////////
// PROTOTYPE

// Each and every functions in js automatically has a property called prototype that includes constructor functions. Every object that created by a certain constructor function will get access all the methods and properties that we defined on the constructions property.

console.log(Person.prototype); //{constructor: ƒ}

// add a method
Person.prototype.calAge = function(){
    console.log(2024- this.bYear); //34
};
jonas.calAge(); //34
console.log(jonas); //Person { fName: 'jonas', bYear: 1990 }
// Jonas do not contain callAge method 

sunny.calAge(); //26
console.log(sunny); //Person { fName: 'sunny', bYear: 1998 }
// sunny do not contain callAge method 

// NOTE:Create a new person jonas and by using prototype (that include constructor function) create calAge method to calculate jonas age, but actually jonas or sunny  function do not contain this calAge method.But calAge method added in Person constructor.

console.log(Person.prototype); //{calAge: ƒ, constructor: ƒ}

// also add property
Person.prototype.gender= 'Male';
console.log(jonas.gender); //Male
console.log(sunny.gender); //Male

// sunny 
// bYear: 1998
// fName: "sunny"
// [[Prototype]]: Object
// calAge: ƒ ()
// gender: "Male"
// constructor:ƒ (firstName, birthYear)
// [[Prototype]]: Object
console.log(sunny);

console.log(sunny.__proto__); //{gender: 'Male', calAge: ƒ, constructor: ƒ}
console.log(sunny.__proto__ === Person.prototype); // true
console.log(Person.prototype.isPrototypeOf(sunny)); // true

// .prototypeOfLinkedObjects
Person.prototype.species = 'Homo Sapiens';
console.log(sunny.species);

console.log(sunny.hasOwnProperty('fName')); //true , this keyword create fName property of sunny.
console.log(sunny.hasOwnProperty('species'));//false bcz,species property not stay in sunny object. Stay into prototype.

console.log(sunny.__proto__); 
//{gender: 'Male', species: 'Homo Sapiens', calAge: ƒ, constructor: ƒ}
console.log(sunny.__proto__.__proto__); 
//{constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}
console.log(sunny.__proto__.__proto__.__proto__);//null

// NOTE: sunny.__proto__ contain all method & sunny.__proto__.__proto__ contain constructor & sunny.__proto__.__proto__.__proto__ contain null value.

console.log(Person.prototype.constructor);
/**
 ƒ (firstName, birthYear){
    // console.log(this); //Person {}

    // instances properties
    this.fName= firstName;
    this.bYear= birthYear;

    // NEVER USE A METHOD IN CONSTRUCTOR FUNCTION..
 */
