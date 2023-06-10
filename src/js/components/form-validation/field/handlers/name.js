import { minmaxLength } from './minmax-length';
import { ERROR_MESSAGES } from '../../consts';

function name() {
  const regExp = new RegExp('[\\[\\]{}!"£$%^&*()-=_+@~\'#;:<>?\\/]')
  const isEmpty = this.$input.value === '';
  const { isMinMaxLengthValid, minLength, maxLength, currentLength } = minmaxLength(this.$input);

  if (isEmpty && this.$error) {
    this.isValid = false;
    this.$error.innerHTML = ERROR_MESSAGES.empty;
    return;
  }

  if (this.$input.value.match(regExp) && this.$error) {
    this.isValid = false;
    this.$error.innerHTML = ERROR_MESSAGES.name;
    return;
  }

  if (!isMinMaxLengthValid) {
    this.isValid = false;
    this.$error.innerHTML = ERROR_MESSAGES.minmaxLength(minLength, maxLength, currentLength);
    return;
  }

  this.isValid = true;
}

export { name };
