const fs = require("fs")

fs.readFile(process.argv[2], function(err, data){
    if(!err){
        const textLines = data.toString().split("\n");
        console.log(textLines.length - 1)
    }
})