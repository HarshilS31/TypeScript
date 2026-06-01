"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Coffee {
    type;
    price;
    constructor(type, price) {
        this.type = type;
        this.price = price;
    }
    displayOrder() {
        console.log(`A ${this.type} will cost you ₹ ${this.price}`);
    }
}
const c1 = new Coffee("Cappuccino", 40);
c1.displayOrder();
//ACCESS MODIFIERS!
class Pizza {
    type;
    secretSauce; //Only accessible inside the class,we have to declae seperete functions in order to reveal them;
    shopName; //only accessible in current class and inherited classes!
    constructor(type, secretSauce, shopName) {
        this.type = type;
        this.secretSauce = secretSauce;
        this.shopName = shopName;
    }
    RevealSauce() {
        console.log(`Secret Sauce : ${this.secretSauce}`);
    }
}
class BankAcc {
    #balance = 10000000; //# -> shorthand for "private"
    getBalance() {
        return this.#balance;
    }
}
class newCoffee {
    _sugar = 2;
    get sugar() {
        return this._sugar;
    }
    set sugar(value) {
        if (value > 3)
            throw new Error("Don't have this mucn of sugar!");
    }
}
const c2 = new newCoffee();
c2.sugar(8);
//# sourceMappingURL=script.js.map