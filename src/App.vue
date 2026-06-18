<script lang="ts">
import GameBox from './components/GameBox.vue'
import MainMenu from './components/landing/MainMenu.vue'
import { usePlayers } from './composables/usePlayers'
import type { Player } from './models/interfaces/player.interface'
import { Storage } from './services/storageManager.ts'

const { players: playersRef, initializePlayers, resetPlayers } = usePlayers()

export default {
  components: {
    MainMenu,
    GameBox,
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
      this.gameLaunched = false
    },
  },
}
</script>

<template>
  <MainMenu v-if="!gameLaunched" @startGame="startGame($event)" />
  <GameBox
    v-else
    :players="players"
    class="flex justify-center items-center h-screen bg-zinc-600"
    @restartGame="restartGame"
  />
</template>

<style></style>
