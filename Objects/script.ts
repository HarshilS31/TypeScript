const Coffee = {
    type:"Classic",
    price :20,   

}
//Declaring an object in  TS
// let coffee: {
//     type:string;
//     price:number

// }
// const c1= {
//     type:"Cappuccino",
//     price:40
// }
// console.log(c1.type)
type coffee= {
    type: string;
    price: number;
    ingredients: string[]

}
const c1:coffee = {
    type:"Cappuccino",
    price:40,
    ingredients:["Milk","Sugar","CoffeePowder"]

}

type Cup ={
    size:string
}
const cup1 : Cup = {
    size:"100ml"
}

type Brew={brewTime:number}
const chai = {brewTime:5,teaLeaves:"Red Label"}
const brewCoffee : Brew = chai//now we will not get any error for an extra entry,like the type is Brew here and it contains only 1 argument brewTime but in brewCoffee we aLso gave teaLeaves as well!

type User = {
    username:string;
    password:string;

}
const u1: User ={
    username:"abc",
    password:"837498dd"

}

type item ={itemName:string; Quantity:number}
type Address={City:string; pincode:number}

type Order {
    id :string;
    items:item[];//Now instead of creating new details we used an already created type "item" all the arguments of "item" will be stored in an array as created above!
    address:Address

}
const NewCoffee =(updates:Partial<coffee>) => {
    console.log(:"Updating Coffee with",updates)
}
NewCoffee({price:40})
