let resp:any="100";

let numericLength:number = (resp as string).length
//here we had to do type assertion forcefully because the system wasnt sure that it is a Number,"TRUST ME BRO" kind of thing!
type book = {
    name: string;
    pages: number;
}

// Note: Valid JSON keys and strings must use double quotes: '{"name":"abc","pages":30}'
let bookString = `{"name": "abc", "pages": 30}`;
let bookObj = JSON.parse(bookString); // Leave it as 'any' or 'unknown' first

// Corrected Type Guard Function
function checkBook(b: any): b is book {
    return (
        typeof b === "object" && 
        b !== null && 
        typeof b.name === "string" && 
        typeof b.pages === "number"
    );
}

// Now safely check before using it
if (checkBook(bookObj)) {
    console.log(`Valid book: ${bookObj.name} with ${bookObj.pages} pages.`);
} else {
    console.error("Invalid book data structure!");
}


const inputElement=document.getElementbyID("username") as HTMLInputElement
//NOTE:type assertion !=type conversion!

// let val:any;
// val=[101,1333,1323]
// val=0.111
// val.toUpperCase()//no error will be shown rn,but error will be showwn in the O/P terminal!
// let newVal:unknown;
// newVal=[101,1333,1323]
// newVal=0.111
// newVal.toUpperCase()//error will be shown here as well as in the O/P terminal!