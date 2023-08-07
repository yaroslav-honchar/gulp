export const navigation = () => {
  const $nav = document.querySelector(".nav")
  if (!$nav) return {}

  // === System variables
  let isOpened = false

  // === Elements
  const triggers = document.querySelectorAll(".js-nav-trigger")

  // === Methods
  const navOpen = () => {
    $nav.classList.add("show")
    triggers.forEach(($trigger) => {
      $trigger.classList.add("active")
    })

    isOpened = true
  }
  const navClose = () => {
    $nav.classList.remove("show")
    triggers.forEach(($trigger) => {
      $trigger.classList.remove("active")
    })

    isOpened = false
  }

  const triggerClickHandle = () => {
    if (isOpened) {
      navClose()
    } else {
      navOpen()
    }
  }

  // === Init
  triggers.forEach(($trigger) => {
    $trigger.addEventListener("click", triggerClickHandle)
  })

  return {
    $nav,
    triggers,
    navOpen,
    navClose,
    isOpen: () => isOpened
  }
}
