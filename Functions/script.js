"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function greet(name) {
    console.log(`Hello ${name}`);
} //In TypeScript we also pass types of the arguments as well as the return type of the function
greet("abc");
function getCoffeePrice(coffee) {
    switch (coffee) {
        case "Plain":
            return 20;
        case "Cappuccino":
            return 40;
        case "Cafe Latte":
            return 50;
        default:
            return 0; // Or throw an error
    }
}
console.log(getCoffeePrice("Plain"));
function logCoffee() {
    console.log("Your Coffee is ready!");
}
function OrderCoffee(type) {
    if (type)
        return `Your ${type} will be served shortly`;
    return 'Your coffee will be served shortly';
}
console.log(OrderCoffee());
console.log(OrderCoffee("Cappuccino"));
//# sourceMappingURL=script.js.map