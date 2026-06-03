export class BoardSquare {
  constructor(action = null) {
    this.action = action
  }

  onLand() {
    return this.action()
  }

  get hasAction() {
    return this.action !== null
  }
}
