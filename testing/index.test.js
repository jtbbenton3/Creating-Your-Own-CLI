const { determineWinner, updateStats } = require('../src/lib/gameLogic.js')

test('determineWinner correctly identifies winner', () => {
  expect(determineWinner('rock', 'scissors')).toBe('win')
  expect(determineWinner('rock', 'paper')).toBe('lose')
  expect(determineWinner('rock', 'rock')).toBe('tie')
  expect(determineWinner('scissors', 'paper')).toBe('win')
  expect(determineWinner('paper', 'rock')).toBe('win')
})

test('updateStats updates win, lose, and tie counts correctly', () => {
  const gameState = { stats: { wins: 0, losses: 0, ties: 0 } }

  updateStats('win', gameState)
  updateStats('lose', gameState)
  updateStats('tie', gameState)

  expect(gameState.stats.wins).toBe(1)
  expect(gameState.stats.losses).toBe(1)
  expect(gameState.stats.ties).toBe(1)
})

test('updateStats ignores invalid result', () => {
  const gameState = { stats: { wins: 1, losses: 1, ties: 1 } }

  updateStats('Banana', gameState)

  expect(gameState.stats).toEqual({ wins: 1, losses: 1, ties: 1 })
})
