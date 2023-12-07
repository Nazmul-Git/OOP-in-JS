
// 3. Object.create() to implementing prototype
const PersonProto={
    calAge(){
        console.log(2024-this.birthYear);
    }
};

const sunny= Object.create(PersonProto);
console.log(sunny);
sunny.name='Sunny';
sunny.birthYear=1998;
sunny.calAge();