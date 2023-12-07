const account ={
    owner: 'Sunny',
    movements: [500,145,155,266,300],

    get latest(){
        return this.movements.slice(-1).pop();
    },
    set latest(mov){
        this.movements.push(mov);
    }
};
console.log(account.latest); //300
account.latest=50;
console.log(account.movements); // [ 500, 145, 155, 266, 300, 50 ]