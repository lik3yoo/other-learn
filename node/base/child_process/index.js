const { spawn } = require("child_process");
const os = require("os");

// 根据操作系统选择命令
const command = os.platform() === "win32" ? "dir" : "ls";
const args = os.platform() === "win32" ? [] : ["-lh", "."];

// 执行命令
const childProcess = spawn(command, args);

// 处理标准输出（stdout）
childProcess.stdout.on("data", (data) => {
  console.log(`标准输出：\n${data}`);
});

// 处理标准错误（stderr）
childProcess.stderr.on("data", (data) => {
  console.error(`标准错误：\n${data}`);
});

// 监听进程退出事件
childProcess.on("close", (code) => {
  console.log(`子进程退出，退出码 ${code}`);
});
