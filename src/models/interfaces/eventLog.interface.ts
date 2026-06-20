export interface logEvent {
  message: string
  type: 'dice' | 'move' | 'effect' | 'system'
}
