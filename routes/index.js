const routes = require('express').Router();

const awesomeFunction = (req, res, next) => {
    res.send('Kattia Contreras');
};

routes.get('/', awesomeFunction);
module.exports = routes;
