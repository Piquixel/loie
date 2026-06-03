<!-- Component of landing state, the first step before starting a game -->
<template>
  <Modal :show="true" title="Commencer une partie" :leavable="false">
    <form class="playersForm" @click.prevent="">
      <div class="playerInput" v-for="(player, index) in players" :key="index">
        <label for="pseudo">Pseudo:</label>
        <input
          v-model="player.name"
          :placeholder="player.name"
          name="pseudo"
          id="pseudo"
          type="text"
        />

        <label for="color">Couleur:</label>
        <select
          v-model="player.color"
          :class="['color-option', player.color]"
          name="color"
          id="color"
        >
          <option class="color-option red" value="red">Rouge</option>
          <option class="color-option blue" value="blue">Bleu</option>
          <option class="color-option yellow" value="yellow">Jaune</option>
          <option class="color-option green" value="green">Vert</option>
        </select>
      </div>
      <button class="footer" name="footer" :disabled="!arePlayersValid">Lancer la partie</button>
    </form>
  </Modal>
</template>

<script>
import Modal from '../ui/Modal.vue'

export default {
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
      ],
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
}
</script>

<style scoped>
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
</style>
