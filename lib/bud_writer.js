/**
 * Bud file writer.
 * @memberof module:coz-bud-writer/lib
 * @inner
 * @constructor BudWriter
 */
'use strict'

const co = require('co')
const renderBudOut = require('./render_bud_out')
const checkBudDone = require('./check_bud_done')
const writeBudOut = require('./write_bud_out')
const cozBud = require('coz-bud')

const tick = () => new Promise((resolve) => process.nextTick(() => resolve()))

/** @lends BudWriter */
function BudWriter (config) {
  const s = this
  Object.assign(s, config)
}

BudWriter.prototype = {
  /**
   * Write bud.
   * @param {Bud} bud - Bud to write.
   * @return {Promise}
   */
  write (bud) {
    const s = this
    let result = [].concat(bud || []).map(cozBud.create)
    return co(function * () {
      yield tick()
      result = yield renderBudOut(result)
      result = yield checkBudDone(result)
      result = yield writeBudOut(result)
      return result
    })
  }
}

module.exports = BudWriter
