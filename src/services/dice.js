//Manage dice logic

export function rollDice(max = 6) {
  return Math.floor(Math.random() * max) + 1
}
