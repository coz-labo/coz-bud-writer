/**
 * Test case for renderBudOut.
 * Runs with mocha.
 */
'use strict'
const assert = require('assert')
const co = require('co')
var renderBudOut = require('../lib/render_bud_out.js')

describe('renderBudOut', function () {
  it('Handle tmpl error.', () => co(function * () {
    let bud = {
      path: 'hoge',
      tmpl () {
        throw new Error('foo')
      }
    }
    try {
      yield renderBudOut(bud)
    } catch (e) {
      assert.ok(e)
    }
  }))
})

/* global describe, it */
