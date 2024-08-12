const axios = require("axios");
const Table = require("cli-table");
const { compare } = require("compare-versions");

const url = "https://nodejs.org/dist/index.json";
const temp = process.argv.splice(2, 3);
const version = temp.length ? temp[0] : 0;

axios.get(url).then((res) => {
  const table = new Table({
    head: ["version", "date"],
  });
  const { data } = res;
  data
    ?.filter((item) => {
      let { version: itemVersion } = item;
      itemVersion = itemVersion.split("v")[1];

      const comp = compare(version, itemVersion, "<");

      return item.lts && comp;
    })
    .forEach((item) => {
      table.push([item.version, item.date]);
    });
  console.log(table.toString())
});
