function setInvalid (field) {
  field.$field.classList.add('invalid');
  field.$field.classList.remove('valid');
}

function setValid (field) {
  field.$field.classList.add('valid');
  field.$field.classList.remove('invalid');
}

function removeStatuses(field) {
  field.$field.classList.remove('valid');
  field.$field.classList.remove('invalid');
}

function setValidStatus() {
  if (this.isValid && this.isRequired) {
    setValid(this);
  } else if (!this.isValid) {
    setInvalid(this);
  }
}

export { setValidStatus, removeStatuses };
