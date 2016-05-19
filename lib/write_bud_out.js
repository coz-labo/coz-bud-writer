/**
 * Write bud out into file.
 * @memberof module:coz-bud-writer/lib
 * @function writeBudOut
 * @param {Bud} bud - Bud to work with.
 * @returns {Promise}
 */

'use strict'

const co = require('co')
const writeout = require('writeout')

/** @lends writeBudOut */
function writeBudOut (buds) {
  buds = [].concat(buds)
  return co(function * () {
    for (let bud of buds) {
      let done = bud.done
      if (done) {
        return bud
      }
      let filename = bud.path
      yield writeout(filename, bud.out, {
        mkdirp: bud.mkdirp,
        mode: bud.mode,
        force: true
      })
      bud.at = new Date()
    }
    return buds
  })
}

module.exports = writeBudOut