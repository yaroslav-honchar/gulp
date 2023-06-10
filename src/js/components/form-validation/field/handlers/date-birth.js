function dateBirth() {
  const eventType = event.type;
  let isValid = true;
  let today = new Date();
  // set values
  let dd = today.getDate() + 1;
  let mm = today.getMonth() + 1; //January is 0!
  let yyyy = today.getFullYear() - 18;
  if (dd < 10) {
    dd = '0' + dd;
  }
  if (mm < 10) {
    mm = '0' + mm;
  }
  // set values end
  let invalidDate = yyyy + '-' + mm + '-' + dd;

  if (input.value >= invalidDate || input.value == '') {
    isValid = false;
  }

  validStatusHandle(isValid, input, currentFormState, isSubmit, eventType);

  return isValid;
}

export { dateBirth };
