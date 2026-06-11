//Manage use of dice (initialize -> attribute value with service/dice -> return result)

import { rollDice } from '@/services/dice'

export default function useDice() {
  function rollTwoDices() {
    const first = rollDice()
    const second = rollDice()

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
