import readline from "readline";

const rl =readline.createInterface({
    input: process.stdin,      //read
    output:process.stdout      //write
})
const todos=[];
const showMenu =()=>{
    console.log("\n 1:Add a Task");
    console.log("\n 2:View Task");
    console.log("\n 3:Exit");
    rl.question("Choose an option: ",handleInput);
}

const handleInput=()=>{
    
}
showMenu();