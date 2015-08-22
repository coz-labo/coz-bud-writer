/**
 * Render bud data.
 * @memberof module:coz-bud-writer/lib
 * @function renderBudOut
 * @param {Bud} bud - Bud to render.
 * @param {function} callback - Callback when done.
 */

"use strict";

var async = require('async');

/** @lends renderBudOut */
function renderBudOut(bud, callback) {
    async.concatSeries([].concat(bud), function (bud, callback) {
        var out = null,
            error = null;
        try {
            out = bud.tmpl(bud.data || {});
        } catch (caught) {
            error = new Error('[BudWriter] Failed to render file: "' + bud.path + '"\n Error:' + caught);
        } finally {
            bud.out = out;
            callback(error, bud);
        }
    }, callback);
}

module.exports = renderBudOut;