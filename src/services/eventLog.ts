import type { logEvent } from '@/models/interfaces/eventLog.interface'
import { ref } from 'vue'

const eventLogs = ref<logEvent[]>([])

export function addEventLog(log: logEvent) {
  eventLogs.value.push(log)
}

export function clearEventLogs() {
  eventLogs.value = []
}

export default { eventLogs, addEventLog, clearEventLogs }
