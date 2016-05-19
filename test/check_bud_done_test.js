/**
 * Test case for checkBudDone.
 * Runs with mocha.
 */
'use strict'
const assert = require('assert')
const co = require('co')
const checkBudDone = require('../lib/check_bud_done.js')

describe('checkBudDone', function () {
  it('Check done.', () => co(function * () {
    let buds01 = yield checkBudDone({
      force: false, path: __filename
    })
    assert.equal(buds01[ 0 ].done, true)
    let buds02 = yield checkBudDone({
      force: false, path: __dirname + '/../../tmp/foo/bar' + new Date()
    })
    assert.equal(buds02[ 0 ].done, false)
  }))
})

/* global describe, it */
