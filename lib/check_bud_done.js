/**
 * Check bud done or not.
 * @memberof module:coz-bud-writer/lib
 * @function checkBudDone
 * @param {Bud} bud - Bud to work with.
 * @param {function} callback - Callback when done.
 */
"use strict";

var async = require('async'),
    fs = require('fs');

/** @lends checkBudDone */
function checkBudDone(bud, callback) {
    async.concatSeries([].concat(bud), function (bud, callback) {
        var filename = bud.path;
        _readFile(filename, function (err, existing) {
            var unknown = (!!err) || (!existing);
            if (unknown) {
                bud.done = false;
                callback(null, bud);
                return
            }
            var skip = !bud.force && !!existing;
            if (skip) {
                bud.done = true;
                callback(null, bud);
            } else {
                bud.done = String(existing) === String(bud.out);
                callback(null, bud);
            }
        });
    }, callback);
}

function _readFile(filename, callback) {
    fs.exists(filename, function (exists) {
        if (exists) {
            fs.readFile(filename, callback);
        } else {
            callback(null, null);
        }
    });
}

module.exports = checkBudDone;