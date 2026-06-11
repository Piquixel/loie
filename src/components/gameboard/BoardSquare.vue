<!-- Component of a square -->
<script>
export default {
  props: {
    row: Array,
  },
}
</script>

<template>
  <div>
    <td
      v-for="square in row"
      :key="'square-' + square.id"
      :class="[square.type, { hasEffect: square.hasEffect }]"
    >
      <div
        class="flex flex-col aspect-square size-24 border border-neutral-400 justify-between p-1"
      >
        <span class="squareNumber">{{ square.id }}</span>
        <span class="text-end" v-if="square.hasEffect">{{ square.label }}</span>
      </div>
    </td>
  </div>
</template>

<style></style>
