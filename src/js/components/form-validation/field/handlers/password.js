import { minmaxLength } from './minmax-length';
import { ERROR_MESSAGES } from '../../consts';

function password() {
  const regExp = new RegExp('^(?=.*[A-Z])(?=.*\\d)(?=.*[@#$%^&+=])');
  const isEmpty = this.$input.value === '';
  const { isMinMaxLengthValid, minLength, maxLength, currentLength } = minmaxLength(this.$input);

  if (isEmpty && this.$error) {
    this.isValid = false;
    this.$error.innerHTML = ERROR_MESSAGES.empty;
    return;
  }

  if (!regExp.test(this.$input.value) && this.$error) {
    this.isValid = false;
    this.$error.innerHTML = ERROR_MESSAGES.password(minLength, maxLength);
    return;
  }

  if (!isMinMaxLengthValid) {
    this.isValid = false;
    this.$error.innerHTML = ERROR_MESSAGES.minmaxLength(minLength, maxLength, currentLength);
    return;
  }

  this.isValid = true;
}

export { password };
