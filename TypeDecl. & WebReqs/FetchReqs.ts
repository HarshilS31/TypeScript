

interface Todo {
    userId:number;
    id:number;
    title:string;
    completed:boolean;

}
const fetchData= async ()=>{
    try{
        const resp =await fetch("https://jsonplaceholder.typicode.com/todos/1")
        if(!resp.ok) {
            throw new Error(`HTTP Error: ${resp.status}`);
        }
        const data:Todo = await resp.json();
    }catch(error:any) {
        console.log(error.message);

    }
}