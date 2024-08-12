const fs = require("fs");
const path = require("path");

const text = "Hello world";
const fileName = "hello.txt";
const folderPath = "./dir";
const filePath = path.join(__dirname, folderPath, fileName);

fs.writeFile(filePath, text, (err) => {
  console.log(err);
});
