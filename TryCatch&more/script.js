"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let resp = "100";
let numericLength = resp.length;
// Note: Valid JSON keys and strings must use double quotes: '{"name":"abc","pages":30}'
let bookString = `{"name": "abc", "pages": 30}`;
let bookObj = JSON.parse(bookString); // Leave it as 'any' or 'unknown' first
// Corrected Type Guard Function
function checkBook(b) {
    return (typeof b === "object" &&
        b !== null &&
        typeof b.name === "string" &&
        typeof b.pages === "number");
}
// Now safely check before using it
if (checkBook(bookObj)) {
    console.log(`Valid book: ${bookObj.name} with ${bookObj.pages} pages.`);
}
else {
    console.error("Invalid book data structure!");
}
//# sourceMappingURL=script.js.map