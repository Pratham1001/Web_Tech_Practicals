//synchronous menu driven filesystem

const fs = require("fs");
const readline = require("readline-sync");

const readFile = () => {
  var filename = readline.question("Enter file name:");
  var output = fs.readFileSync(filename).toString();
  console.log(output);
};
const writeFile = () => {
  var filename = readline.question("Enter file name:");
  var input = readline.question("Enter input:");
  fs.writeFileSync(filename, input);
  console.log(filename);
  console.log(input);
};
const deleteFile = () => {
  var filename = readline.question("Enter file name:");
  fs.unlinkSync(filename);
  console.log(filename);
};
const appendFile = () => {
  var filename = readline.question("Enter file name:");
  var input = readline.question("Enter input:");
  fs.appendFileSync(filename, input);
  console.log(filename);
  console.log(input);
};
const renameFile = () => {
  var filename = readline.question("Enter file name:");
  var input = readline.question("Enter new file name:");
  fs.renameSync(filename, input);
  console.log(filename);
  console.log(input);
};

var flag = true;
while (flag) {
  var ch = readline.question(`
    Choose your operation:
    1. Read a file
    2. Write to a file
    3. Delete a file
    4. Append to a file
    5. Rename a file
    6. Exit 
    `);

  switch (ch) {
    case "1":
      readFile();
      break;
    case "2":
      writeFile();
      break;
    case "3":
      deleteFile();
      break;
    case "4":
      appendFile();
      break;
    case "5":
      renameFile();
      break;
    case "6":
      flag = false;
      break;
  }
}