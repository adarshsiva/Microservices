'use strict';

var properties = require('../package.json')
var iploca = require('../service/iploca');

var controllers = {
   about: function(req, res) {
       var aboutInfo = {
           name: properties.name,
           version: properties.version
       }
       res.json(aboutInfo);
   },
   getiploca: function(req, res) {
           iploca.find(req, res, function(err, iploca) {
               if (err)
                   res.send(err);
               res.json(iploca);
           });
       },
     
};

module.exports = controllers;
