class Account {
    constructor(owner, currency, pin){
        this.owner= owner;
        this.currency=currency;
        this.pin=pin;
        this.movements=[];
        this.local=navigator.language;
        console.log(`Thanks for opening a new account, ${this.owner}`)
    }

    deposit(val){
        this.movements.push(val);
    }

    withdraw(val){
        this.deposit(-val)
    }
};

const acc1=new Account('Sunny', 'EUR', 1111);
acc1.deposit(250);
acc1.withdraw(140);

console.log(acc1);