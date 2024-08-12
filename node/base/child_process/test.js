const fs = require("fs");
const path = require("path");

const date = new Date().toString();


fs.writeFile(path.resolve(__dirname, "./test.txt"), date, (err) => {
  if (err) {
    console.log(err);
  }
});
