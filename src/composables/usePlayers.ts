//Centralize player logic (add, move, reset, etc)

import type { Player } from '@/models/interfaces/player.interface'
import { cells } from '@/services/gameEngine'
import { ref, type Ref } from 'vue'

const players: Ref<Player[]> = ref([])
const currentPlayerIndex = ref(0)

function getNextPlayerId() {
  if (players.value.length === 0) {
    return 1
  }
  return Math.max(...players.value.map((player) => player.id)) + 1
}

function initializePlayers(playerList: Player[] = []): void {
  players.value = playerList.map((player, index) => ({
    id: index + 1,
    name: player.name,
    color: player.color,
    position: 0,
    lastPosition: 0,
  }))
  currentPlayerIndex.value = 0
}

function addPlayer(name: string, color: string): void {
  players.value.push({
    id: getNextPlayerId(),
    name,
    color,
    position: 0,
    lastPosition: 0,
  })
}

function movePlayer(playerId: number, delta: number) {
  const player = players.value.find((p) => p.id === playerId)
  if (!player) {
    return
  }

  const oldCell = cells.find((c) => c.player === player.id)
  if (oldCell) {
    oldCell.player = undefined
  }

  player.lastPosition = player.position
  player.position += delta

  if (player.position < 0) player.position = 0

  const targetCell = cells[player.position]

  if (targetCell) {
    if (!targetCell.player) {
      targetCell.player = player.id
    } else if (targetCell.player !== player.id) {
      const standingPlayer = players.value.find((p) => p.id === targetCell.player)

      if (standingPlayer) {
        standingPlayer.position = player.lastPosition
        console.log(`${standingPlayer.name} a été repousser à la place de ${player.name}`)

        const originalCell = cells[player.lastPosition]
        if (originalCell) {
          originalCell.player = standingPlayer.id
        }
      }

      targetCell.player = player.id
    }
    targetCell.onLand(player)
  }

  currentPlayerIndex.value =
    currentPlayerIndex.value < players.value.length - 1 ? currentPlayerIndex.value + 1 : 0
}

function moveCurrentPlayer(delta: number) {
  const currentPlayer = players.value[currentPlayerIndex.value]
  if (!currentPlayer) {
    return
  }

  movePlayer(currentPlayer.id, delta)
}

function checkEnd() {
  return players.value.find((p) => p.position == 63)
}

export function usePlayers() {
  return {
    players,
    currentPlayerIndex,
    initializePlayers,
    addPlayer,
    movePlayer,
    moveCurrentPlayer,
    checkEnd,
  }
}
