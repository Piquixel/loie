<script>
import MainMenu from './components/landing/MainMenu.vue'
import GameBox from './components/GameBox.vue'

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

<style scoped></style>
