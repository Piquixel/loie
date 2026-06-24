<!-- Component of landing state, the first step before starting a game -->
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
          <label class="text-white" :for="'nickname-' + Number(index + 1)">Pseudo:</label>

          <input
            v-model="player.name"
            :id="'nickname-' + Number(index + 1)"
            type="text"
            class="w-full rounded-lg border border-zinc-600 bg-zinc-900 px-3 py-2 text-white focus:border-blue-500 focus:outline-none"
          />

          <label class="text-white" :for="'color-' + Number(index + 1)">Couleur:</label>
          <input
            type="color"
            :id="'color-' + Number(index + 1)"
            class="appearance-none size-10 rounded-full border-zinc-600 border cursor-pointer block"
            v-model="player.color"
          />
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
import type { Player } from '@/models/interfaces/player.interface'
import { defineComponent } from 'vue'
import Modal from '../ui/Modal.vue'

export default defineComponent({
  components: {
    Modal,
  },

  data() {
    return {
      players: [
        { name: 'Player 1', color: '#FF0000' },
        { name: 'Player 2', color: '#0000FF' },
        { name: 'Player 3', color: '#FFFF00' },
        { name: 'Player 4', color: '#00FF00' },
      ] as Player[],
    }
  },

  computed: {
    arePlayersValid() {
      const names = this.players.map((p) => p.name.trim())
      const colors = this.players.map((p) => p.color.toUpperCase())

      console.log(this.players.map((p) => p.color))

      const hasEmptyName = names.some((name) => name === '')
      const hasDuplicateName = new Set(names).size !== names.length
      const hasDuplicateColor = new Set(colors).size !== colors.length

      return !hasEmptyName && !hasDuplicateName && !hasDuplicateColor
    },
  },
})
</script>

<style>
input[type='color']::-webkit-color-swatch-wrapper {
  padding: 0;
}

input[type='color']::-webkit-color-swatch {
  border: none;
}
</style>

<!-- <style scoped>
.playersForm {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  font-size: 1.2rem;
}

.playerInput {
  display: flex;
  justify-content: space-around;
  gap: 1rem;
}

.playerInput label {
  color: white;
}

.footer {
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  justify-self: center;

  &:hover {
    background-color: #0056b3;
    transition: background-color 0.3s;
  }
}

.footer:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

.color-option {
  background-color: rgb(58, 58, 58);
  cursor: pointer;

  &.red {
    color: red !important;
  }

  &.blue {
    color: blue !important;
  }

  &.yellow {
    color: yellow !important;
  }

  &.green {
    color: green !important;
  }

  &:selected {
    font-weight: bold;
  }

  &:hover {
    filter: brightness(1.2);
    transition: filter 0.3s;
  }
}

select:hover,
option:hover {
  filter: brightness(1.2);
  transition: filter 0.3s;
  background-color: inherit;
  cursor: pointer;
}
</style> -->
