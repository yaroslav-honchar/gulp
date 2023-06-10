import { ERROR_MESSAGES } from '../../consts';

function radioGroup() {
  let isChecked = false

  this.radioGroup.items.forEach($radio => {
    if ($radio.checked) {
      this.value = $radio.value;
      isChecked = true
    }
  });

  if(!isChecked) {
    this.isValid = false
    this.$error.innerHTML = ERROR_MESSAGES.radioGroup;
    return
  }

  this.isValid = true
}

export { radioGroup };
