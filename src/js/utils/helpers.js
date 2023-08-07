const getElementOffset = ($el) => {
  const rect = $el.getBoundingClientRect()
  return {
    rect: rect,
    dom: {
      bottom: rect.bottom + window.scrollY,
      left: rect.left + window.scrollX,
      top: rect.top + window.scrollY
    }
  }
}

function debounce(f, ms = 500) {
  let timerID = false

  return function () {
    if (timerID) return

    f.apply(this, arguments)
    timerID = true

    setTimeout(() => (timerID = false), ms)
  }
}

const pad = (value, numLength = 2, template = "00") => value.toString().padStart(numLength, template)

export { getElementOffset, debounce, pad }
