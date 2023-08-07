import { removeStatuses } from "./validation-status-handlers"

function resetField() {
  this.value = ""
  removeStatuses(this)
}

export { resetField }
