interface Player {
    name:string;
    club:string;
    age?:number;
    readonly Rating?:number;

}//used to shape objects 
const p1:Player ={name:"Mbappe",club:"ReaL Madrid",age:27};
const p2 :Player={name:"Haaland",club:"Man City",age:25}
const p3 :Player={name:"Kane",club:"Bayern",age:31}


interface DiscountCalc {
    (price:number):number
}//FUNCTION TYPE SIGNATURES!
const d1:DiscountCalc =(p)=>p*0.8
const discount =d1(4);
console.log(discount)