// 2. ES6 classes  to implementing prototype

// function expression
// const PersonClass= class{

// }

// Function declaration
// here, ES6 classes.. PersonClass contains constructor function and prototype/all methods & property.
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

  // STATIC METHOD
  static hey(){
    console.log('hey there..');
  }
}

// const sunny = new PersonClass("Sunny", 1998);
// sunny.calAge();
// sunny.message();
// console.log(sunny.age);

// const siam = new PersonClass("Siam", 2006);
// siam.calAge();
// siam.message();

// const javaScript= new PersonClass('Java Script', 2000);
// console.log(javaScript.age);
// console.log(javaScript);
/**
 PersonClass {_fullName: 'Java Script', birthYear: 2000}
    birthYear: 2000
    _fullName: "Java Script"

 */

// 1. Classes are not hoisted.
// 2. Classes are first-class citizen
// 3. Classes are executed in strict mode

//////////////////////// /////////////////////////////////

// create a child class 
// prototype chain automatically create by use extend 
class StudentClass extends PersonClass {
  constructor(fullName, birthYear, dept){
    // always needs to happen first
    super(fullName, birthYear); // super is the constructor function of parent class
    this.dept=dept;
  };

  introduce(){
    console.log(`My name is ${this.fullName} and i am study ${this.dept}`);
  };


};

const saiful= new StudentClass('Saiful Islam', 1999, 'EEE');
saiful.introduce(); 
saiful.calAge();
