<template>
  <div
    :style="{ backgroundColor: color }"
    class="size-4 rounded-full border-2 border-white shadow-md"
  />
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue'

export default defineComponent({
  props: {
    color: {
      type: String as PropType<string>,
      required: true,
    },
  },
})
</script>

<style scoped>
.pawn {
  width: 20px;
  height: 20px;
  border-radius: 9999px;
  flex: 0 0 auto;
}
</style>
