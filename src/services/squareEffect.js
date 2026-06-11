//Manage case effects

export const squareEffects = {
  oie: (player) => {
    console.log(`Case Oie! Le joueur ${player.name} double son lancer.`)
    const displacementValue = player.position - player.lastPosition
    player.position += displacementValue
  },
  pont: (player) => {
    console.log('Pont! Téléportation à la case 12.')
    player.position = 12
  },
  labyrinthe: (player) => {
    console.log('Labyrinthe! Recul de 12 cases.')
    player.position -= 12
  },
  mort: (player) => {
    console.log('Tête de Mort! Retour à la case 0.')
    player.position = 0
  },
}
