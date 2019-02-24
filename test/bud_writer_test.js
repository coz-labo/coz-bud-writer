/**
 * Test case for budWriter.
 * Runs with mocha.
 */
'use strict'
const assert = require('assert')
const fs = require('fs')

const BudWriter = require('../lib/bud_writer.js')

describe('budWriter', function () {
  it('Write a bud.', async () => {
    let bud = {
      tmpl() {
        return 'foo'
      },
      done: false,
      mkdirp: true,
      path: `${__dirname}/../tmp/bar/baz/bud_written.txt`
    }
    await new BudWriter().write(bud)
    assert.ok(
      fs.existsSync(`${__dirname}/../tmp/bar/baz/bud_written.txt`)
    )
  })
})

/* global describe, it */
