 const ERROR_MESSAGES = {
  // ===== Common messages
  empty: 'This field is required',
  minmax: (min, max) => {
    if (min && max) {
      return `The minimal number quantity has to be ${min}, and maximal ${max}`;
    } else if (min) {
      return `The minimal number quantity has to be ${min}.`;
    } else if (max) {
      return `The maximal number quantity has to be ${max}.`;
    }
  },
  minmaxLength: (minLength, maxLength, currentLength) => {
    if (minLength && minLength > 0 && maxLength && maxLength > 0) {
      return `The minimal value length has to be ${minLength}, and maximal ${maxLength}. Current length is ${currentLength}`;
    } else if (minLength && minLength > 0) {
      return `The minimal value length has to be ${minLength}. Current length is ${currentLength}`;
    } else if (maxLength && maxLength > 0) {
      return `The maximal value length has to be ${maxLength}. Current length is ${currentLength}`;
    }
  },

  // ===== Specific fields
  name: 'User name, has no contains any number or special symbols',
  email: 'Invalid email',
  tel: 'This field can contains only numbers, spaces and "(", ")", "-", "+" symbols',
  number: 'This field can contains, only numbers',
  checkbox: 'Confirm please the agreement',
  radioGroup: 'Choose please some tariff item',
  password: (minLength, maxLength) => {
    if (minLength && minLength > 0 && maxLength && maxLength > 0) {
      return `Password has contains one upper letter, one special symbol, one number charter and has to be from ${minLength} to ${maxLength} length`;
    } else if (minLength && minLength > 0) {
      return `Password has contains one upper letter, one special symbol, one number charter and has to be minimum ${minLength} length`;
    } else if (maxLength && maxLength > 0) {
      return `Password has contains one upper letter, one special symbol, one number charter and has to be minimum ${minLength} length`;
    }
  }
};

export { ERROR_MESSAGES };
