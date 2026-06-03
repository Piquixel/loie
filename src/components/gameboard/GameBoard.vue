<!-- Component of the board -->
<script>
import { squareInit, squares } from '@/services/gameEngine'

export default {
  data() {
    return {
      squares,
    }
  },
  mounted() {
    squareInit()
  },
}
</script>

<!-- Temporary Gameboard -->
<template>
  <table border>
    <tbody>
      <tr v-for="(square, index) in Math.floor(Math.sqrt(squares.length))" :key="index">
        <td v-for="(square, index) in Math.floor(Math.sqrt(squares.length))" :key="index"></td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped></style>
