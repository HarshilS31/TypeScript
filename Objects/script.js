"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Coffee = {
    type: "Classic",
    price: 20,
};
const c1 = {
    type: "Cappuccino",
    price: 40,
    ingredients: ["Milk", "Sugar", "CoffeePowder"]
};
const cup1 = {
    size: "100ml"
};
const chai = { brewTime: 5, teaLeaves: "Red Label" };
const brewCoffee = chai; //now we will not get any error for an extra entry,like the type is Brew here and it contains only 1 argument brewTime but in brewCoffee we aLso gave teaLeaves as well!
const u1 = {
    username: "abc",
    password: "837498dd"
};
//# sourceMappingURL=script.js.map