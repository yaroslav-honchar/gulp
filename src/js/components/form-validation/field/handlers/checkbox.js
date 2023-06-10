import { ERROR_MESSAGES } from '../../consts';

function checkbox() {
  const isChecked = this.$checkbox.checked

  if (!isChecked) {
    this.isValid = false;
    this.$error.innerHTML = ERROR_MESSAGES.checkbox;
    return;
  }

  this.isValid = true;
}

export { checkbox };
