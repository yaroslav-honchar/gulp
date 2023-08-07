const fadeIn = (el, delay, callback, display = "block") => {
  el.style.opacity = 0
  el.style.display = display
  el.style.transition = `opacity ${delay}ms`
  setTimeout(() => {
    el.style.opacity = 1

    callback && callback(el)
  }, delay)
}

const fadeOut = (el, delay, callback) => {
  el.style.opacity = 1
  el.style.transition = `opacity ${delay}ms`
  el.style.opacity = 0

  setTimeout(() => {
    el.style.display = "none"

    callback && callback(el)
  }, delay)
}

export { fadeIn, fadeOut }
