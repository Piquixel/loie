//Manage case effects

import * as usePlayers from '@/composables/usePlayers'
import type { Player } from '@/models/interfaces/player.interface'
import { addEventLog } from './eventLog'

export const cellEffects = {
  oie: (player: Player) => {
    const displacementValue = player.position - player.lastPosition
    addEventLog({
      message: `Case Oie ! ${player.name} avance à nouveau de ${displacementValue} cases.`,
      type: 'effect',
    })
    usePlayers.movePlayer(player.id, Math.abs(displacementValue))
  },
  hotel: (player: Player) => {
    player.waitTurn = 1
    addEventLog({
      message: `Case Hôtel ! ${player.name} se pose tranquille à l'hôtel pour 1 tours..`,
      type: 'effect',
    })
  },
  pont: (player: Player) => {
    addEventLog({ message: `Pont ! ${player.name} va à la case 12.`, type: 'effect' })
    usePlayers.movePlayer(player.id, 6)
  },
  labyrinthe: (player: Player) => {
    addEventLog({ message: `Labyrinthe ! ${player.name} recule de 12 cases.`, type: 'effect' })
    usePlayers.movePlayer(player.id, -12)
  },
  puit: (player: Player) => {
    player.waitTurn = 2
    addEventLog({
      message: `Case Puit ! ${player.name} est tombé dans un puit. Il mettra 2 tours pour en sortir`,
      type: 'effect',
    })
  },
  mort: (player: Player) => {
    addEventLog({ message: `Tête de Mort ! ${player.name} retourne à la case 0.`, type: 'effect' })
    usePlayers.movePlayer(player.id, -58)
  },
}
