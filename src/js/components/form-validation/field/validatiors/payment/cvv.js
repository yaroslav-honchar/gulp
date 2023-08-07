let cvvTimeoutID = null
let cvvValue = []

function cvv() {
  const hiddenInput = input.parentNode.querySelector(".cvv-holder")
  input.value = input.value.replace(/[^\d*]/g, "")

  if (!hiddenInput) return
  const value = input.value

  value !== "" &&
    value.split("").forEach((symbol, index) => {
      if (symbol !== cvvValue[index] && symbol !== "•") {
        cvvValue[index] = symbol
      }
    })

  clearTimeout(cvvTimeoutID)

  if (event.inputType === "deleteContentBackward") {
    input.value = ""
    hiddenInput.value = ""
    cvvValue = []

    return
  }

  hiddenInput.value = cvvValue.join("")

  cvvTimeoutID = setTimeout(() => {
    input.value = input.value.replace(/\d/g, "•")
  }, 1000)
}

export { cvv }
