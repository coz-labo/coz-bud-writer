/**
 * Write bud out into file.
 * @memberof module:coz-bud-writer/lib
 * @function writeBudOut
 * @param {Bud} bud - Bud to work with.
 * @param {function} callback - Callback when done.
 */

"use strict";

var async = require('async'),
    writeout = require('writeout');

/** @lends writeBudOut */
function writeBudOut(bud, callback) {
    async.concatSeries([].concat(bud), function (bud, callback) {
        var done = bud.done;
        if (done) {
            callback(null, bud);
            return;
        }
        var filename = bud.path;
        writeout(filename, bud.out, {
            mkdirp: bud.mkdirp,
            mode: bud.mode,
            force: true
        }, function (err) {
            bud.at = new Date();
            callback(err, bud);
        });
    }, callback);
}

module.exports = writeBudOut;