const fs = require("fs");
const path = require("path");

let folderExist = false;
const dirName = "dir";
const folderPath = path.join(__dirname, dirName);

try {
  fs.accessSync(folderPath, fs.constants.F_OK);
  folderExist = true;
} catch {
  console.log("文件不存在，不需要删除");
}

if (folderExist) {
  fs.rm(folderPath, { recursive: true }, (err) => {
    console.log(err);
  });
}
