
// 3. Object.create() to implementing prototype
const PersonProto={
    calAge(){
        console.log(2024-this.birthYear);
    },

    init(name, birthYear){
        this.name= name;
        this.birthYear= birthYear;
    }
};

const sunny= Object.create(PersonProto);
console.log(sunny);
sunny.name='Sunny';
sunny.birthYear=1998;
sunny.calAge();

console.log(sunny.__proto__);
/**
 {calAge: ƒ}
   calAge: ƒ calAge()
   [[Prototype]]: Object
 */


//////////////// Manually assigning name & birthYear convert into a function /////////////////
const javaScript= Object.create(PersonProto);
javaScript.init('Brendan Eich',1995 );
javaScript.calAge(); //29