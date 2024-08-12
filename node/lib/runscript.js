const runScript = require("runscript");

runScript("node -v", { stdio: "pipe" })
  .then((stdio) => {
    console.log(stdio);
  })
  .catch((err) => {
    console.error(err);
  });
