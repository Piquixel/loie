<script>
import GameBox from './components/GameBox.vue'
import MainMenu from './components/landing/MainMenu.vue'
import { usePlayers } from './composables/usePlayers'

const { players: playersRef, initializePlayers } = usePlayers()

export default {
  components: {
    MainMenu,
    GameBox,
  },

  data() {
    return {
      // game state
      gameLauched: false,
    }
  },

  computed: {
    players() {
      return playersRef
    },
  },

  methods: {
    startGame(players) {
      initializePlayers(players)
      this.gameLauched = true
    },
  },
}
</script>

<template>
  <MainMenu v-if="!gameLauched" @startGame="startGame($event)" />
  <GameBox v-else :players="this.players" class="inset-0" />
</template>

<style></style>
