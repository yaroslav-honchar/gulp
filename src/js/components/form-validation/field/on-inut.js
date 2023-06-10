import { removeStatuses } from './validation-status-handlers';

function onInput(event) {
  const { target } = event;

  removeStatuses(this)
  this.value = target.value;
  event.target.value = target.value
}

export { onInput };
