const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/yapi", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // user: "test1",
    // pass: "test1",
  })
  .then(() => console.log("Connected!"));
