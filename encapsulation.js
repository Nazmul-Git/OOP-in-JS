class Account {
    //public field
    local= navigator.language;

    // private field
    #movements=[];

    constructor(owner, currency, pin){
        this.owner= owner;
        this.currency=currency;
        this._pin=pin;
        // this._movements=[];
        // this.local=navigator.language;
        console.log(`Thanks for opening a new account, ${this.owner}`)
    }

    // Implement more methods, each method can access other methods outside class.

    // Public Interface
    getMovements(){
        return this.#movements;
    }

    deposit(val){
        this.#movements.push(val);
    }

    withdraw(val){
        this.deposit(-val)
    }
    
    _approveLoan(val){
        return true
    }

    requestLoan(val){
        if(this._approveLoan(val)){
            this.deposit(val);
            console.log('Loan Approved')
        }
    }

};

const acc1=new Account('Sunny', 'EUR', 1111);
acc1.deposit(250);
acc1.withdraw(140);
acc1.requestLoan(1000)
acc1._approveLoan(1000)
console.log(acc1);
console.log(acc1.getMovements());
// console.log(acc1.#movements);//Uncaught SyntaxError: Private field '#movements' must be declared in an enclosing class