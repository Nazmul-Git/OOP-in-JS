
// INHERITANCE BETWEEN CLASSES
const Person= function(name, birthYear){
    this.name= name;
    this.birthYear= birthYear;
};

Person.prototype.calAge= function(){
    console.log(2024-this.birthYear);
};

const Student= function(name, birthYear, dept){
    // this.name= name;
    // this.birthYear= birthYear;
    Person.call(this, name, birthYear); //Inherit person parent class from student class -> Person.call(this keyword for newly created object, name, birthYear)
    this.dept= dept;
};
// linking prototype
Student.prototype= Object.create(Person.prototype);

Student.prototype.introduceStudent= function(){
    console.log(`My name is ${this.name} and my department is ${this.dept}`);
};


// create object
const sunny= new Student('Sunny', 1998, 'CSE');
sunny.introduceStudent();
sunny.calAge(); 

//How to work sunny.callAge() =>
/*

/////////////////  PROTOTYPE CHAINING  /////////////////////
  1. callAge not directly in sunny object and  also not in sunny's prototype. Here get, Student.prototype.

  2. Now js try to find in immediate parent class Student.But can't find here. Here get Person.prototype.
  
  3. Similarly, Student class try to find callAge function into hi parent class Person. Finally get this calAge method into Person.prototype ba person er prototype er moddhe.
*/ 


console.log(sunny.__proto__); //Person {introduceStudent: ƒ}
console.log(sunny.__proto__.__proto__); //{calAge: ƒ, constructor: ƒ}

Student.prototype.constructor=Student;
console.dir(Student.prototype.constructor);// ƒ Student(name, birthYear, dept)

console.log(sunny instanceof Student); //true
console.log(sunny instanceof Person);  //true