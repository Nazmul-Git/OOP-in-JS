
// INHERITANCE BETWEEN CLASSES
const Person= function(name, birthYear){
    this.name= name;
    this.birthYear= birthYear;
};

Person.prototype.calAge= function(){
    console.log(2024-this.birthYear);
};

const Student= function(name, birthYear, dept){
    
}