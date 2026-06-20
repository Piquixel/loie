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
  <div
    v-for="cellInfo in cellsWithPlayers"
    :key="'cell-' + cellInfo.cell.id"
    :class="[
      'relative aspect-square size-24 rounded-xl border bg-zinc-900',
      cellInfo.cell.type,
      { hasEffect: cellInfo.cell.hasEffect },
    ]"
  >
    <div
      class="relative aspect-square size-24 rounded-xl border border-zinc-700 bg-zinc-900 transition-all duration-200 hover:-translate-y-1 hover:border-zinc-500 hover:shadow-lg hover:shadow-black/50"
    >
      <div class="absolute top-2 right-2 text-sm font-semibold text-zinc-300">
        {{ cellInfo.cell.id }}
      </div>

      <div
        v-if="cellInfo.cell.hasEffect"
        class="absolute top-2 left-2 text-xs font-medium text-orange-400 max-w-3/5"
      >
        {{ cellInfo.cell.label }}
      </div>

      <div class="absolute bottom-2 left-2 flex flex-wrap gap-1">
        <PlayerToken v-for="player in cellInfo.players" :key="player.id" :color="player.color" />
      </div>
    </div>
  </div>
</template>

<style></style>
