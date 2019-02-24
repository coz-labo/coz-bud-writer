/**
 * Test case for renderBudOut.
 * Runs with mocha.
 */
'use strict'
const assert = require('assert')
var renderBudOut = require('../lib/render_bud_out.js')

describe('renderBudOut', function () {
  it('Handle tmpl error.', async () => {
    let bud = {
      path: 'hoge',
      tmpl() {
        throw new Error('foo')
      }
    }
    try {
      await renderBudOut(bud)
    } catch (e) {
      assert.ok(e)
    }
  })
})

/* global describe, it */
