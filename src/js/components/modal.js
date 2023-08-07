import { scrollbarLock, scrollbarUnlock } from "../utils/scrollbar-locker"

const modal = () => {
  const modals = document.querySelectorAll(".js-modal")
  if (!modals.length) return []

  // System variables
  const modals_init = []

  // Elements
  const triggers = document.querySelectorAll(".js-modal-open-trigger")

  // Methods
  function open() {
    this.$modal.classList.add("show")
    scrollbarLock()
    this.isOpen = true
  }

  function close() {
    this.$modal.classList.remove("show")
    scrollbarUnlock()
    this.isOpen = false
  }

  function toggle() {
    if (this.modal.isOpen) {
      this.modal.close()
    } else {
      this.modal.open()
    }
  }

  const init = ($modal) => {
    const modal = {}

    modal.id = $modal.id
    modal.$modal = $modal
    modal.closeTriggers = $modal.querySelectorAll(".js-modal-close-trigger")
    modal.openTriggers = [...triggers].filter(($btn) => {
      return $btn.dataset?.target?.toLowerCase() === modal.id.toLowerCase()
    })
    modal.isOpen = false
    modal.open = open.bind(modal)
    modal.close = close.bind(modal)
    modal.toggle = toggle.bind(modal)

    modal.closeTriggers.forEach(($trigger) => {
      $trigger.addEventListener("click", modal.close)
    })

    modal.openTriggers.forEach(($trigger) => {
      $trigger.addEventListener("click", modal.open)
    })

    modal.$modal.addEventListener("click", (event) => {
      if (event.target === event.currentTarget) {
        modal.close()
      }
    })

    modals_init.push(modal)
  }

  // Init
  modals.forEach(init)

  window.addEventListener("keydown", (event) => {
    if (event.code === "Escape" || event.key === "Escape") {
      modals_init.forEach((modal) => {
        modal.isOpen && modal.close()
      })
    }
  })

  return modals_init
}

export { modal }
