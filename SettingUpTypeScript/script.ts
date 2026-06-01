//NOTE:ANY VALID JS CODE IS ALSO VALID TS CODE IN MAJORITY OF THE CASES!
//ALSO A JS FILE WILL ALSO WILL BE MADE AS WELL FOR A TYPESCRIPT FILE!
//NOTE:TypeScript Code Never Runs:TS->Process->JS!

//PROCESS :TS CODE->Lexer->Parser->Binder->Checker->Emmiter/Generator ->JS! 
function greet(person:string):string {//we also defined the Function type and return type as well
    return `Hello ${person} how are you?`

}
const p1:string="abc";
console.log(greet(p1))