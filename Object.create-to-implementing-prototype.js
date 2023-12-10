// 3. Object.create() to implementing prototype
const PersonProto = {
  calAge() {
    console.log(2024 - this.birthYear);
  },

  init(name, birthYear) {
    this.name = name;
    this.birthYear = birthYear;
  },

  
};

// const sunny = Object.create(PersonProto);
// // console.log(sunny);
// sunny.name = "Sunny";
// sunny.birthYear = 1998;
// sunny.calAge();

// console.log(sunny.__proto__);
/**
 {calAge: ƒ}
   calAge: ƒ calAge()
   [[Prototype]]: Object
 */

//////////////// Manually assigning Object.create method name & birthYear convert into a function /////////////////
// const javaScript = Object.create(PersonProto);
// javaScript.init("Brendan Eich", 1995);
// javaScript.calAge(); //29

// NOTE: Object.create() - create a new object and a prototype of that object  will be the object pass in.

// inherit PersonProto
const StudentProto = Object.create(PersonProto);
// inherit init method and use it by my own modification.It's called polymorphism .
StudentProto.init = function (name, birthYear, dept) {
    PersonProto.init.call(this, name, birthYear);
    this.dept= dept;
};
StudentProto.introduce=function(){
    console.log(`My name is ${this.name} and I study ${this.dept}`)
}
const siam = Object.create(StudentProto);
siam.init('Siam', 2006, 'science');
siam.calAge(); //18
siam.introduce(); //My name is Siam and I study science


// summery: New object inherit PersonProto/parent and have stored into StudentProto , another new object inherit StudentProto. Object link to other object
