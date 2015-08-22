/**
 * Test case for checkBudDone.
 * Runs with nodeunit.
 */

var checkBudDone = require('../lib/check_bud_done.js');

exports.setUp = function(done) {
    done();
};

exports.tearDown = function(done) {
    done();
};

exports['Check done.'] = function (test) {
    checkBudDone({
        force: false, path: __filename
    }, function (err) {
        test.ifError(err);
        checkBudDone({
            force: false, path: __dirname + '/../../tmp/foo/bar' + new Date()
        }, function (err) {
            test.ifError(err);
            test.done();
        });
    });
};