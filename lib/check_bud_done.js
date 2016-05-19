/**
 * Check bud done or not.
 * @memberof module:coz-bud-writer/lib
 * @function checkBudDone
 * @param {Bud} bud - Bud to work with.
 * @param {function} callback - Callback when done.
 */
'use strict'

const co = require('co')
const fs = require('fs')

/** @lends checkBudDone */
function checkBudDone (buds) {
  buds = [].concat(buds)
  return co(function * () {
    for (let bud of buds) {
      let filename = bud.path
      let existing = yield _readFile(filename)
      let unknown = !existing
      if (unknown) {
        bud.done = false
        continue
      }
      let skip = !bud.force && !!existing
      if (skip) {
        bud.done = true
      } else {
        bud.done = String(existing) === String(bud.out)
      }
    }
    return buds
  })
}

function _readFile (filename) {
  return co(function * () {
    let exists = yield new Promise((resolve) =>
      fs.exists(filename, (exists) => resolve(exists))
    )
    if (exists) {
      return yield new Promise((resolve, reject) =>
        fs.readFile(filename, (err, content) => err ? reject(err) : resolve(content))
      )
    } else {
      return null
    }
  })
}

module.exports = checkBudDone
