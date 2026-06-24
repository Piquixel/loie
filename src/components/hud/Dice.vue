<!-- eslint-disable vue/multi-word-component-names -->
<!-- Component of a dice -->
<script lang="ts">
import useDice from '@/composables/useDice'
import * as usePlayers from '@/composables/usePlayers'
import type { DiceData } from '@/models/interfaces/dice.interface'
import { isOccupied } from '@/services/dice'
import { addEventLog } from '@/services/eventLog'
import { getContrastRatios } from 'cococh'
import { defineComponent } from 'vue'

const { rollTwoDices } = useDice()
const { moveCurrentPlayer, checkEnd, getCurrentPlayer, passTurn } = usePlayers

export default defineComponent({
  data() {
    return {
      isRolling: false,
      isOccupied: isOccupied.value,
      dice: null as ReturnType<typeof useDice> | null,
      dice1: 1,
      dice2: 1,
      total: 0,
      firstTurn: true,
    }
  },

  created(): void {
    this.dice = useDice()
  },

  methods: {
    async roll(): Promise<void> {
      if (this.isRolling) return
      this.isRolling = true
      isOccupied.value = true

      const interval = setInterval(() => {
        this.dice1 = Math.floor(Math.random() * 6) + 1
        this.dice2 = Math.floor(Math.random() * 6) + 1

        this.total = this.dice1 + this.dice2
      }, 100)

      await new Promise<void>((resolve) => setTimeout(resolve, 1000))

      clearInterval(interval)

      if (this.dice) {
        const result: DiceData = rollTwoDices()
        this.dice1 = result.first
        this.dice2 = result.second
        this.total = result.total

        addEventLog({
          message: `${this.getCurrentPlayer.name} a obtenu un total de ${this.total}.`,
          type: 'dice',
        })

        await new Promise<void>((resolve) => setTimeout(resolve, 500))

        let jumpTo = this.total
        if (this.firstTurn && this.total == 9) {
          jumpTo = this.dice1 == 3 || this.dice1 == 6 ? 26 : 53
          addEventLog({
            message: `${this.getCurrentPlayer.name} a obtenu un total de 9 au premier tour et avance à la case ${jumpTo}.`,
            type: 'effect',
          })
        }

        await moveCurrentPlayer(jumpTo)

        if (this.getCurrentPlayer.id == 4) {
          this.firstTurn = false
        }

        if (checkEnd()) {
          addEventLog({
            message: `${this.getCurrentPlayer.name} a gagné la partie !`,
            type: 'system',
          })

          this.$emit('gameOver', checkEnd())
        } else {
          passTurn()
        }
      }

      this.isRolling = false
    },
    playerColorClass(hex: string) {
      return { backgroundColor: hex }
    },
    checkContrast(backgroundColor: string): boolean {
      const ratios = getContrastRatios('#ffffff', backgroundColor)
      if (!ratios || !ratios.large) return true

      return ratios.large.AA
    },
  },

  computed: {
    checkEnd() {
      return checkEnd()
    },

    getCurrentPlayer() {
      return getCurrentPlayer()
    },
  },
})
</script>
<template>
  <div class="absolute top-1/2 right-6 flex -translate-y-1/2 flex-col gap-4">
    <div
      class="flex flex-col items-center rounded-xl p-4 text-white shadow-lg transition"
      :style="playerColorClass(getCurrentPlayer.color)"
    >
      <span :class="checkContrast(getCurrentPlayer.color) ? 'text-white' : 'text-black'"
        >Au tour de</span
      >
      <span :class="checkContrast(getCurrentPlayer.color) ? 'text-white' : 'text-black'">{{
        getCurrentPlayer.name
      }}</span>
    </div>
    <button
      @click="roll"
      :disabled="isRolling || isOccupied"
      class="cursor-pointer flex flex-col items-center rounded-xl bg-zinc-800 p-4 text-white shadow-lg transition hover:bg-zinc-700 hover:cursor-pointer"
    >
      <span class="text-3xl">🎲</span>
      <span>Lancer</span>
    </button>

    <div class="rounded-xl bg-zinc-800 p-4 text-center text-white shadow-lg">
      <div class="text-sm text-gray-400">Dernier lancer</div>

      <div class="mt-2 flex gap-2">
        <div
          :class="[
            'flex h-12 w-12 items-center justify-center rounded-lg bg-white text-2xl text-black',
            { 'animate-pulse': isRolling },
          ]"
        >
          {{ dice1 }}
        </div>

        <div
          :class="[
            'flex h-12 w-12 items-center justify-center rounded-lg bg-white text-2xl text-black',
            { 'animate-pulse': isRolling },
          ]"
        >
          {{ dice2 }}
        </div>
      </div>

      <div class="mt-2">Total : {{ total }}</div>
    </div>
  </div>
</template>

<style scoped></style>
