const fs = require("fs");
const path = require("path");

const folderPath = "./jsons";

fs.readdir(folderPath, (err, files) => {
  if (err) {
    console.log(err);
  } else {
    const jsons = [];
    files.forEach((item) => {
      const jsonPath = path.join(folderPath, item);
      const json = fs.readFileSync(jsonPath, {
        encoding: "utf-8",
      });
      jsons.push(JSON.parse(json));
    });
    const res = jsons.reduce((x, y) => {
      return Object.assign({}, x, y);
    }, {});
    console.log(res);
  }
});
