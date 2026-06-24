//Manage general game logic
import { BoardCell } from '@/boardCell'
import { reactive, type Reactive } from 'vue'
import { cellEffects } from './cellEffects'

export const cells: Reactive<BoardCell[]> = reactive([])

export function cellInit() {
  const newCells: BoardCell[] = Array.from({ length: 64 }, (_key, index) => {
    if (index % 9 === 0 && index !== 0 && index !== 63) {
      return new BoardCell(index, 'bonus', cellEffects.oie, 'Oie', 'Double la valeur de vos dés')
    }

    switch (index) {
      case 6:
        return new BoardCell(
          index,
          'teleport',
          cellEffects.pont,
          'Pont',
          "Raccourcis jusqu' à la case 12",
        )
      case 19:
        return new BoardCell(
          index,
          'malus',
          cellEffects.hotel,
          'Hôtel',
          'On est bien ici, vous fait passer un tour',
        )
      case 42:
        return new BoardCell(
          index,
          'malus',
          cellEffects.labyrinthe,
          'Labyrinthe',
          'Vous vous perdez et revenez 12 case en arrière',
        )
      case 51:
        return new BoardCell(
          index,
          'malus',
          cellEffects.puit,
          'Puit',
          'Mince, il va falloir 2 tours pour remonter de ce puits',
        )
      case 58:
        return new BoardCell(
          index,
          'malus',
          cellEffects.mort,
          'Tête de Mort',
          'Pas de chance, vous recommencez depuis le début',
        )
      default:
        return new BoardCell(index)
    }
  })

  cells.splice(0, cells.length, ...newCells)
  return cells
}
