/**
 * Bud file writer.
 * @memberof module:coz-bud-writer/lib
 * @inner
 * @constructor BudWriter
 */
"use strict";


var async = require('async'),
    renderBudOut = require('./render_bud_out'),
    checkBudDone = require('./check_bud_done'),
    writeBudOut = require('./write_bud_out'),
    cozBud = require('coz-bud');

/** @lends BudWriter */
function BudWriter(config) {
    var s = this;
}

BudWriter.prototype = {
    /**
     * Write bud.
     * @param {Bud} bud - Bud to write.
     * @param {writeCallback} callback - Callback when done.
     */
    write: function (bud, callback) {
        var s = this;
        bud = [].concat(bud).map(cozBud.create);
        async.waterfall([
            function (callback) {
                process.nextTick(function () {
                    callback(null, bud);
                });
            },
            function (bud, callback) {
                renderBudOut(bud, callback);
            },
            function (bud, callback) {
                checkBudDone(bud, callback);
            },
            function (bud, callback) {
                writeBudOut(bud, callback);
            }
        ], callback);
    }
};


module.exports = BudWriter;

/**
 * Callback for bud write.
 * @memberof module:coz-bud-writer/lib
 * @inner
 * @callback writeCallback
 * @param {?Error} err - Write error.
 * @param {Bud} bud - Written bud.
 */