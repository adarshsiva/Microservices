'use strict';

var properties = require('../package.json')
var ip = require('../service/ip');

var controllers = {
   about: function(req, res) {
       var aboutInfo = {
           name: properties.name,
           version: properties.version
       }
       res.json(aboutInfo);
   },
   getip: function(req, res) {
           ip.find(req, res, function(err, ip) {
               if (err)
                   res.send(err);
               res.json(ip);
           });
       },
     
};

module.exports = controllers;
