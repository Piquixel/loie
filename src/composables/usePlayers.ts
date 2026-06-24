//Centralize player logic (add, move, reset, etc)

import type { Player } from '@/models/interfaces/player.interface'
import { addEventLog } from '@/services/eventLog'
import { cells } from '@/services/gameEngine'
import { ref, type Ref } from 'vue'

export const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

export const players: Ref<Player[]> = ref([])
export const currentPlayerIndex = ref(0)

function getNextPlayerId() {
  if (players.value.length === 0) {
    return 1
  }
  return Math.max(...players.value.map((player) => player.id)) + 1
}

export function getCurrentPlayer(): Player {
  return players.value[currentPlayerIndex.value]!
}

export function initializePlayers(playerList: Player[] = []): void {
  players.value = playerList.map((player, index) => ({
    id: index + 1,
    name: player.name,
    color: player.color,
    position: 0,
    lastPosition: 0,
  }))
  currentPlayerIndex.value = 0
}

export function addPlayer(name: string, color: string): void {
  players.value.push({
    id: getNextPlayerId(),
    name,
    color,
    position: 0,
    lastPosition: 0,
  })
}

export async function movePlayer(playerId: number, delta: number) {
  const player = players.value.find((p) => p.id === playerId)
  if (!player) {
    return
  }

  const oldCell = cells.find((c) => c.player === player.id)
  if (oldCell) {
    oldCell.player = undefined
  }

  if (player.position % 9 !== 0) player.lastPosition = player.position
  let reste = 0
  if (delta < 0) {
    for (let i = 0; i < -delta; i++) {
      player.position--
    }
  } else {
    for (let i = 0; i < delta; i++) {
      player.position++
      await sleep(250)
      if (player.position >= 63) {
        reste = delta - i - 1
        break
      }
    }
  }

  if (reste > 0) {
    for (let i = 0; i < reste; i++) {
      player.position--
      await sleep(250)
    }
  }

  if (player.position > 63) player.position = 63 - (player.position - 63)

  if (player.position < 0) player.position = 0

  const targetCell = cells[player.position]

  if (targetCell) {
    if (!targetCell.player) {
      targetCell.player = player.id
    } else if (targetCell.player !== player.id) {
      const standingPlayer = players.value.find((p) => p.id === targetCell.player)

      if (standingPlayer && cells.findIndex((c) => c === targetCell) !== 0) {
        standingPlayer.position = player.lastPosition
        addEventLog({
          message: `${standingPlayer.name} a été repoussé à la place de ${player.name}`,
          type: 'move',
        })

        const originalCell = cells[player.lastPosition]
        if (originalCell) {
          originalCell.player = standingPlayer.id
        }
      }

      targetCell.player = player.id
    }
    addEventLog({
      message: `${player.name} est arrivé à la case ${player.position}.`,
      type: 'move',
    })

    targetCell.onLand(player)
  }
  if (player.position > 63) player.position = 63 - (player.position - 63) // double check après les effet de case (case de l'oie 54)
}

window.debugPositions = (playerId: number, cell: number): void => {
  const player = players.value.find((p) => p.id === playerId)
  if (!player) return
  const delta: number = cell - player?.position

  movePlayer(playerId, delta)
}

export async function moveCurrentPlayer(delta: number) {
  const currentPlayer = players.value[currentPlayerIndex.value]
  if (!currentPlayer) {
    return
  }

  await movePlayer(currentPlayer.id, delta)
}

export function resetPlayers() {
  players.value = []
}

export function checkEnd() {
  return players.value.find((p) => p.position == 63)
}

export function passTurn() {
  currentPlayerIndex.value =
    currentPlayerIndex.value < players.value.length - 1 ? currentPlayerIndex.value + 1 : 0
}
