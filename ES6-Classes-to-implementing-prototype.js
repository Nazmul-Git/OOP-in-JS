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
    };

    message(){
        console.log(`Hey... I'm ${this.firstName}`);
    }
}

const sunny =new PersonClass('Sunny', 1998);
sunny.calAge();
sunny.message();
  
const siam=new PersonClass('Siam', 2006);
siam.calAge();
siam.message();
