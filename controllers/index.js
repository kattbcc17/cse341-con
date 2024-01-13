const routes = require("../routes");

const awesomeFunction = (req, res, next) => {
    res.send('Kattia Contreras');
};

const myController = require('../controllers');

routes.get('/', myController.awesomeFunction);

module.exports = {awesomeFunction};