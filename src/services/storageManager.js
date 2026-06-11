// Manage saves and loads to localStorage (Player AND GameState)
export class Storage {
  dataKey = 'player_data'

  save(data) {
    const stringData = JSON.stringify(data)

    localStorage.setItem(this.dataKey, stringData)
  }

  load() {
    const data = localStorage.getItem(this.dataKey)
    return JSON.parse(data)
  }

  clear() {
    localStorage.removeItem(this.dataKey)
    // localStorage.clear() // * Disabled for dev purposes
  }
}
