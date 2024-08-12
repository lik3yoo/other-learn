const fs = require("fs");

fs.rename("rename/father/son", "rename/father/son2", (err) => {
  if (err) throw err;
  console.log("renamed complete");
});
