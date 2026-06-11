<!-- Main game's component, the only components that will not be inside is home/landing -->
<script>
import { squares } from '@/services/gameEngine'
import BoardSquare from './gameboard/BoardSquare.vue'
import Hud from './hud/Hud.vue'

export default {
  components: { BoardSquare, Hud },
  props: {
    players: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      squares,
    }
  },
  methods: {},
}
</script>

<template>
  <div>
    <BoardSquare
      :class="{ special: square.hasEffect }"
      v-for="(square, index) in squares"
      :key="index"
    >
      {{ index }}
    </BoardSquare>
  </div>

  <Hud :players="this.players" />
</template>

<style scoped></style>
