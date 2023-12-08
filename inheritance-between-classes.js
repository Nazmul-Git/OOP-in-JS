
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

Student.prototype.introduceStudent= function(){
    console.log(`My name is ${this.name} and my department is ${this.dept}`);
};


// create object
const sunny= new Student('Sunny', 1998, 'CSE');
sunny.introduceStudent();
