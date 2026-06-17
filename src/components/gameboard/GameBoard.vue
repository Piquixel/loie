<!-- Component of the board -->
<script lang="ts">
import { cells, squareInit } from '@/services/gameEngine'
import { defineComponent } from 'vue'
import BoardSquare from './BoardCell.vue'

export default defineComponent({
  components: { BoardSquare },
  data() {
    return {
      cells,
    }
  },
  computed: {
    gridRows() {
      const size = 8
      const rows = []

      for (let i = 0; i < size; i++) {
        const row = this.cells.slice(i * size, (i + 1) * size)
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
    if (this.cells.length === 0) {
      squareInit()
    }
  },
})
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
