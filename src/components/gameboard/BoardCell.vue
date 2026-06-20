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
  <div v-for="cellInfo in cellsWithPlayers" :key="'cell-' + cellInfo.cell.id">
    <div
      class="relative size-24 aspect-square rounded-xl bg-linear-to-b from-zinc-800 to-zinc-900 border border-zinc-700 transition-all duration-200 hover:-translate-y-1 hover:border-zinc-500 hover:shadow-lg hover:shadow-black/40"
    >
      <div
        v-if="cellInfo.cell.hasEffect"
        class="absolute top-2 text-xs font-medium text-orange-400 flex justify-end w-full"
      >
        <span
          class="px-2 py-0.5 mr-1 rounded-full text-xs font-medium bg-orange-500/10 text-orange-400"
        >
          {{ cellInfo.cell.label }}
        </span>
      </div>
      <div v-else class="absolute top-2 right-2 text-zinc-400 text-xs font-medium">
        {{ cellInfo.cell.id }}
      </div>

      <div class="absolute inset-0 flex items-center justify-center gap-1 flex-wrap px-4 py-6 mt-2">
        <PlayerToken v-for="player in cellInfo.players" :key="player.id" :color="player.color" />
      </div>
    </div>
  </div>
</template>

<style></style>
