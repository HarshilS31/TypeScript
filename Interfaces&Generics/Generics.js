"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Generics are also templates
function wrapInArray(item) {
    return [item];
} //T<- Generics!   
/*<T> (The Declaration): This tells TypeScript, "Hey, this function is generic. T is a placeholder for a type that we will figure out later." (You can use any letter or word, but T stands for "Type" by convention).

(item: T) (The Input): This says the parameter item must be whatever type T turns out to be.

: T[] (The Return Type): This guarantees the function will return an array of that exact same type T.
*/
wrapInArray("Hello"); //valid
wrapInArray(90); //valid 
wrapInArray({ name: "abc", age: 19 });
function pair(a, b) {
    console.log(a, b);
    return [a, b];
}
pair("HELLO", "HOW ARE YOU?");
//# sourceMappingURL=Generics.js.map