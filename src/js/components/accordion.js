import { slideUp, slideDown } from "../utils/slideIn.js"

const accordion = () => {
  const accordions = document.querySelectorAll(".js-accordion")
  if (!accordions.length) return []

  // System variables
  const duration = 500
  const accordions_int = []

  // Methods
  function accordionOpen() {
    this.$item.classList.add("active")

    slideDown(this.$content, this.accordion.duration, () => {
      this.accordion.isLocked = false
      this.isOpen = true
    })
  }

  function accordionClose() {
    this.$item.classList.remove("active")

    slideUp(this.$content, this.accordion.duration, () => {
      this.accordion.isLocked = false
      this.isOpen = false
    })
  }

  function accordionToggle() {
    if (this.accordion.isLocked) return

    this.accordion.isLocked = true

    if (this.accordion.isSingleItemOpen) {
      this.accordion.items.forEach((item) => {
        if (item.isOpen && item !== this) {
          item.close()
        }
      })
    }

    if (this.isOpen) {
      this.close()
    } else {
      this.open()
    }
  }

  const init = ($accordion, index) => {
    const items = $accordion.querySelectorAll(".js-accordion-item")
    if (!items.length) return

    const accordion = {}

    $accordion.id = $accordion.id || `accordion_${index}`
    accordion.id = $accordion.id
    accordion.$accordion = $accordion
    accordion.items = []
    accordion.isSingleItemOpen = $accordion.dataset?.type === "single"
    accordion.isLocked = false
    accordion.duration = $accordion.dataset?.duration || duration

    items.forEach(($item) => {
      const item = {}

      if ($item.id) {
        item.id = $item.id
      }

      item.accordion = accordion
      item.$item = $item
      item.$toggler = $item.querySelector(".js-accordion-toggler")
      item.$content = $item.querySelector(".js-accordion-content")
      item.isOpen = window.getComputedStyle(item.$content).display !== "none"
      item.open = accordionOpen.bind(item)
      item.close = accordionClose.bind(item)
      item.toggle = accordionToggle.bind(item)

      if (item.isOpen) {
        item.$item.classList.add("active")
      } else {
        item.$item.classList.remove("active")
      }

      item.$toggler.onclick = item.toggle

      accordion.items.push(item)
    })

    accordions_int.push(accordion)
  }

  // init
  accordions.forEach(init)

  return accordions_int
}

export { accordion }
