/**
 * Use a constructor function to implement a car.A car has a make and a speed property.The speed property is the current speed of the car in km/h. 
 * Implement a accelerate method that will increase the car speed 10 and log the new speed to the console.
 * Implement a break method that will decrease the car speed by 5 and log the new speed to the console.
 * Create 2 car objects and experiment with calling accelerate and break multiple times of each of them.
 * 
 * DATA CAR: 'BMW' going at 120km/h
 * DATA CAR: 'Mercedes' going at 95km/h
 */

const Car= function(make, speed){
   this.make= make;
   this.speed= speed;
};

Car.prototype.accelerateMethod= function(){
    console.log(`${this.make} is going on ${this.speed+=10} km/h`);
};

Car.prototype.breakMethod= function(){
   console.log(`${this.make} is going on ${this.speed-=5} km/h`);
}
const bmw= new Car('BMW', 120);
const mercedes= new Car('Mercedes', 95);

bmw.accelerateMethod();
bmw.accelerateMethod();
bmw.breakMethod();
bmw.accelerateMethod();

mercedes.accelerateMethod();
mercedes.accelerateMethod();
mercedes.accelerateMethod();
mercedes.breakMethod();
