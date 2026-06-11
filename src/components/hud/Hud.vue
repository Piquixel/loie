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

  computed: {
    playerPositions() {
      return [
        'absolute top-4 left-4',
        'absolute top-4 right-4',
        'absolute bottom-4 left-4',
        'absolute bottom-4 right-4',
      ]
    },
  },
}
</script>

<template>
  <PlayerCard
    v-for="(player, index) in players"
    :key="player.id"
    :player="player"
    :class="playerPositions[index]"
  />
</template>

<style scoped></style>
