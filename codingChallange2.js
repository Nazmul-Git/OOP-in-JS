class CarClass {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  };

  accelerateMethod() {
    console.log(`${this.make} is going on ${(this.speed += 10)} km/h`);
  };

  breakMethod() {
    console.log(`${this.make} is going on ${(this.speed -= 5)} km/h`);
  };

  get speedUs(){
    return this.speed/1.6;
  }
}
const bmw = new CarClass("BMW", 120);
console.log(bmw.speedUs);
bmw.accelerateMethod();
bmw.accelerateMethod();
bmw.accelerateMethod();

bmw.breakMethod();
bmw.speedUs=50;
console.log(bmw);
