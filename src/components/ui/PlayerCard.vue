<!-- Template of a card (only use for displaying player info but could be used for more in the future) -->
<script>
const PLAYER_COLORS = {
  red: 'bg-red-500',
  blue: 'bg-blue-500',
  yellow: 'bg-yellow-400',
  green: 'bg-green-500',
}

export default {
  props: {
    player: {
      type: Object,
      required: true,
    },
  },

  computed: {
    colorClass() {
      return PLAYER_COLORS[this.player.color]
    },
  },
}
</script>

<template>
  <div class="flex items-center gap-4 rounded-lg bg-zinc-800 p-4">
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
