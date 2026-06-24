//Manage general game logic
import { BoardCell } from '@/boardCell'
import { reactive, type Reactive } from 'vue'
import { cellEffects } from './cellEffects'

export const cells: Reactive<BoardCell[]> = reactive([])

export function cellInit() {
  const newCells: BoardCell[] = Array.from({ length: 64 }, (_key, index) => {
    if (index % 9 === 0 && index !== 0 && index !== 63) {
      return new BoardCell(index, 'bonus', cellEffects.oie, 'Oie')
    }

    switch (index) {
      case 6:
        return new BoardCell(index, 'teleport', cellEffects.pont, 'Pont')
      case 19:
        return new BoardCell(index, 'malus', cellEffects.hotel, 'Hôtel')
      case 42:
        return new BoardCell(index, 'malus', cellEffects.labyrinthe, 'Labyrinthe')
      case 51:
        return new BoardCell(index, 'malus', cellEffects.puits, 'Puits')
      case 58:
        return new BoardCell(index, 'malus', cellEffects.mort, 'Tête de Mort')
      default:
        return new BoardCell(index)
    }
  })

  cells.splice(0, cells.length, ...newCells)
  return cells
}
