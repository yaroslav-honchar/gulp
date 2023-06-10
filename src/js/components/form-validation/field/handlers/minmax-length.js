const minmaxLength = ($input) => {
  const {minLength, maxLength} = $input

  const minLengthIsValid = minLength >= 0 ? +minLength <= $input.value.length : true;
  const maxLengthIsValid = maxLength >= 0 ? +maxLength >= $input.value.length : true;

  return {
    isMinMaxLengthValid: minLengthIsValid && maxLengthIsValid,
    minLength: +minLength,
    maxLength: +maxLength,
    currentLength: $input.value.length
  };
};

export { minmaxLength };
