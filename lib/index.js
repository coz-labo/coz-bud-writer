/**
 * Bud writer for coz.
 * @module coz-bud-writer
 * @version 3.0.3
 */

'use strict'

const BudWriter = require('./bud_writer')

function budWriter(config){
  return new BudWriter(config)
}

budWriter.budWriter = budWriter

module.exports = budWriter
