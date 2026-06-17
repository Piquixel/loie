<!-- Component of landing state, the first step before starting a game -->
<template>
  <Modal :show="true" title="Commencer une partie" :leavable="false">
    <form class="flex w-full flex-col gap-4 text-[1.2rem]" @click.prevent="">
      <div v-for="(player, index) in players" :key="index" class="flex justify-around gap-4">
        <label class="text-white" for="pseudo">Pseudo:</label>

        <input
          v-model="player.name"
          :placeholder="player.name"
          name="pseudo"
          id="pseudo"
          type="text"
          class="rounded border border-gray-500 bg-zinc-700 px-2 py-1 text-white"
        />

        <label class="text-white" for="color">Couleur:</label>

        <select
          v-model="player.color"
          :class="[
            'cursor-pointer rounded bg-zinc-700 px-2 py-1',
            {
              'text-red-500': player.color === 'red',
              'text-blue-500': player.color === 'blue',
              'text-yellow-400': player.color === 'yellow',
              'text-green-500': player.color === 'green',
            },
          ]"
          name="color"
          id="color"
        >
          <option class="text-red-500" value="red">Rouge</option>
          <option class="text-blue-500" value="blue">Bleu</option>
          <option class="text-yellow-400" value="yellow">Jaune</option>
          <option class="text-green-500" value="green">Vert</option>
        </select>
      </div>

      <button
        class="mt-5 self-center rounded bg-blue-600 px-5 py-2.5 text-white transition-colors hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-gray-400"
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
import Modal from '../ui/Modal.vue'
import { defineComponent } from 'vue'

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
