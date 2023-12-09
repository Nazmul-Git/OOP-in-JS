const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerateMethod = function () {
  console.log(`${this.make} is going on ${(this.speed += 10)} km/h`);
};

Car.prototype.breakMethod = function () {
  console.log(`${this.make} is going on ${(this.speed -= 5)} km/h`);
};

const EV = function (make, speed, charge) {
  Car.call(this, make, speed); //Inside function expression,this keyword did not work.So use Car.call to call the Car constructor function and use.
  this.charge = charge;
};
// link the prototype
EV.prototype = Object.create(Car.prototype);
EV.prototype.chargeBattery=function(chargeTo){
    this.charge=chargeTo;
};

// If we comment accelerateMethod inside EV's prototype then tesla.accelerateMethod(); inherit on the accelerateMethod() which in the- Car's/parent prototype.Always inherit the nearest parent if they have similar method or property.That is polymorphism.
EV.prototype.accelerateMethod= function(){
    this.speed += 20;
    this.charge --;
    console.log(`${this.make} is going at ${this.speed} km/h, with a charge of ${this.charge}`);
};

const bmw = new Car("BMW", 120);
const mercedes = new Car("Mercedes", 95);

const tesla = new EV("tesla", 150, 23);
tesla.chargeBattery(90);
console.log(tesla); //EV { make: 'tesla', speed: 150, charge: 23 }
tesla.breakMethod();
tesla.accelerateMethod();