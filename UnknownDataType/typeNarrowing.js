"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Unknown ->u dont know the datatype yet but beore using u will bne initialising the data type !
//Type narrowing is the process of identifying the data type and then returing the data type which u identifed!
function marks(howmuch) {
    if (typeof howmuch === 'string')
        return `You got ${howmuch} marks`; //now it is guarenteed here that the datatype of "howmuch" is String
    return `You got ${howmuch} marks`; //here it is gurenteed that the datatype of howmuch is Number
}
function serveFood(serve) {
    //we used "?"" here in orer to confirm that whether the user has given some input or not!
    if (serve) {
        return "Food will be served Shortly!"; //Guarenteed that there some input in  serve
    }
    return "Please Order something first!"; //uareneed tha there is no input serve
}
function OrderPizza(PizzaSize) {
    if (PizzaSize === 'Small') {
        return "Your Small Size Pizza will be delievered shortly";
    }
    else if (PizzaSize === "Regular") {
        return "Your Regular size Pizza will be served shortly!";
    }
    else if (PizzaSize === "Large") {
        return "Your Large size Pizza will be served shortly!";
    }
    else
        return "please enter a valid option!";
} //these were some Exhaustive checks!
console.log(OrderPizza('Large'));
console.log(OrderPizza(90));
class FarmFresh {
    serve() {
        return "Serving your FarmFresh Pizza";
    }
}
class CheeseBurst {
    serve() {
        return "Serving your CheeseBurst Pizza";
    }
}
//Now both the classes have a method called "serve",now these might collide,so we need some safety checks!
function serve(Pizza) {
    if (Pizza instanceof FarmFresh) {
        return Pizza.serve(); //Now we confirmed that the serve was called from FarmFresh here!
    }
}
function checkType(check) {
    return (typeof check === "object" && check != null && typeof check.type === 'string' && typeof check.price === 'number');
}
const Pizza1 = {
    type: "pepperoni",
    price: 100
};
function ServePizza(pizza) {
    if (checkType(pizza))
        return `Your  ${pizza.type} Pizza worth ₹${pizza.price} will be served shortly!`;
    else
        return "Invalid Input,Please Try again!";
}
console.log(ServePizza(Pizza1));
// function isStringArray(array:unknown):array is String[] {
//     "unknown" is preferred here over "any"
// }
//# sourceMappingURL=typeNarrowing.js.map