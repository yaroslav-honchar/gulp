import { ERROR_MESSAGES } from '../../consts';

function email() {
  const regExp = new RegExp('^[\\w!#$%&\'*+\\-/=?^`{|}~]+(?:\\.[\\w!#$%&\'*+\\-/=?^`{|}~]+)*@(?:([a-z0-9][a-z0-9-]{0,62}[a-z0-9]|[a-z])\\.)+[a-z]{2,11}|\\d{1,3}(?:\\.\\d{1,3}){3}(?::\\d{1,11})?$', 'i');

  const isEmpty = this.$input.value === '';

  if (isEmpty && this.$error) {
    this.isValid = false;
    this.$error.innerHTML = ERROR_MESSAGES.empty;
    return;
  }

  if (!regExp.test(this.$input.value) && this.$error) {
    this.isValid = false;
    this.$error.innerHTML = ERROR_MESSAGES.email;
    return;
  }

  this.isValid = true;
}

export { email };
