/**
 * Test case for writeBudOut.
 * Runs with nodeunit.
 */

var writeBudOut = require('../lib/write_bud_out.js');

exports.setUp = function(done) {
    done();
};

exports.tearDown = function(done) {
    done();
};

exports['Do write.'] = function (test) {
    writeBudOut({
        mode: '644',
        path: __dirname + '/../tmp/foo.html'
    }, function (err) {
        test.ifError(err);
        test.done();
    });
};
