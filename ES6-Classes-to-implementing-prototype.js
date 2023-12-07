// 2. ES6 classes  to implementing prototype

// function expression
// const PersonClass= class{

// }

// Function declaration
class PersonClass {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  calAge() {
    console.log(2024 - this.birthYear);
  }

  message() {
    console.log(`Hey... I'm ${this.firstName}`);
  }

  get age() {
    return 2024 - this.birthYear;
  }

  set fullName(name) {
    console.log(name);
    if(name.includes(' ')) this._fullName=name;
    else alert(`${name} is not a full name !`); 
  }
}

const sunny = new PersonClass("Sunny", 1998);
sunny.calAge();
sunny.message();
console.log(sunny.age);

const siam = new PersonClass("Siam", 2006);
siam.calAge();
siam.message();

const javaScript= new PersonClass('Java Script', 2000);
console.log(javaScript.age);
console.log(javaScript);
/**
 PersonClass {_fullName: 'Java Script', birthYear: 2000}
    birthYear: 2000
    _fullName: "Java Script"

 */