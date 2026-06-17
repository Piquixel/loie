// Manage saves and loads to localStorage (Player AND GameState)
export class Storage {
  private static readonly dataKey: string = 'player_data'

  public static save(data: object): void {
    const stringData: string = JSON.stringify(data)

    localStorage.setItem(this.dataKey, stringData)
  }

  public static load(): object | false {
    const data: string | null = localStorage.getItem(this.dataKey)
    if (data !== null) return JSON.parse(data)
    return false
  }

  public static clear(): void {
    localStorage.removeItem(this.dataKey)
    // localStorage.clear() // * Disabled for dev purposes
  }
}
