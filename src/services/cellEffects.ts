//Manage case effects

import type { Player } from '@/models/interfaces/player.interface'

export const cellEffects = {
  oie: (player: Player) => {
    console.log(`Case Oie! Le joueur ${player.name} double son lancer.`)
    const displacementValue = player.position - player.lastPosition
    player.position += displacementValue
  },
  pont: (player: Player) => {
    console.log('Pont! Téléportation à la case 12.')
    player.position = 12
  },
  labyrinthe: (player: Player) => {
    console.log('Labyrinthe! Recul de 12 cases.')
    player.position -= 12
  },
  mort: (player: Player) => {
    console.log('Tête de Mort! Retour à la case 0.')
    player.position = 0
  },
}
