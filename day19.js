const fs = require("fs");
console.log("1. reading file....");

//synchronous read
console.log("2. reading file...");
const data = fs.readFileSync("day40.txt", "utf8");
console.log("3. file read complete");

//async
console.log("4. Asynchronous read...");
fs.readFile("day40.txt", "utf8", (err, data) => {
  setTimeout(() => {
    console.log("5. file read");
    if (err) {
      console.log("error");
    }
  }, 4000);
});

console.log("6. end of ");
