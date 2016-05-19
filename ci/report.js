#!/usr/bin/env node

/**
 * Send reports.
 */

'use strict'

process.chdir(`${__dirname}/..`)

const apeTasking = require('ape-tasking')
const apeReporting = require('ape-reporting')

apeTasking.runTasks([
  () => apeReporting.sendToCodeclimate('coverage/lcov.info')
], true)
