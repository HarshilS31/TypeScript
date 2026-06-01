const arr:number[]=[1,101,10101,1010101]//unlike JS,if we defined the data type of array,we cannot pass ant other datatype into an array!
const rating:Array<number> =[1.2,5,9,8,6]//another way of defining array

type Coffee ={
    type:string;
    price:number;
    sugarLevel:"low" | "med" | "high"
    }
const CoffeTypes: Array<Coffee> =[{type:"Plain",price:20,sugarLevel:"low"},{type:"Cappuccino",price:40,sugarLevel:"med"}]

//ReadOnly arrays->Once defined,can't be modified!
const Citeies: readonly string[] =["Delhi","Boston","Madrid","Manchester","Milan"]
// cities.push("Birmingham"),cant do that!!

const grid:number[][] =[[1,36,62,222677,7],[7,8,1,3]]//2D array
let coffeeTuple:[string,number];
coffeeTuple=["Plain",20];
console.log(coffeeTuple)

const coordinates:readonly [number,number,number]=[1083.611,-9862.43,112.42]//READ ONLY TUPLE

const pizza:[type:string,price:number,thickCrust?:boolean]=["CheeseBurst",200,false]//namd tuples!

enum CupSize {
    SMALL,
    MEDIUM,
    LARGE
}
const size =CupSize.LARGE
//An Enum (short for enumeration) is a special feature in TypeScript that allows you to define a set of named constants. Think of it as a way to create a collection of related choices that are easy to read and type-safe.

// enum WeekDays  {
//     Sunday = 1,
//     Monday,//by default 2
//     Tuesday,//3
//     Wednesday,//4
//     Thursday,//5
//     Friday,//6
//     Saturday//7

// }
enum CoffeeType {
    plain="PLAIN",
    espresso="ESPRESSO",
    latte="LATTE",
    cappuccino="CAPPUCCINO"
    //IT'S A GOOD PRACTICE TO KEEP THE ENUM ENTRIES UPPERCASED!
    //key:value!
}
console.log(CoffeeType.plain)
//In real-world applications, String Enums are usually preferred because they are much easier to debug. Instead of printing an obscure number like 1 or 200 in your console or database logs, they print readable text.
function makeCoffee(type:CoffeeType) {
    console.log(`Making ${type}`)
}
makeCoffee(CoffeeType.cappuccino)//you have to pass it like that only in case of Enums
let c1: [string,number]=["burger",50]
c1.push("Pizza")
console.log(c1)