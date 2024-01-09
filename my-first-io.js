const fs = require('fs')

const buf = fs.readFileSync(process.argv[2]);
const textLines = buf.toString().split("\n");
console.log(textLines.length - 1)