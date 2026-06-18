<!-- Component of a player's token -->
<template>
  <div class="cell">
    <!-- <PlayerToken v-for="player in playerOnThisCell" :key="player.id" :color="player.color" /> -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    color: String,
  },
})
</script>

<style>
.pawn {
  width: 20px;
  height: 20px;
  border-radius: 50%;
}
</style>
