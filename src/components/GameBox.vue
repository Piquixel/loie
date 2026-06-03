<script>
import { squareInit } from '@/services/gameEngine'
import BoardSquare from './gameboard/BoardSquare.vue'

export default {
  components: { BoardSquare },
  props: {},
  data() {
    return {
      squares: squareInit(),
    }
  },
  methods: {},
}
</script>

<template>
  <div>
    <BoardSquare
      :class="{ special: square.hasAction }"
      v-for="(square, index) in squares"
      :key="index"
    >
      {{ index }}
    </BoardSquare>
  </div>
</template>

<style scoped></style>
