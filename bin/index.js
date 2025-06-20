#!/usr/bin/env node
const { program } = require('commander')
const { gameState } = require('../src/lib/state.js')
const { showMainMenu } = require('../src/lib/gameLogic.js')

showMainMenu(gameState)
program.parse(process.argv)
