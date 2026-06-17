<!-- Main game's component, the only components that will not be inside is home/landing -->
<script lang="ts">
import type { Player } from '@/models/interfaces/player.interface'
import { cells } from '@/services/gameEngine'
import { defineComponent, type PropType } from 'vue'
import BoardSquare from './gameboard/BoardCell.vue'
import Hud from './hud/Hud.vue'

export default defineComponent({
  components: { BoardSquare, Hud },
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
  methods: {},
})
</script>

<template>
  <div class="game-box-wrapper">
    <div>
      <BoardSquare v-for="(cell, index) in cells" :class="{ special: cell.hasEffect }" :key="index">
        {{ index }}
      </BoardSquare>
    </div>

    <Hud :players="players" class="fixed inset-0 bg-red-100 z-999" />
  </div>
</template>

<style scoped></style>
