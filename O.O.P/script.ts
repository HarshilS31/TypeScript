class Coffee {
    type:string;
    price:number;
    constructor(type:string,price:number) {
        this.type=type;
        this.price=price;
    }
    displayOrder() {
        console.log(`A ${this.type} will cost you ₹ ${this.price}`)
    }

}
const c1 = new Coffee("Cappuccino",40);
c1.displayOrder()


//ACCESS MODIFIERS!
class Pizza {
    public type:string;
    private secretSauce:string;//Only accessible inside the class,we have to declae seperete functions in order to reveal them;
    protected shopName:string;//only accessible in current class and inherited classes!
    constructor(type:string,secretSauce:string,shopName:string) {
        this.type=type;
        this.secretSauce=secretSauce
        this.shopName=shopName
    }
    RevealSauce() {
        console.log(`Secret Sauce : ${this.secretSauce}`)
    }

}
class BankAcc {
    #balance=10000000//# -> shorthand for "private"
    getBalance() {
        return this.#balance
    }
}
class newCoffee {//making getter and setter for private data types!
    private _sugar =2;
    get sugar() {
        return this._sugar
    }
    set sugar(value:number) {
        if(value>3) throw new Error("Don't have this mucn of sugar!")
    }
}
const c2 = new newCoffee()\;
c2.sugar(8)