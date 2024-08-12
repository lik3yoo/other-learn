const fs = require("fs");
const path = require("path");

// 步骤 2：读取图片到 Buffer
fs.readFile(path.resolve(__dirname, "test.png"), (err, buffer) => {
  if (err) {
    console.error("读取文件错误", err);
    return;
  }

  console.log("原始图片大小：", buffer.length);

  // 步骤 3：复制 Buffer 的一部分
  // 假设我们只复制图片数据的一部分，例如前50%
  const partLength = Math.floor(buffer.length / 2);
  const partBuffer = Buffer.alloc(partLength);
  buffer.copy(partBuffer, 0, 0, partLength);

  // 步骤 4：创建新的图片文件
  fs.writeFile(path.resolve(__dirname, 'part-of.png'), partBuffer, (err) => {
    if (err) {
      console.error("写入文件错误", err);
      return;
    }
    console.log("新图片创建成功！");
  });
});
