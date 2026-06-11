# VueJS: Projet de l'Oie

## I. Écrans & Architecture des Vues

### 1. Menu Principal (`landing/MainMenu.vue`)

- Nouvelle Partie
  - Customisation de la partie (Modal dédiée):
    - Gestion des Joueurs (Nom, choix de la couleur). <!-- choix image, choix nombre -->
    - Taille du Plateau
- Continuer Partie Existante (Optionnel: grisé si aucun localStorage trouvé).

### 2. Plateau de Jeu (`gameboard/GameBoard.vue`)

- ATH: Disposé en superposition aux 4 coins de l'écran.
- Zone centrale: Contient le `GameBoard` (Plateau) et la `Gamebox` (Zone d'action/Dés).

## II. Composants & Architecture Vue

### 1. Structure Globale (`Components/`)

- `GameBox.vue`: Zone centrale interactive. Contient le composant `Dice.vue` (gestion de l'animation du lancer) et les messages d'état.
- `Modal.vue`: Composant générique et réutilisable (Props: `isOpen`, `title`). Utilise des *Slots* pour le `Header`, `Body`, et `Footer` (Boutons d'actions).
- `Hud.vue`: Cartes joueurs affichées en coins.
  - *Props*: `PlayerData: Object`, `isActive: Boolean`.
  - *Contenu*: Nom, Avatar, Score/Case actuelle, et un indicateur visuel si c'est son tour.
- `GameBoard.vue`: Contient le chemain des cases. Génère dynamiquement le plateau via un `v-for`.
- `BoardSquare.vue`: Représente une case unique.
  - *Props*: `cellData: CellClass`.
  - *Contenu*: Numéro de la case, design selon le type (Neutre, Action, Malus), et conteneur pour les pions.
- `Pawn.vue`: Le pion du joueur (pastille colorée). Animé avec des transitions CSS lors des déplacements.

### 2. Logique des Cases (Modèle de données)

```js
export class Cell {
  constructor(id, type = 'neutral', effect = null, label = '') {
    this.id = id; // Numéro de la case (0 à 63)
    this.type = type; // 'neutral', 'bonus', 'malus', 'teleport'
    this.effect = effect; // Fonction
    this.label = label; // Nom de la case (ex: "Labyrinthe")
  }
}
```

#### Catalogue des effets à implémenter

| Case | Type | Nom | Effet |
| --- | --- | --- | --- |
| Multiples de 9 | Bonus | Oie | Double la valeur du dé lancé. |
| Case 6 | Téléport | Pont | Déplace immédiatement le joueur à la case 12. |
| Case 42 | Malus | Labyrinthe | Recul forcé de 12 cases (renvoie à la case 30). |
| Case 58 | Malus | Tête de Mort | Renvoie immédiatement à la case 0. |

## III. Gestion de l'État Global (State Management)

## III. Répartition des Tâches

### 1. Menu Principal

`Florian`

- Modals

### 2. Gamebox

- Joueurs: `Nicolas`
- Cases (Logique): `Thomas | 1`
  - Creation de la classe
  - Instancier les classes dans un tableau

#### ATH

`Florian`

#### Plateau

- Cases (Composant): `Thomas | 2`
- Pions: `Nicolas`

<!-- ## III. Méthodes

### 1. Déplacement

> [!NOTE]
> La position d'un pion est déterminé par l'index de la case à laquelle il est attribué dans le tableau de cases.

#### Paramètres

- `value: number` | Si positif, le pion avance et recule si négatif.

#### Fonction

- Calcule la position d'un pion en additionnant l'index de sa case actuelle avec le résultat du lancé de dés, ou avec la différence entre les index de cases causants un déplacement.

### 2. Échange

> [!NOTE]
> On prend comme valeur de déplacement pour un échange, le résultat du lancé de dés du joueur arrivant sur une case occupée.

#### Paramètres

- `none`

#### Fonctions

Appelle la méthode de déplacement pour les joueurs concerné, en inversant la valeur de déplacement pour le joueur à faire reculer. -->

## IV. Schémas

![test](assets/Gamebox.png)
![test](assets/ATH.png)
![test](assets/Gameboard.png)

## V. Prototypes

### 1. Menu Principal

![test](assets/EWprotoMain.png)

### 2. Jeu

![test](assets/EWprotoATH_Gameboard.png)

*[ATH]: Affichage Tête Haute
