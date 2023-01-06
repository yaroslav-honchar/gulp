const addInvalidClass = (el, bool) => {
  if (bool) {
    el.classList.remove('invalid');
    el.classList.add('valid');
  } else {
    el.classList.add('invalid');
    el.classList.remove('valid');
  }
};

const mailValidate = input => {
  const mailValid = /\S+@\S+\.\S+/.test(input.value);
  addInvalidClass(input.closest('.form-primary__field'), mailValid);
  return mailValid;
};

const phoneValidate = input => {
  const mailValid = input.value.length === +input.maxLength;
  addInvalidClass(input.closest('.form-primary__field'), mailValid);
  return mailValid;
};

const emptyInputValidate = input => {
  const inputValid = input.value !== '';
  addInvalidClass(input.closest('.form-primary__field'), inputValid);
  return inputValid;
};

const selectValidate = input => {
  const inputValid = JSON.parse(input.value);
  addInvalidClass(input.closest('.form-primary__field'), inputValid);
  return inputValid;
};

const formHandler = input => {
  if (!JSON.parse(input.dataset.needValidation.toLowerCase())) return;

  switch (input.dataset.validationType) {
    case 'email':
      return mailValidate(input);

    case 'phone':
      return phoneValidate(input);

    case 'empty':
      return emptyInputValidate(input);

    case 'select':
      return selectValidate(input);
  }
};

export {
  formHandler,
};
