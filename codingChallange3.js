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
  Car.call(this, make, speed); //Inside function expression,this keyword did not work.So use Car.call to call the Car constructor function.
  this.charge = charge;
};
// link the prototype
EV.prototype = Object.create(Car.prototype);
EV.prototype.chargeBattery=function(chargeTo){
    this.charge=chargeTo;
};

const bmw = new Car("BMW", 120);
const mercedes = new Car("Mercedes", 95);

const tesla = new EV("tesla", 150, 23);
tesla.chargeBattery(90);
console.log(tesla); //EV { make: 'tesla', speed: 150, charge: 23 }
tesla.breakMethod();