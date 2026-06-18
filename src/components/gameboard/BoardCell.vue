<!-- Component of a square -->
<script lang="ts">
import type { BoardCell } from '@/boardCell'
import type { PropType } from 'vue'
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    row: Array as PropType<BoardCell[]>,
  },
})
</script>

<template>
  <div class="board-cell-container">
    <td
      v-for="cell in row"
      :key="'cell-' + cell.id"
      :class="[cell.type, { hasEffect: cell.hasEffect }]"
    >
      <div
        class="flex flex-col-reverse aspect-square size-24 border border-white/10 rounded-md justify-between p-1"
      >
        <span class="text-end squareNumber">{{ cell.id }}</span>
        <span v-if="cell.hasEffect">{{ cell.label }}</span>
      </div>
    </td>
  </div>
</template>

<style></style>
