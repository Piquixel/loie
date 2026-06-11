<!-- eslint-disable vue/multi-word-component-names -->
<!-- Main hud component -->
<script>
import PlayerCard from '../ui/PlayerCard.vue'

export default {
  components: {
    PlayerCard,
  },

  data() {
    return {}
  },

  props: {
    players: {
      type: Array,
      required: true,
    },
  },
}
</script>

<template>
  <div class="absolute z-999 bg-none grid grid-col-2 grid-row-2">
    <PlayerCard v-for="player of players" :key="player.name" />
  </div>
</template>

<style scoped></style>
