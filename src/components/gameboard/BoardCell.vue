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
  <div>
    <td
      v-for="cell in row"
      :key="'cell-' + cell.id"
      :class="[cell.type, { hasEffect: cell.hasEffect }]"
    >
      <div
        class="flex flex-col aspect-square size-24 border border-neutral-400 justify-between p-1"
      >
        <span class="squareNumber">{{ cell.id }}</span>
        <span class="text-end" v-if="cell.hasEffect">{{ cell.label }}</span>
      </div>
    </td>
  </div>
</template>

<style></style>
