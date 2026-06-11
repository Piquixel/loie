<!-- Component of the board -->
<script>
import { squareInit, squares } from '@/services/gameEngine'
import BoardSquare from './BoardSquare.vue'

export default {
  components: { BoardSquare },
  data() {
    return {
      squares,
    }
  },
  computed: {
    gridRows() {
      const size = 8
      const rows = []

      for (let i = 0; i < size; i++) {
        const row = this.squares.slice(i * size, (i + 1) * size)
        rows.push(row)
      }

      const zigzagRows = rows.map((row, rowIndex) => {
        if (rowIndex % 2 !== 0) return [...row].reverse()
        return row
      })

      return zigzagRows.reverse()
    },
  },
  mounted() {
    if (this.squares.length === 0) {
      squareInit()
    }
  },
}
</script>

<!-- Temporary Gameboard -->
<template>
  <div class="gameboardContainer">
    <table class="gameTable">
      <tbody>
        <tr v-for="(row, rowIndex) in gridRows" :key="'row-' + rowIndex">
          <BoardSquare :row="row" />
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style></style>
