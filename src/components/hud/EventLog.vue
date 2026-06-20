<script setup lang="ts">
import type { logEvent } from '@/models/interfaces/eventLog.interface'

defineProps<{
  events: logEvent[]
}>()
</script>

<template>
  <div
    class="w-100 h-60 absolute left-4 top-1/2 -translate-y-1/2 bg-zinc-900/80 backdrop-blur-sm border border-zinc-700 rounded-2xl shadow-xl shadow-black/30 flex flex-col scrollbar-thin scrollbar-thumb-zinc-700 scrollbar-track-transparent"
  >
    <div class="px-4 py-3 border-b border-zinc-700 font-semibold text-zinc-100">
      Journal des événements
    </div>

    <div class="flex-1 overflow-y-auto p-3 flex flex-col gap-2">
      <div v-if="events.length === 0" class="text-zinc-500 text-sm italic">Aucun événement</div>

      <div
        v-for="(event, index) in [...events].reverse()"
        :key="index"
        class="text-sm text-zinc-300 bg-zinc-800/60 rounded-lg px-3 py-2"
      >
        {{ event.message }}
      </div>
    </div>
  </div>
</template>
