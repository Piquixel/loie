//Centralize player logic (add, move, reset, etc)

import type { Player } from '@/models/interfaces/player.interface'
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

  player.position += delta
}

function moveCurrentPlayer(delta: number) {
  const currentPlayer = players.value[currentPlayerIndex.value]
  if (!currentPlayer) {
    return
  }

  movePlayer(currentPlayer.id, delta)
}

export function usePlayers() {
  return {
    players,
    currentPlayerIndex,
    initializePlayers,
    addPlayer,
    movePlayer,
    moveCurrentPlayer,
  }
}
