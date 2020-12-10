var request = require('request');

const ipa = 'http://localhost:3000/ip';

var ip = {

    find: function(req, res, next) {
 
        request(ipa ,
 
        function (error, response, body) {
 
            if (!error && response.statusCode == 200) {
 
                response = JSON.parse(body);
                 const ipj=body.ip;
                res.send(response);
 
            } else {
 
                console.log(response.statusCode + response.body);
 
                res.send({ip: NULL});
 
            }
 
        });
 
    }
 
 };

module.exports = ip;
