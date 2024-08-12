const fs = require("fs");
const path = require("path");

const targetFolderName = "target";
const folderName = "dir";

let folderExist = false;
let targetExist = true;

try {
  fs.accessSync(path.join(__dirname, folderName));
  folderExist = true;
  fs.accessSync(path.join(__dirname, targetFolderName));
  targetExist = false;
} catch {
  console.log("有错误");
}

if (!folderExist || !targetExist) return;

fs.cp(
  path.join(__dirname, folderName),
  path.join(__dirname, targetFolderName),
  {
    recursive: true,
  },
  (err) => {
    console.log(err);
  }
);
