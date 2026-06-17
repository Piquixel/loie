<script lang="ts">
import GameBox from './components/GameBox.vue'
import MainMenu from './components/landing/MainMenu.vue'
import type { Player } from './models/interfaces/player.interface'

export default {
  components: {
    MainMenu,
    GameBox,
  },

  data() {
    return {
      // game state
      gameLaunched: false,
      players: [] as Player[],
    }
  },

  methods: {
    startGame(players: Player[]) {
      this.gameLaunched = true
      this.players = players
    },
  },
}
</script>

<template>
  <MainMenu v-if="!gameLaunched" @startGame="startGame($event)" />
  <GameBox v-else :players="players" class="inset-0" />
</template>

<style></style>
