"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let sum = '1';
//WE CAN ASSIGN THIS VALUE EITHER AS A NUMBER OR AS A STRING
let apiReqStatus = 'pending'; //<-Production Level Code Example!
let airLineSeat = "Non-WindowSeat";
// airLineSeat="IDK"//Error Obv!
airLineSeat = "windowSeat"; //we can only change according to the datatypes set during Initialization!
const Orders = ['1000', '1000000', '1000000000'];
let currentOrder;
for (let order of Orders) {
    if (order === "100000")
        currentOrder = order;
    break;
    // currentOrder='100'
}
console.log(currentOrder);
//It is  good to iniitalize the type of the variable current Order cause sometimes we might get the variable as "any" datatype,because we can assign any datatype like:number,String.. if the initial datatype would be "any" !
//we assign "any" datatype to a variable when we dont know what type of data would come from maybe an API call etc.. any is basically bypass!
//# sourceMappingURL=Union.js.map