class Account {
    constructor(owner, currency, pin){
        this.owner= owner;
        this.currency=currency;
        this.pin=pin;
        this.movements=[];
        this.local=navigator.language;
        console.log(`Thanks for opening a new account, ${this.owner}`)
    }
};

const acc1=new Account('Sunny', 'EUR', 1111);
console.log(acc1);