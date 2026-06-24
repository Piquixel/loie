<script lang="ts">
import ColorBends from './components/external/ColorBends.vue'
import GameBox from './components/GameBox.vue'
import MainMenu from './components/landing/MainMenu.vue'
import * as usePlayers from './composables/usePlayers'
import type { Player } from './models/interfaces/player.interface'
import { clearEventLogs } from './services/eventLog'
import { Storage } from './services/storageManager.ts'

const { players: playersRef, initializePlayers, resetPlayers } = usePlayers

export default {
  components: {
    MainMenu,
    GameBox,
    ColorBends,
  },

  data() {
    return {
      // game state
      gameLaunched: false,
    }
  },

  computed: {
    players() {
      return playersRef.value
    },
  },

  methods: {
    startGame(players: Player[]): void {
      initializePlayers(players)
      this.gameLaunched = true
    },

    restartGame() {
      Storage.clear()
      resetPlayers()
      clearEventLogs()
      this.gameLaunched = false
    },
  },
}
</script>

<template>
  <ColorBends
    :colors="['#ff5c7a', '#8a5cff', '#00ffd1']"
    :rotation="90"
    :speed="0.2"
    :scale="1"
    :frequency="1"
    :warp-strength="1"
    :mouse-influence="1"
    :noise="0.15"
    :parallax="0.5"
    :iterations="1"
    :intensity="1.5"
    :band-width="6"
    transparent
  />
  <MainMenu v-if="!gameLaunched" @startGame="startGame($event)" />
  <GameBox
    v-else
    :players="players"
    class="flex justify-center items-center h-screen bg-zinc-600"
    @restartGame="restartGame"
  />
</template>

<style></style>
