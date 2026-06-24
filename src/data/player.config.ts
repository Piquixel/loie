//Storage of default player's default value

import { ref } from 'vue'

const players = ref([
  {
    id: 1,
    name: 'Player 1',
    color: '#ff0000',
    position: '0',
  },
])

export { players }
