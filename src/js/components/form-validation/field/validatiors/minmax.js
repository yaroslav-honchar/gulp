const minmax = ($input) => {
  const { min, max } = $input

  const minLengthIsValid = min ? +min <= parseInt($input.value) : true
  const maxLengthIsValid = max ? +max >= parseInt($input.value) : true

  return {
    isMinMaxValid: minLengthIsValid && maxLengthIsValid,
    min: +min,
    max: +max
  }
}

export { minmax }
