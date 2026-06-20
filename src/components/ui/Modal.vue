<!-- eslint-disable vue/multi-word-component-names -->
<!-- Template component of a modal (use for landing, display square effects or winner/loser result at endgame) -->
<template>
  <Teleport to="body">
    <div
      v-if="show"
      class="fixed inset-0 flex items-center justify-center bg-black/70 backdrop-blur-sm p-6 z-50"
      @click.self="close"
    >
      <div
        class="w-full max-w-4xl rounded-3xl border border-zinc-700 bg-zinc-900/95 backdrop-blur-md shadow-2xl shadow-black/60 text-white overflow-hidden"
      >
        <div class="border-b border-zinc-700 px-8 py-5">
          <slot name="header">
            <h2 class="text-2xl font-bold tracking-wide">
              {{ title }}
            </h2>
          </slot>
        </div>

        <div class="p-8">
          <slot />
        </div>

        <div v-if="$slots.footer" class="border-t border-zinc-700 px-8 py-5">
          <slot name="footer" />
        </div>
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
