const ffmpeg = require("fluent-ffmpeg");
const path = require("path");
const fs = require("fs");
const Table = require("cli-table");

const folderPath = "./video";
async function processVideoFile(videoFile) {
  const videoFilePath = path.join(folderPath, videoFile);

  return new Promise((resolve, reject) => {
    ffmpeg.ffprobe(videoFilePath, (err, metadata) => {
      if (err) {
        reject(err);
      } else {
        const durationInSeconds = metadata.format.duration;
        resolve([videoFile, durationInSeconds]);
      }
    });
  });
}
const table = new Table({
  head: ["文件名", "时长(秒)"],
  style: {
    compact: true,
    "padding-left": 1,
    "padding-right": 1,
  },
});
fs.readdir(folderPath, async (err, files) => {
  if (err) {
    console.log(err, "1");
  } else {

    const promises = files.map(file => processVideoFile(file));
    const reuslt  = await Promise.all(promises);

    reuslt.forEach(item => {
      table.push(item);
    })

    console.log(table.toString())
  }
});
