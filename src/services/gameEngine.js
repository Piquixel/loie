//Manage general game logic
import { BoardSquare } from '@/bordSquare';
import { reactive } from 'vue';

export const squares = reactive([])

export function squareInit() {
  function log() {
    console.log('hey')
  }

  const newSquares = Array.from({ length: 64 }, (_key, index) => {
    if (index % 9 === 0 && index !== 0 && index !== 63) {
      return new BoardSquare(log)
    }

    return new BoardSquare()
  })

  squares.splice(0, squares.length, ...newSquares)

  return squares
}
