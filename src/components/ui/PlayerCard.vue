<!-- Template of a card (only use for displaying player info but could be used for more in the future) -->
<script lang="ts">
import * as usePlayers from '@/composables/usePlayers'
import type { Player } from '@/models/interfaces/player.interface'
import { defineComponent, type PropType } from 'vue'

const { getCurrentPlayer } = usePlayers

const PLAYER_COLORS: Record<string, string> = {
  red: 'bg-red-500',
  blue: 'bg-blue-500',
  yellow: 'bg-yellow-400',
  green: 'bg-green-500',
}

export default defineComponent({
  props: {
    player: {
      type: Object as PropType<Player>,
      required: true,
    },
  },

  computed: {
    colorClass(): string | undefined {
      return PLAYER_COLORS[this.player.color]
    },

    getCurrentPlayer() {
      return getCurrentPlayer()
    },

    playerColorClass(): Record<string, string> {
      return {
        red: 'ring-red-500 shadow-red-500/20',
        blue: 'ring-blue-500 shadow-blue-500/20',
        green: 'ring-green-500 shadow-green-500/20',
        yellow: 'ring-yellow-500 shadow-yellow-500/20',
      }
    },
  },
})
</script>

<template>
  <div
    class="flex items-center gap-4 rounded-lg bg-zinc-800 p-4"
    :class="[
      getCurrentPlayer.id === player.id ? `ring-2 shadow-lg ${playerColorClass[player.color]}` : '',
    ]"
  >
    <div :class="['h-8 w-8 rounded-full', colorClass]" />

    <div>
      <h3 class="text-white">
        {{ player.name }}
      </h3>

      <p class="mt-2 text-gray-300">Position : {{ player.position ?? 0 }}</p>
    </div>
  </div>
</template>

<!-- <style scoped>
.player-card {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background-color: #333;
  border-radius: 8px;
}

.player-color {
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
}

.player-color.red {
  background-color: red;
}
.player-color.blue {
  background-color: blue;
}
.player-color.yellow {
  background-color: yellow;
}
.player-color.green {
  background-color: green;
}

.player-info h3 {
  margin: 0;
  color: white;
}

.player-info p {
  margin: 0.5rem 0;
  color: lightgray;
}
</style> -->
