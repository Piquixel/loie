<!-- Template of a card (only use for displaying player info but could be used for more in the future) -->
<script lang="ts">
import * as usePlayers from '@/composables/usePlayers'
import type { Player } from '@/models/interfaces/player.interface'
import { defineComponent, type PropType } from 'vue'

const { getCurrentPlayer } = usePlayers

export default defineComponent({
  props: {
    player: {
      type: Object as PropType<Player>,
      required: true,
    },
  },

  methods: {
    playerColorClass(hex: string) {
      return { boxShadow: `0 0 0 2px ${hex}` }
    },

    playerColor(hex: string) {
      return { backgroundColor: hex }
    },
  },

  computed: {
    colorClass() {
      return this.playerColor(this.player.color)
    },

    getCurrentPlayer() {
      return getCurrentPlayer()
    },
  },
})
</script>

<template>
  <div
    class="flex items-center gap-4 rounded-lg bg-zinc-800 p-4"
    :style="getCurrentPlayer.id === player.id ? playerColorClass(player.color) : ''"
  >
    <div class="h-8 w-8 rounded-full" :style="playerColor(player.color)" />

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
