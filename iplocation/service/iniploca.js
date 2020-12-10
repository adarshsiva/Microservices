var request = require('request');

const ipl = 'https://api.ip2country.info/ip?';

var iniploca = {

    find: function(req, res, next) {
 
        request(ipl + req.params.address ,
 
        function (error, response, body) {
 
            if (!error && response.statusCode == 200) {
 
                response = JSON.parse(body);
                res.send(response);
 
            } else {
 
                console.log(response.statusCode + response.body);
 
                res.send({iniploca: NULL});
 
            }
 
        });
 
    }
 
 };

module.exports = iniploca;
