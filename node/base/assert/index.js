const assert = require("assert");

const num = 0;
const str = "0";
const message = "这是个错误";
const obj1 = {
  name: "name",
  children: [
    {
      name: "c-1",
    },
    {
      name: "c-2",
    },
  ],
};
const obj2 = {
  name: "name",
  children: [
    {
      name: "c-1",
    },
    {
      name: "c-2",
    },
    {
      name: "c-3",
    },
  ],
};

// assert(value, message);

assert.deepEqual(obj1, obj2, message);

