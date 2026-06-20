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
  <div class="relative p-6 mt-5 mx-auto">
    <!-- Halo subtil derrière le plateau -->
    <div class="absolute inset-0 flex items-center justify-center pointer-events-none">
      <div class="w-225 h-225 rounded-full bg-white/5 blur-3xl" />
    </div>

    <!-- Plateau -->
    <div
      class="relative bg-zinc-900/80 backdrop-blur-sm border border-zinc-700 rounded-3xl p-4 shadow-2xl shadow-black/50 w-250 mx-auto"
    >
      <div class="flex flex-col gap-2">
        <div
          v-for="(row, rowIndex) in gridRows"
          :key="'row-' + rowIndex"
          class="grid grid-cols-8 gap-1"
        >
          <BoardCell :row="row" />
        </div>
      </div>
    </div>
  </div>
</template>
