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
console.log(jonas instanceof Person); //true