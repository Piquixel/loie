<!-- eslint-disable vue/multi-word-component-names -->
<!-- Template component of a modal (use for landing, display square effects or winner/loser result at endgame) -->
<template>
  <Teleport to="body">
    <div
      v-if="show"
      class="fixed inset-0 flex items-center justify-center bg-black/50"
      @click.self="close"
    >
      <div class="w-full max-w-2/5 rounded-lg bg-zinc-700 p-5 text-white flex flex-col gap-10">
        <slot name="header">
          <h2 class="mt-0 text-2xl font-semibold">
            {{ title }}
          </h2>
        </slot>

        <slot />

        <slot name="footer" />
      </div>
    </div>
  </Teleport>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  props: {
    show: {
      type: Boolean,
      default: false,
    },
    leavable: {
      type: Boolean,
      default: true,
    },
    title: {
      type: String,
      default: '',
    },
  },

  methods: {
    close() {
      this.$emit('close')
    },

    handleKeydown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        this.close()
      }
    },
  },

  mounted() {
    if (this.leavable) {
      window.addEventListener('keydown', this.handleKeydown)
    }
  },

  unmounted() {
    window.removeEventListener('keydown', this.handleKeydown)
  },

  emits: ['startGame', 'close'],
})
</script>

<!-- <style>
:host {
  font-family: 'Arial', sans-serif;
  color: white;
}

:deep(.modal-overlay) {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  background-color: rgb(68, 68, 68);
  padding: 20px;
  border-radius: 8px;
  max-width: 500px;
  width: 100%;
}

.modal h2 {
  margin-top: 0;
  color: white;
}
</style> -->
