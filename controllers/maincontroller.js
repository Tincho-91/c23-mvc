const path = require('path');

const mainControllers = {
main: (req,res)=> res.sendFile(path.join(__dirname, '../', 'views','home.html'))
}

module.exports = mainControllers