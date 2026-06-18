<!-- Component of a square -->
<script lang="ts">
import type { BoardCell } from '@/boardCell'
import usePlayers from '@/composables/usePlayers'
import type { PropType } from 'vue'
import { computed, defineComponent } from 'vue'
import PlayerToken from './PlayerToken.vue'

export default defineComponent({
  components: { PlayerToken },
  props: {
    row: Array as PropType<BoardCell[]>,
  },
  setup(props) {
    const { players } = usePlayers

    const cellsWithPlayers = computed(() => {
      return (props.row ?? []).map((cell) => ({
        cell,
        players: players.value.filter((player) => player.position === cell.id),
      }))
    })

    return {
      cellsWithPlayers,
    }
  },
})
</script>

<template>
  <div class="board-cell-container">
    <td
      v-for="cellInfo in cellsWithPlayers"
      :key="'cell-' + cellInfo.cell.id"
      :class="[cellInfo.cell.type, { hasEffect: cellInfo.cell.hasEffect }]"
    >
      <div
        class="flex flex-col-reverse aspect-square size-24 border border-white/10 rounded-md justify-between p-1"
      >
        <div class="flex items-center gap-1 flex-wrap">
          <PlayerToken v-for="player in cellInfo.players" :key="player.id" :color="player.color" />
        </div>
        <span class="text-end squareNumber">{{ cellInfo.cell.id }}</span>
        <span v-if="cellInfo.cell.hasEffect">{{ cellInfo.cell.label }}</span>
      </div>
    </td>
  </div>
</template>

<style></style>
