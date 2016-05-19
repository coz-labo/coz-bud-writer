/**
 * Render bud data.
 * @memberof module:coz-bud-writer/lib
 * @function renderBudOut
 * @param {Bud} bud - Bud to render.
 * @returns {Promise}
 */

'use strict'

const co = require('co')

/** @lends renderBudOut */
function renderBudOut (buds) {
  buds = [].concat(buds)
  return co(function * () {
    for (let bud of buds) {
      try {
        bud.out = bud.tmpl(bud.data || {})
      } catch (caught) {
        throw new Error(`[BudWriter] Failed to render file: "${bud.path}"\n Error: ${caught}`)
      }
    }
    return buds
  })
}

module.exports = renderBudOut
