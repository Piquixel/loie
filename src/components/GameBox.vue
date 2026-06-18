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
  },

  computed: {
    playerColorClass(): Record<string, string> {
      return {
        red: 'bg-red-600',
        blue: 'bg-blue-600',
        green: 'bg-green-600',
        yellow: 'bg-yellow-600',
      }
    },
  },
})
</script>

<template>
  <div class="game-box-wrapper">
    <GameBoard />

    <Hud v-if="gameRunning" :players="players" class="fixed inset-0 z-10" @gameOver="gameOver" />

    <Modal title="Partie terminée" :show="!gameRunning && winner != ''">
      <h3 class="text-2xl">🎉 {{ winner }} a gagné la partie !</h3>

      <div class="players-results">
        <h4>Classement final</h4>

        <ul>
          <li v-for="player in players" :key="player.id" class="flex gap-2 mt-5">
            <div class="rounded-full w-7 h-7" :class="playerColorClass[player.color]"></div>
            {{ player.name }} - Case {{ player.position }}
          </li>
        </ul>
      </div>

      <template #footer>
        <button
          @click="$emit('restartGame')"
          class="mt-5 self-center rounded bg-blue-600 px-5 py-2.5 text-white transition-colors hover:bg-blue-700 hover:cursor-pointer"
        >
          Rejouer
        </button>
      </template>
    </Modal>
  </div>
</template>
