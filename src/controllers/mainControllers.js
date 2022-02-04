const res = require('express/lib/response');
const path = require('path');

const controller = {
    index: (req, res) => {
        res.render('index')
    },
    user: (req, res) => {
        res.send('hola Ada')
    }

}

module.exports = controller;