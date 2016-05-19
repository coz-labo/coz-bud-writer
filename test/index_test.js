/**
 * Test for index.js
 */

'use strict'
const assert = require('assert')
const co = require('co')
const index = require('../lib/index.js')

describe('index', function () {
  it('Eval index.', () => co(function * () {
    let writer = index({})
    assert.ok(writer)
  }))
})

/* global describe, it */
