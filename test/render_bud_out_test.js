/**
 * Test case for renderBudOut.
 * Runs with nodeunit.
 */

var renderBudOut = require('../lib/render_bud_out.js');

exports.setUp = function(done) {
    done();
};

exports.tearDown = function(done) {
    done();
};

exports['Handle tmpl error.'] = function (test) {
    var bud = {
        tmpl: function () {
            throw new Error('foo');
        }
    };
    renderBudOut(bud, function (err) {
        test.ok(!!err);
        test.done();
    });
};
