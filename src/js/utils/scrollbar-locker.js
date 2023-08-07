const getScrollbarWidth = () => {
  return window.innerWidth - document.body.offsetWidth
}

const scrollbarLock = () => {
  const scrollbarWidth = getScrollbarWidth()

  document.documentElement.style.setProperty("--current-scrollbar-width", `${scrollbarWidth}px`)
  document.body.classList.add("lock")
}

const scrollbarUnlock = () => {
  document.documentElement.style.setProperty("--current-scrollbar-width", "0px")
  document.body.classList.remove("lock")
}

const scrollbarToggle = () => {
  const isLocked = document.body.classList.contains("lock")

  if (isLocked) {
    scrollbarUnlock()
  } else {
    scrollbarLock()
  }
}

export {
  getScrollbarWidth,
  scrollbarToggle,
  scrollbarLock,
  scrollbarUnlock
}
