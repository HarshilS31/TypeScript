// function makeCoffee(order: {type:string; sugaeLevel:number,strong:boolean}){
//     console.log(order)

// }
// function serveCoffee(order:{type:string,sugarLevel:number,strong:boolean}) {
//     console.log(order);


// }
//now instead of passing this long object sort of thing again and again,we can make a type of these!

type Coffee = {
    type:string,
    sugarLevel:number,
    strong:boolean,
}
function OrderCoffee(order:Coffee):void {
    console.log(`we will deliever your ${order.type} shortly!`);
    return;
}

const c1={
    type:"Cafe Latte",
    sugarLevel:3,
    strong:false
}
console.log(OrderCoffee(c1))


type CoffeeRecipie={
    Milk:number,
    sugar:number,
    CoffeePowder:number,
}


class Mocha implements CoffeeRecipie {
    Milk=100;
    sugar=2;
    CoffeePowder=1;
    
}
// // type cupSize="small" | "medium" | "large"

// class Coffee2 implements cupSize {
//     // implementation is not allowed for Customised types,so we will be needing an interface here!

// }

interface cupSize{
    size: "small" | "medium" |"large"
}//Syntax for an interface!

class Coffee2 implements cupSize {
    size: "small" | "medium" |"large" ="large"

}

interface response { ok :true | false }
class resp implements response{
    ok=true
}
type CoffeeType2 = "Plain" |"Mocha" |"Latte"//UNION
const Ordcf=(t:CoffeeType2)=>{
    console.log(t)

}
Ordcf("Plain")

type Ingredient1= {
    flavour:String

    
}
type Ingredient2= {
    Milk:number
}

type Coffee3 = Ingredient1 & Ingredient2//TYPE MADE USING INTERSECTION OF 2 TYPES!
type User ={
    username:string,
    age ?:number
}// ? -> optional entry!
const user1:User = {username:"abc"}
const user2:User = {username:"def",age:19}
type login = {
    readonly username:string,
    email:string;
    password:string
}//readonly entry which means once initailzed then cant be changed!
