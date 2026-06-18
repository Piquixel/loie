//Manage use of dice (initialize -> attribute value with service/dice -> return result)

import type { DiceData } from '@/models/interfaces/dice.interface'
import { rollDice } from '@/services/dice'

export default function useDice() {
  function rollTwoDices(): DiceData {
    const first: number = rollDice()
    const second: number = rollDice()

    return {
      first,
      second,
      total: first + second,
      isDouble: first === second,
    }
  }

  return {
    rollTwoDices,
  }
}
