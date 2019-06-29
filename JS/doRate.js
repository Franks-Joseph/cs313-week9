const url = require('url');

var calculateRate = require('../JS/calculateRate');
module.exports = function(req, res) {
    var variables = getVariables(req);

    var weight = variables.query.weight;
    var mailType = variables.query.mailType;

    computeRate(weight, mailType, res);
}

function getVariables(req) {
    return url.parse(req.url, true);
}