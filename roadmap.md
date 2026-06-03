# VueJS: Projet de l'Oie

## I. Écrans

### 1. Menu Principal

- Nouvelle Partie
  - Customisation
    - Joueurs
    - Taille du Plateau
- Continuer Partie Existante

### 2. Plateau de Jeu

- ATH
- Plateau

## II. Composants

### GameBox

- Dé

### Modals

- Header
  - Title
- Body
- Footer^?^
  - Interactions (Boutons)

### ATH

- "Carte" Joueur[^1]
  - image/couleur de pion
  - Nom
  - Score

### Plateau

- Cases [^2]
  - Cases Neutres
  - Cases Actions
    - Oies: Bonus - Toute les 9 cases, double la valeur des dés.
    <!-- - Dés: Raccourcis - Au premier tour, le joueur est déplacé s'il fait une combinaison de 6 et 3 (case 26) ou de 4 et 5 (case 53). -->
    - Ponts: Raccourcis - En passant par la case 6, le joueur se rend au prochain pont en case 12.
    <!-- - Hôtel: Malus - A la case 19, le joueur perd un tour de jeu. -->
    <!-- - Puits: Malus - A la case 31, le joueur immobilisé tant que personne ne prend sa place. -->
    - Labyrinthe: Malus - A la case 42, le joueur doit reculer de 12 cases.
    <!-- - Prison: Malus - A la case 52, le joueur doit attendre qu'un autre vienne le libérer, sans prendre sa place. -->
    - Tête de Mort: Malus - A la case 58, le joueur est renvoyé à la case 0.
    <!-- Hôtel
    Prison
    Puits
    Dés -->
- Pions [^3]

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

[^1]: Une pour chaque joueur dans chaque coins de l'écran, de haut en bas et de gauche à droite.
[^2]: Au nombre de 63, ont une id numérique unique, pouvant être utilisé pour la position des pions
[^3]: Représenté par un point coloré/image
