/**
 * Test for index.js
 */

"use strict";

var index = require('../lib/index.js');

exports['Eval index.'] = function(test){
    var writer = index({});
    test.ok(writer);
    test.done();
};
