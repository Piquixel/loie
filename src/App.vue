<script>
import GameBox from './components/GameBox.vue'
import MainMenu from './components/landing/MainMenu.vue'

export default {
  components: {
    MainMenu,
    GameBox,
  },

  data() {
    return {
      // game state
      gameLauched: false,
      players: [],
    }
  },

  methods: {
    startGame(players) {
      this.gameLauched = true
      this.players = players
    },
  },
}
</script>

<template>
  <MainMenu v-if="!gameLauched" @startGame="startGame($event)" />
  <GameBox v-else :players="this.players" class="inset-0" />
</template>

<style></style>
