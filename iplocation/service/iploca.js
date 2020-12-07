var request = require('request');


const ipl = 'https://api.ip2country.info/ip?';
const ip = 'http://localhost:3000/ip';

var iploca = {

   find: function(req, res, next) {

       
       request(ip ,

        function (error, response, body) {
 
            if (!error && response.statusCode == 200) {
 
                
                  const ipj=JSON.parse(body);
                  const lab=ipj.ip;
                  request(ipl +lab ,

                    function (error, response, body) {
             
                        if (!error && response.statusCode == 200) {
             
                            response = JSON.parse(body);
             
                            res.send(response);
             
                        } else {
             
                            console.log(response.statusCode + response.body);
             
                            res.send({iploca: NULL});
             
                        }
             
                    })
                
 
            } else {
 
                console.log(response.statusCode + response.body);
 
                
 
            }
 
        });

   }

};

module.exports = iploca;
