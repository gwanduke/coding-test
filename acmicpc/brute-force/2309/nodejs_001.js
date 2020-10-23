
// multi line
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];
rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  console.log(input);
  process.exit();
});

function solve(input) {
  const heights = input.split('\n');
  
}