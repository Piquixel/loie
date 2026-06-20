<!-- Main game's component, the only components that will not be inside is home/landing -->
<script lang="ts">
import type { Player } from '@/models/interfaces/player.interface'
import { cells } from '@/services/gameEngine'
import { defineComponent, type PropType } from 'vue'
import GameBoard from './gameboard/GameBoard.vue'
import Hud from './hud/Hud.vue'
import Modal from './ui/Modal.vue'

export default defineComponent({
  components: { GameBoard, Hud, Modal },
  props: {
    players: {
      type: Array as PropType<Player[]>,
      required: true,
    },
  },
  data() {
    return {
      cells,
      gameRunning: true,
      winner: '',
    }
  },

  methods: {
    gameOver(winner: Player) {
      this.winner = winner.name
      this.gameRunning = false
    },

    restartGame() {
      this.winner = ''
      this.gameRunning = true
      this.$emit('restartGame')
    },
  },

  computed: {
    playerColorClass(): Record<string, string> {
      return {
        red: 'bg-red-500',
        blue: 'bg-blue-500',
        green: 'bg-green-500',
        yellow: 'bg-yellow-500',
      }
    },
  },
})
</script>

<template>
  <div>
    <div
      class="fixed inset-0 flex items-center justify-center bg-black/70 backdrop-blur-sm p-6"
    ></div>
    <GameBoard class="fixed inset-0 top-5 z-10" />

    <Hud v-if="gameRunning" :players="players" class="fixed inset-0 z-10" @gameOver="gameOver" />

    <Modal title="Partie terminée" :show="!gameRunning && winner != ''">
      <h3 class="text-center text-4xl font-bold text-yellow-400">🎉 {{ winner }}</h3>

      <p class="text-center text-zinc-400 text-lg">remporte la partie !</p>

      <div class="mt-8">
        <h4 class="mb-4 text-xl font-semibold text-zinc-100">Classement final</h4>

        <div class="flex flex-col gap-3">
          <div
            v-for="(player, index) in players"
            :key="player.id"
            class="flex items-center justify-between rounded-2xl border border-zinc-700 bg-zinc-800/50 px-5 py-4 transition-all"
            :class="{
              'border-yellow-500 bg-yellow-500/10': player.name === winner,
            }"
          >
            <div class="flex items-center gap-4">
              <div
                class="flex h-8 w-8 items-center justify-center rounded-full bg-zinc-900 font-bold"
              >
                {{ index + 1 }}
              </div>

              <div class="h-4 w-4 rounded-full" :class="playerColorClass[player.color]" />

              <span class="font-medium">
                {{ player.name }}
              </span>
            </div>

            <span class="text-zinc-400"> Case {{ player.position }} </span>
          </div>
        </div>
      </div>

      <template #footer>
        <div class="flex justify-center">
          <button
            @click="restartGame"
            class="rounded-xl bg-blue-600 px-8 py-3 font-semibold text-white transition-all hover:cursor-pointer hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-500/20"
          >
            Rejouer
          </button>
        </div>
      </template>
    </Modal>
  </div>
</template>
