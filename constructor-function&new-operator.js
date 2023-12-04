
const Person=function(firstName, birthYear){
    // console.log(this); //Person {}
    this.fName= firstName;
    this.bYear= birthYear;
};

// new Person('sunny', 1998);
const sunny=new Person('sunny', 1998);
console.log(sunny); //Person { fName: 'sunny', bYear: 1998 }

//  Process of making constructor function

// 1. New {} is created
// 2. Function is called, this = {}
// 3. {} linked to prototype
// 4. Function automatically return {}