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
    }
  },
}
</script>

<template>
  <MainMenu v-if="!gameLauched" />
  <GameBox v-else />
</template>

<style></style>
