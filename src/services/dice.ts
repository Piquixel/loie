//Manage dice logic

import { ref } from 'vue'

export const isOccupied = ref(false)

export function rollDice(max = 6): number {
  return Math.floor(Math.random() * max) + 1
}
