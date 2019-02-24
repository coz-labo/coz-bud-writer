/**
 * Check bud done or not.
 * @memberof module:coz-bud-writer/lib
 * @function checkBudDone
 * @param {Bud} bud - Bud to work with.
 * @returns {Promise}
 */
'use strict'

const fs = require('fs')

/** @lends checkBudDone */
async function checkBudDone(buds) {
  buds = [].concat(buds)
  for (let bud of buds) {
    let filename = bud.path
    let existing = await _readFile(filename)
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
}

async function _readFile(filename) {
  let exists = await new Promise((resolve) =>
    fs.exists(filename, (exists) => resolve(exists))
  )
  if (exists) {
    return await new Promise((resolve, reject) =>
      fs.readFile(filename, (err, content) => err ? reject(err) : resolve(content))
    )
  } else {
    return null
  }
}

module.exports = checkBudDone
