<!-- eslint-disable vue/multi-word-component-names -->
<!-- Main hud component -->
<script lang="ts">
import type { Player } from '@/models/interfaces/player.interface'
import { defineComponent, type PropType } from 'vue'
import PlayerCard from '../ui/PlayerCard.vue'
import Dice from './Dice.vue'

export default defineComponent({
  components: {
    PlayerCard,
    Dice,
  },

  data() {
    return {}
  },

  props: {
    players: {
      type: Array as PropType<Player[]>,
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
})
</script>

<template>
  <div class="game-box-wrapper">
    <PlayerCard
      v-for="(player, index) in players"
      :key="player.id"
      :player="player"
      :class="playerPositions[index]"
    />

    <button
      class="absolute top-4 left-1/2 -translate-x-1/2 rounded-lg bg-slate-700 px-4 py-2 text-white shadow-lg transition hover:bg-slate-600 hover:cursor-pointer"
    >
      💾
      <span>Sauvegarder</span>
    </button>

    <Dice />
  </div>
</template>

<style scoped></style>
