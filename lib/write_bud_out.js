/**
 * Write bud out into file.
 * @memberof module:coz-bud-writer/lib
 * @function writeBudOut
 * @param {Bud} bud - Bud to work with.
 * @returns {Promise}
 */

'use strict'

const writeout = require('writeout')

/** @lends writeBudOut */
async function writeBudOut(buds) {
  buds = [].concat(buds)
  for (const bud of buds) {
    const done = bud.done
    if (done) {
      continue
    }
    let filename = bud.path
    await writeout(filename, bud.out || '', {
      mkdirp: bud.mkdirp,
      mode: bud.mode,
      force: true
    })
    bud.at = new Date()
  }
  return buds
}

module.exports = writeBudOut
