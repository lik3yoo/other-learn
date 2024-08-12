const fs = require("fs");
const path = require("path");

const sourceFile = path.join(__dirname, "./dir/hello.txt");
const targetFile = path.join(__dirname, "./dir/target2.txt");

const read = fs.createReadStream(sourceFile);
const target = fs.createWriteStream(targetFile);

read.pipe(target);
