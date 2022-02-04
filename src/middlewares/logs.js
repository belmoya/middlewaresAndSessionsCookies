
const fs = require('fs');
const path = require('path');


const logPath = path.join(__dirname, '../logs/userLogs.txt')

const logRoute = (req,res,next) =>  { fs.appendFileSync(logPath, 'El usuario ingresó en:' + req.url + '\n');
 next()
 }

module.exports = logRoute;