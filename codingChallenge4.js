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
      return this;
    };
  
    get speedUs(){
      return this.speed/1.6;
    }

    set speedUS(speed){
        this.speed= speed*1.6;
    }
  }


class EVcl extends CarClass{
    #charge;

    constructor(make, speed, charge){
        super(make, speed);
        this.#charge= charge;
    }

    chargeBattery(chargeTo){
        this.#charge= chargeTo;
        return this;
    }

    accelerateMethod(){
        this.speed+=20;  
        this.#charge --;
        console.log(`${this.make} is going at ${this.speed} km/h, with a charge of ${this.#charge}`);
        return this;
    }

  }

  const bmw = new EVcl("BMW", 120, 23);
  console.log(bmw);
//   console.log(bmw.#charge);//Uncaught SyntaxError: Private field '#charge' must be declared in an enclosing class
  bmw.accelerateMethod().accelerateMethod().accelerateMethod().breakMethod().chargeBattery(50).accelerateMethod();

  console.log(bmw.speedUs);
  