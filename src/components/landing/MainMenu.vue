<!-- Component of landing state, the first step before starting a game -->
<template>
  <Modal :show="hasSavedGame" title="Partie sauvegardée" @close="showGameChoiceModal = false">
    <div class="flex flex-col gap-4">
      <p>Une partie sauvegardée a été détectée.</p>

      <p>Souhaitez-vous continuer votre partie ou en créer une nouvelle ?</p>
    </div>

    <template #footer>
      <div class="flex justify-end gap-4">
        <button
          class="rounded-xl bg-blue-600 px-8 py-3 font-semibold transition-all hover:bg-blue-500 hover:shadow-lg hover:cursor-pointer hover:shadow-blue-500/20 disabled:bg-zinc-700 disabled:text-zinc-400 disabled:shadow-none"
          @click="continueGame"
        >
          Continuer
        </button>

        <button
          class="rounded-xl bg-blue-600 px-8 py-3 font-semibold transition-all hover:bg-blue-500 hover:shadow-lg hover:cursor-pointer hover:shadow-blue-500/20 disabled:bg-zinc-700 disabled:text-zinc-400 disabled:shadow-none"
          @click="openNewGameModal"
        >
          Nouvelle partie
        </button>
      </div>
    </template>
  </Modal>
  <StartNewGame v-if="showNewGameModal || !hasSavedGame" @startGame="$emit('startGame', $event)" />
</template>

<script lang="ts">
import { Storage } from '@/services/storageManager.ts'
import { defineComponent } from 'vue'
import Modal from '../ui/Modal.vue'
import StartNewGame from './StartNewGame.vue'

export default defineComponent({
  components: {
    StartNewGame,
    Modal,
  },

  data() {
    return {
      showGameChoiceModal: false,
      showNewGameModal: false,
    }
  },

  computed: {
    hasSavedGame(): boolean {
      return Storage.load() !== false
    },
  },

  methods: {
    continueGame() {
      this.$emit('resumeSavedGame')
    },

    openNewGameModal() {
      this.showGameChoiceModal = false
      this.showNewGameModal = true
    },
  },
})
</script>
