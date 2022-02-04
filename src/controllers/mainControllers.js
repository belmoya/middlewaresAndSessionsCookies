const res = require('express/lib/response');
const path = require('path');




const controller = {
    index: (req, res) => {
        res.render('index')
    },
    user: (req, res) => {
        res.send('hola Ada')
    },
    login: (req, res) => {
        res.render('login')
    },
    processLogin: (req,res) => {
        let errors = validationResult(req);
        if (erorrs.isEmpty()) {

        }
        else {
            return res.render('login', {error})
        }
    }

}

module.exports = controller;