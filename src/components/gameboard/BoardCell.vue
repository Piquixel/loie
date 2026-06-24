<!-- Component of a square -->
<script lang="ts">
import type { BoardCell } from '@/boardCell'
import * as usePlayers from '@/composables/usePlayers'
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
  <div v-for="cellInfo in cellsWithPlayers" :key="'cell-' + cellInfo.cell.id" class="tooltip">
    <span class="tooltiptext -translate-y-10" v-if="cellInfo.cell.desc !== ''">{{
      cellInfo.cell.desc
    }}</span>
    <div
      class="relative size-24 aspect-square rounded-xl bg-linear-to-b from-zinc-800 to-zinc-900 border border-zinc-700 transition-all duration-200 hover:-translate-y-1 hover:border-zinc-500 hover:shadow-lg hover:shadow-black/40 flex justify-center items-center"
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

      <div class="grid grid-cols-2 gap-1 size-fit items-center justify-items-center">
        <PlayerToken
          v-for="player in cellInfo.players"
          :key="player.id"
          :color="player.color"
          class="odd:last:col-span-full"
        />
      </div>
    </div>
  </div>
</template>

<style>
.tooltip {
  position: relative;
  display: inline-block;
  cursor: pointer;
}

.tooltiptext {
  visibility: hidden;
  min-width: 200px;
  background-color: hsla(0, 0%, 0%, 0.5);
  color: #fff;
  text-align: center;
  border-radius: 15px;
  padding: 5px 5px;
  position: absolute;
  z-index: 1;
  transition: all ease-in 200ms;
}

.tooltip:hover .tooltiptext {
  visibility: visible;
}
</style>
