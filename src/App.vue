<script lang="ts">
import GameBox from './components/GameBox.vue'
import MainMenu from './components/landing/MainMenu.vue'
import type { Player } from './models/interfaces/player.interface'

const { players: playersRef, initializePlayers } = usePlayers()

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
      return playersRef
    },
  },

  methods: {
    startGame(players: Player[]): void {
      initializePlayers(players)
      this.gameLaunched = true
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
  />
</template>

<style></style>
