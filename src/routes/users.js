const { name } = require("ejs");

function checkAdmin(req, res, next) {
    const admins = ['Ada', 'Greta', 'Vim', 'Tim'];
    const user = req.query.user; 
    console.log(user)
    if (user) {
        const index = admins.lastIndexOf(user);
        if (index != -1) {
            next();
        }
        else {
            res.send ('You don´t have access')
        }

     }
     else { res.send('Youy username is not valid')}
     }

module.exports = checkAdmin;