'use strict';

const controller = require('./controller');

module.exports = function(app) {
   app.route('/about')
       .get(controller.about);
   app.route('/iploca')
       .get(controller.getiploca);
   app.route('/ip')
       .get(controller.getip);
   app.route('/iniploca/:address')
       .get(controller.getiniploca);
};