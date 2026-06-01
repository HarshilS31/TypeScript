try{

}catch(error) {
    if(error instanceof Error) {
        console.log(error.message)

    }
    else
        console.log("Error",error)
    
}

const data:unknown="This is a string"
const isString:string=data as string

//A real world testCase for try and catch:
function fetchUserData(userId: number) {
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
    
} catch (error) {
    if (error instanceof Error) {
        console.log("Caught standard error:", error.message);
    } else {
        console.log("Caught an unusual error format:", error);
    }
}

type Role="admin" | "user"
function redirect(role:Role) :void {
    if(role==="admin") {
        console.log("Redirecting to Admin page");
        return;
    }
    if(role==="user") {
        console.log("Redirecting to user Page");
        return;
    }
    // role //now we had the cases of admin and user both now if we try to access the role variable here it will show the datatype "never"!
    //but type never might be useful,if we miss a case like we had another role like "superadmin",so here it would have been assigned to SuperAdmin!

}
function neveEnd():never {
    while(true) {
        
    }
}
