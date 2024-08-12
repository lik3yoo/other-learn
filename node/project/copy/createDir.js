const fs = require("fs");
const path = require("path");

const dirName = "dir";
const folderPath = path.join(__dirname, dirName);

let folderExist = false;
try {
  fs.accessSync(folderPath, fs.constants.F_OK);
  folderExist = true;
} catch {
  console.log("文件夹不存在");
}

if (folderExist) {
  console.log("文件已经存在");
} else {
  fs.mkdir(dirName, (err) => {
    console.log(err);
  });
}
