<!-- Main game's component, the only components that will not be inside is home/landing -->
<script lang="ts">
import type { Player } from '@/models/interfaces/player.interface'
import { cells } from '@/services/gameEngine'
import { defineComponent, type PropType } from 'vue'
import GameBoard from './gameboard/GameBoard.vue'
import Hud from './hud/Hud.vue'

export default defineComponent({
  components: { GameBoard, Hud },
  props: {
    players: {
      type: Array as PropType<Player[]>,
      required: true,
    },
  },
  data() {
    return {
      cells,
    }
  },
})
</script>

<template>
  <div class="game-box-wrapper">
    <GameBoard />

    <Hud :players="players" class="fixed inset-0 z-10" />
  </div>
</template>
