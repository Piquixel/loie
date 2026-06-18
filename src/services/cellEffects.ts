//Manage case effects

import usePlayers from '@/composables/usePlayers'
import type { Player } from '@/models/interfaces/player.interface'

export const cellEffects = {
  oie: (player: Player) => {
    console.log(`Case Oie! Le joueur ${player.name} double son lancer.`)
    const displacementValue = player.position - player.lastPosition
    usePlayers.movePlayer(player.id, displacementValue)
  },
  pont: (player: Player) => {
    console.log('Pont! Téléportation à la case 12.')
    usePlayers.movePlayer(player.id, 6)
  },
  labyrinthe: (player: Player) => {
    console.log('Labyrinthe! Recul de 12 cases.')
    usePlayers.movePlayer(player.id, -12)
  },
  mort: (player: Player) => {
    console.log('Tête de Mort! Retour à la case 0.')
    usePlayers.movePlayer(player.id, -58)
  },
}
