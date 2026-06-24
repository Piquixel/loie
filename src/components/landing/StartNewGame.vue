<template>
  <Modal :show="true" title="Commencer une partie" :leavable="false">
    <form class="flex flex-col gap-6">
      <div class="grid grid-cols-2 gap-4">
        <div
          v-for="(player, index) in players"
          :key="index"
          class="rounded-2xl border border-zinc-700 bg-zinc-800/50 p-4 transition-all duration-200 hover:border-zinc-500"
        >
          <div class="mb-4 flex items-center gap-3">
            <div
              :class="[
                'h-4 w-4 rounded-full',
                {
                  'bg-red-500': player.color === 'red',
                  'bg-blue-500': player.color === 'blue',
                  'bg-yellow-400': player.color === 'yellow',
                  'bg-green-500': player.color === 'green',
                },
              ]"
            />

            <span class="font-semibold text-zinc-100"> Joueur {{ index + 1 }} </span>
          </div>
          <label class="text-white" for="pseudo">Pseudo:</label>

          <input
            v-model="player.name"
            type="text"
            class="w-full rounded-lg border border-zinc-600 bg-zinc-900 px-3 py-2 text-white focus:border-blue-500 focus:outline-none"
          />

          <label class="text-white" for="color">Couleur:</label>

          <select
            v-model="player.color"
            class="w-full rounded-lg border border-zinc-600 bg-zinc-900 px-3 py-2 text-white focus:border-blue-500 focus:outline-none"
          >
            <option class="text-red-500" value="red">Rouge</option>
            <option class="text-blue-500" value="blue">Bleu</option>
            <option class="text-yellow-400" value="yellow">Jaune</option>
            <option class="text-green-500" value="green">Vert</option>
          </select>
        </div>
      </div>
      <button
        class="self-center rounded-xl bg-blue-600 px-8 py-3 font-semibold transition-all hover:bg-blue-500 hover:shadow-lg hover:cursor-pointer hover:shadow-blue-500/20 disabled:bg-zinc-700 disabled:text-zinc-400 disabled:shadow-none"
        name="footer"
        :disabled="!arePlayersValid"
        @click="$emit('startGame', players)"
      >
        Lancer la partie
      </button>
    </form>
  </Modal>
</template>

<script lang="ts">
import type { Player } from '@/models/interfaces/player.interface.ts'
import { defineComponent } from 'vue'
import Modal from '../ui/Modal.vue'

export default defineComponent({
  components: {
    Modal,
  },

  data() {
    return {
      players: [
        { name: 'Player 1', color: 'red' },
        { name: 'Player 2', color: 'blue' },
        { name: 'Player 3', color: 'yellow' },
        { name: 'Player 4', color: 'green' },
      ] as Player[],
    }
  },

  computed: {
    arePlayersValid() {
      const names = this.players.map((p) => p.name.trim())
      const colors = this.players.map((p) => p.color)

      const hasEmptyName = names.some((name) => name === '')
      const hasDuplicateName = new Set(names).size !== names.length
      const hasDuplicateColor = new Set(colors).size !== colors.length

      return !hasEmptyName && !hasDuplicateName && !hasDuplicateColor
    },
  },
})
</script>
