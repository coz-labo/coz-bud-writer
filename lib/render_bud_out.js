/**
 * Render bud data.
 * @memberof module:coz-bud-writer/lib
 * @function renderBudOut
 * @param {Bud} bud - Bud to render.
 * @returns {Promise}
 */

'use strict'

/** @lends renderBudOut */
async function renderBudOut(buds) {
  buds = [].concat(buds)
  for (let bud of buds) {
    try {
      bud.out = bud.tmpl(bud.data || {})
    } catch (caught) {
      throw new Error(`[BudWriter] Failed to render file: "${bud.path}"\n Error: ${caught}`)
    }
  }
  return buds
}

module.exports = renderBudOut
