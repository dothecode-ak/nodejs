//core modules
// 1. http,fs,Buffer

const fs = require("fs");
fs.writeFileSync("hello.txt", "I am node js develoer");
let fileData = fs.readFileSync("./hello.txt", { encoding: "utf8", flag: "r" });
module.exports = fileData;
