"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
try {
}
catch (error) {
    if (error instanceof Error) {
        console.log(error.message);
    }
    else
        console.log("Error", error);
}
const data = "This is a string";
const isString = data;
//A real world testCase for try and catch:
function fetchUserData(userId) {
    if (userId < 0) {
        throw new Error("Invalid User ID: ID cannot be negative.");
    }
    if (userId === 999) {
        throw "User is banned from the system.";
    }
    return { id: userId, name: "Alice" };
}
try {
    fetchUserData(-5);
}
catch (error) {
    if (error instanceof Error) {
        console.log("Caught standard error:", error.message);
    }
    else {
        console.log("Caught an unusual error format:", error);
    }
}
function redirect(role) {
    if (role === "admin") {
        console.log("Redirecting to Admin page");
        return;
    }
    if (role === "user") {
        console.log("Redirecting to user Page");
        return;
    }
    // role //now we had the cases of admin and user both now if we try to access the role variable here it will show the datatype "never"!
    //but type never might be useful,if we miss a case like we had another role like "superadmin",so here it would have been assigned to SuperAdmin!
}
function neveEnd() {
    while (true) {
    }
}
//# sourceMappingURL=tryCatch.js.map