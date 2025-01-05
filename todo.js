import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin, //read
  output: process.stdout, //write
});
const todos = [];
const showMenu = () => {
  console.log("\n1:Add a Task");
  console.log("2:View Task");
  console.log("3:Exit");
  rl.question("Choose an option: ", handleInput);
};

const handleInput = (opt) => {
  if (opt === "1") {
    rl.question("Enter the task: ", (task) => {
      todos.push(task);
      console.log( task);
      showMenu();
    });
  } else if (opt === "2") {
    console.log("\n your todo list");
    todos.forEach((task, index) => {
      console.log(`${index + 1}. ${task}`);
    });
    showMenu();
  } else if (opt === "3") {
    console.log("GoodBye!!");
    rl.close();
  } else {
    console.log("invalid option");
    showMenu();
  }
};
showMenu();
