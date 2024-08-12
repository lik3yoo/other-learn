const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "./dir/hello.txt");
const targetPath = path.join(__dirname, "./dir/target.txt");

fs.copyFile(filePath, targetPath, (err) => {
  console.log(err);
});
