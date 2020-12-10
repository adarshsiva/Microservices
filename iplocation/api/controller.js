'use strict';

var properties = require('../package.json')
var iploca = require('../service/iploca')
var ip = require('../service/ip')
var iniploca = require('../service/iniploca')


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
   getip: function(req, res) {
       ip.find(req, res, function(err,ip) {
           if (err) 
              res.send(err);
           res.json(ip);
       });
   },
   getiniploca: function(req, res) {
    iniploca.find(req, res, function(err,iniploca) {
        if (err) 
           res.send(err);
        res.json(iniploca);
    });
},
     
};

module.exports = controllers;
