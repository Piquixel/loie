<!-- Component of the board -->
<script lang="ts">
import { cellInit, cells } from '@/services/gameEngine'
import { defineComponent } from 'vue'
import BoardCell from './BoardCell.vue'

export default defineComponent({
  components: { BoardCell },
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
      cellInit()
    }
  },
})
</script>

<!-- Temporary Gameboard -->
<template>
  <div class="gameboardContainer">
    <table
      class="gameTable bg-zinc-800 border border-white/10 text-white rounded-lg overflow-hidden"
    >
      <tbody class="grid gap-1 p-1">
        <tr v-for="(row, rowIndex) in gridRows" :key="'row-' + rowIndex">
          <BoardCell :row="row" class="grid grid-cols-8 gap-1" />
        </tr>
      </tbody>
    </table>
  </div>
</template>
