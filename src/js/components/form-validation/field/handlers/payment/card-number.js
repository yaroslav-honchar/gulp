const setCardTypeHandle = (cardTypeSate, currentFormState) => {
  const currentForm = currentFormState.el;
  const cardTypeTarget = currentForm.querySelector('.js-card-type-target');
  const cardTypeInput = cardTypeTarget && cardTypeTarget.querySelector('input');

  if (!cardTypeTarget) return console.warn('Card type field is no defined');
  for (const card in cardTypeSate) {
    if (Object.hasOwnProperty.call(cardTypeSate, card)) {
      const element = cardTypeSate[card];
      if (element.status) {
        cardTypeTarget.classList.add(element.class);

        if (!cardTypeInput) return console.warn('Card type input is no defined');
        cardTypeInput.value = element.type || '';
        return;
      } else {
        cardTypeTarget.classList.remove(element.class);
        if (cardTypeInput) {
          cardTypeInput.value = '';
        }
      }
    }
  }
};

function cardNumber() {
  const eventType = event.type;
  if (event.inputType !== 'deleteContentBackward') {
    input.value = input.value
      .replace(/\D/g, '')
      .replace(/[^a-z0-9]+/gi, '')
      .replace(/(.{4})/g, '$1 ')
      .slice(0, 19);
  }
  const value = input.value;
  const trimValue = value.replace(/\D/g, '');

  const isVisa = /^4[0-9]{0,15}$/.test(trimValue);
  const isMastercard = /^5$|^5[1-5][0-9]{0,14}$/.test(trimValue);
  const isAmexp = /^3$|^3[47][0-9]{0,13}$/.test(trimValue);
  const isDiscov = /^6$|^6[05]$|^601[1]?$|^65[0-9][0-9]?$|^6(?:011|5[0-9]{2})[0-9]{0,12}$/.test(trimValue);
  const isJsb = /^2[1]?$|^21[3]?$|^1[8]?$|^18[0]?$|^(?:2131|1800)[0-9]{0,11}$|^3[5]?$|^35[0-9]{0,14}$/.test(trimValue);

  const isValid = input.value !== '' && trimValue.length >= 15 && trimValue.length <= 16;

  const cardTypeSate = {
    visa: {
      status: isVisa,
      class: 'visa',
      type: 'Visa'
    },
    jsb: {
      status: isJsb,
      class: 'jsb',
      type: 'JCB'
    },
    mastercard: {
      status: isMastercard,
      class: 'master-card',
      type: 'Mastercard'
    },
    amexp: {
      status: isAmexp,
      class: 'american-express',
      type: 'American Express'
    }
  };

  setCardTypeHandle(cardTypeSate, currentFormState);

  validStatusHandle(isValid, input, currentFormState, isSubmit, eventType);

  return isValid;
}

export { cardNumber };
