// 2. ES6 classes  to implementing prototype

// function expression
// const PersonClass= class{

// }

// Function declaration
class PersonClass {
    constructor(firstName, birthYear){
        this.firstName= firstName;
        this.birthYear= birthYear;
    };
    calAge(){
        console.log(2024-this.birthYear);
    }
}

const sunny =new PersonClass('Sunny', 1998);
sunny.calAge();
