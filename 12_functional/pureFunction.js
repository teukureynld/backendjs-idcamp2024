const fs = require('node:fs');
try {
    fs.writeFileSync('data.txt');
    console.log("Data succes Created!");
}catch(err){
    console.log("File doesnt created!"  , err);
}