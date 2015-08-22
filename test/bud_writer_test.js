/**
 * Test case for budWriter.
 * Runs with nodeunit.
 */

var BudWriter = require('../lib/bud_writer.js');

exports.setUp = function(done) {
    done();
};

exports.tearDown = function(done) {
    done();
};

exports['Write a bud.'] = function (test) {
    var bud = {
        tmpl: function () {
            return 'foo'
        },
        done: false,
        mkdirp: true,
        path: __dirname + '/../tmp/bar/baz/bud_written.txt'
    };
    new BudWriter().write(bud, function (err, bud) {
        test.ifError(err);
        test.ok(bud);
        test.done();
    });
};

