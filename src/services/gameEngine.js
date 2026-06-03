import { BoardSquare } from '@/bordSquare'

export function squareInit() {
  function log() {
    console.log('hey')
  }

  return Array.from({ length: 64 }, (_key, index) => {
    if (index % 9 === 0 && index !== 0 && index !== 63) {
      return new BoardSquare(log)
    }

    return new BoardSquare()
  })
}
