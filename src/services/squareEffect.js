//Manage case effects

export const squareEffects = {
  oie: (player) => {
    console.log(`Case Oie! Le joueur ${player.name} double son lancer.`)
  },
  pont: () => {
    console.log('Pont! Téléportation à la case 12.')
  },
  labyrinthe: () => {
    console.log('Labyrinthe! Recul de 12 cases.')
  },
  mort: () => {
    console.log('Tête de Mort! Retour à la case 0.')
  },
}
