/**
 * Test for index.js
 */

'use strict'
const assert = require('assert')
const index = require('../lib/index.js')

describe('index', function () {
  it('Eval index.', () => {
    let writer = index({})
    assert.ok(writer)
  })
})

/* global describe, it */
