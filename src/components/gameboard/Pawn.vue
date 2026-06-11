<!-- Component of a player's pawn -->
<template>
  <div class="cell">
    <Pawn
      v-for="player in playerOnThisCell"
      :key="player.id"
      :color="player.color"
    />
  </div>
</template>

<script setup>
defineProps({
  color: String
})
</script>

<style scoped>
.pawn {
  width: 20px;
  height: 20px;
  border-radius: 50%;
}
</style>
