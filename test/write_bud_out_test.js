/**
 * Test case for writeBudOut.
 * Runs with mocha.
 */
'use strict'
const assert = require('assert')
const fs = require('fs')
const co = require('co')
const writeBudOut = require('../lib/write_bud_out.js')

describe('writeBudOut', function () {
  it('Do write.', () => co(function * () {
    yield writeBudOut({
      mode: '644',
      mkdirp: true,
      path: `${__dirname}/../tmp/foo.html`
    })
    assert.ok(
      fs.existsSync(`${__dirname}/../tmp/foo.html`)
    )
  }))
})

/* global describe, it */
