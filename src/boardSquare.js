export class BoardSquare {
  constructor(id, type = 'neutral', effect = null, label = '') {
    this.id = id
    this.type = type
    this.effect = effect
    this.label = label
  }

  onLand(player) {
    if (this.hasEffect) return this.effect(player)
  }

  get hasEffect() {
    return this.effect !== null
  }
}
