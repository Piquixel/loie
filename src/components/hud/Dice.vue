<!-- eslint-disable vue/multi-word-component-names -->
<!-- Component of a dice -->
<script>
import useDice from '@/composables/useDice'
export default {
  data() {
    return {
      isRolling: false,
      dice1: 1,
      dice2: 1,
      total: 1,
    }
  },

  created() {
    this.dice = useDice()
  },

  methods: {
    async roll() {
      this.isRolling = true

      const interval = setInterval(() => {
        this.dice1 = Math.floor(Math.random() * 6) + 1
        this.dice2 = Math.floor(Math.random() * 6) + 1

        this.total = this.dice1 + this.dice2
      }, 100)

      await new Promise((resolve) => setTimeout(resolve, 1000))

      clearInterval(interval)

      const result = this.dice.rollTwoDices()

      this.dice1 = result.first
      this.dice2 = result.second
      this.total = result.total

      this.isRolling = false

      //futur emit OU envois pour move
    },
  },
}
</script>
<template>
  <div class="absolute top-1/2 right-6 flex -translate-y-1/2 flex-col gap-4">
    <button
      @click="roll"
      class="flex flex-col items-center rounded-xl bg-zinc-800 p-4 text-white shadow-lg transition hover:bg-zinc-700 hover:cursor-pointer"
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
