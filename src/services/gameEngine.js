//Manage general game logic
import { BoardSquare } from '@/boardSquare';
import { reactive } from 'vue';
import { squareEffects } from './squareEffect';

export const squares = reactive([])

export function squareInit() {
  const newSquares = Array.from({ length: 64 }, (_key, index) => {
    if (index % 9 === 0 && index !== 0 && index !== 63) {
      return new BoardSquare(index, 'bonus', squareEffects.oie, 'Oie')
    }

    switch (index) {
      case 6:
        return new BoardSquare(index, 'teleport', squareEffects.pont, 'Pont')
      case 42:
        return new BoardSquare(index, 'malus', squareEffects.labyrinthe, 'Labyrinthe')
      case 58:
        return new BoardSquare(index, 'malus', squareEffects.mort, 'Tête de Mort')
      default:
        return new BoardSquare(index)
    }
  })

  squares.splice(0, squares.length, ...newSquares)
  return squares
}
