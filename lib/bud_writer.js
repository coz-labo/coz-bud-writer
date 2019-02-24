/**
 * Bud file writer.
 * @memberof module:coz-bud-writer/lib
 * @inner
 * @constructor BudWriter
 */
'use strict'

const renderBudOut = require('./render_bud_out')
const checkBudDone = require('./check_bud_done')
const writeBudOut = require('./write_bud_out')
const cozBud = require('coz-bud')

const tick = () => new Promise((resolve) => process.nextTick(() => resolve()))

/** @lends BudWriter */
function BudWriter(config) {
  Object.assign(this, config)
}

BudWriter.prototype = {
  /**
   * Write bud.
   * @param {Bud} bud - Bud to write.
   * @return {Promise}
   */
  async write(bud) {
    let result = [].concat(bud || []).map(cozBud.create)
    await tick()
    result = await renderBudOut(result)
    result = await checkBudDone(result)
    result = await writeBudOut(result)
    return result
  }
}

module.exports = BudWriter
