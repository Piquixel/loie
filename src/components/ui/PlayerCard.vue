<!-- Template of a card (only use for displaying player info but could be used for more in the future) -->
<script>
export default {
  props: {
    player: {
      type: Object,
      required: true,
    },
  },
}
</script>

<template>
  <div class="player-card">
    <div class="player-color" :class="player.color"></div>

    <div class="player-info">
      <h3>{{ player.name }}</h3>

      <p>Position : {{ player.position }}</p>
    </div>
  </div>
</template>

<style scoped>
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
</style>
