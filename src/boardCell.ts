import type { Player } from './models/interfaces/player.interface'

type cellType = 'neutral' | 'bonus' | 'malus' | 'teleport'

export class BoardCell {
  constructor(
    public readonly id: number,
    public readonly type: cellType = 'neutral',
    public readonly effect: ((player: Player) => void) | null = null,
    public readonly label: string = '',
    public readonly desc: string = '',
    public player: number | undefined = undefined,
  ) {}

  onLand(player: Player) {
    if (this.hasEffect) return this.effect!(player)
  }

  get hasEffect() {
    return this.effect !== null
  }
}
