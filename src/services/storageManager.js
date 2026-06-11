// Manage saves and loads to localStorage (Player AND GameState)
export class Storage {
  static dataKey = 'player_data'

  static save(data) {
    const stringData = JSON.stringify(data)

    localStorage.setItem(this.dataKey, stringData)
  }

  static load() {
    const data = localStorage.getItem(this.dataKey)
    return JSON.parse(data)
  }

  static clear() {
    localStorage.removeItem(this.dataKey)
    // localStorage.clear() // * Disabled for dev purposes
  }
}
