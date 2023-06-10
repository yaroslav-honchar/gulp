import { ERROR_MESSAGES } from '../../consts';
import { minmaxLength } from './minmax-length';

function empty() {
  const isEmpty = this.$input.value !== '';
  const { isMinMaxLengthValid, minLength, maxLength, currentLength } = minmaxLength(this.$input);

  if (!isEmpty) {
    this.isValid = false;
    this.$error.innerHTML = ERROR_MESSAGES.empty;
    return;
  }

  if (!isMinMaxLengthValid) {
    this.isValid = false;
    this.$error.innerHTML = ERROR_MESSAGES.minmaxLength(minLength, maxLength, currentLength);
    return;
  }

  this.isValid = true;
}

export { empty };
