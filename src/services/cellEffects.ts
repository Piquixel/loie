//Manage case effects

import usePlayers from '@/composables/usePlayers'
import type { Player } from '@/models/interfaces/player.interface'
import { addEventLog } from './eventLog'

export const cellEffects = {
  oie: (player: Player) => {
    const displacementValue = player.position - player.lastPosition
    addEventLog({
      message: `Case Oie ! ${player.name} avance à nouveau de ${displacementValue} cases.`,
      type: 'effect',
    })
    usePlayers.movePlayer(player.id, displacementValue)
  },
  pont: (player: Player) => {
    addEventLog({ message: `Pont ! ${player.name} va à la case 12.`, type: 'effect' })
    usePlayers.movePlayer(player.id, 6)
  },
  labyrinthe: (player: Player) => {
    addEventLog({ message: `Labyrinthe ! ${player.name} recule de 12 cases.`, type: 'effect' })
    usePlayers.movePlayer(player.id, -12)
  },
  mort: (player: Player) => {
    addEventLog({ message: `Tête de Mort ! ${player.name} retourne à la case 0.`, type: 'effect' })
    usePlayers.movePlayer(player.id, -58)
  },
}
