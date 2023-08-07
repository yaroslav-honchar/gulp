import { fadeIn, fadeOut } from "../utils/fade"

export const tabs = () => {
  const tabs = document.querySelectorAll(".js-tabs")
  if (!tabs.length) return []

  // === System variables
  const duration = 500
  const tabs_int = []

  // === Methods
  function changeTab() {
    this.isLocked = true

    fadeOut(this.activeItem.$contentItem, this.duration, () => {
      this.activeItem.$triggerItem.classList.remove("active")
      this.activeItem.$contentItem.classList.remove("active")
      this.activeItem = this.items[this.activeIndex]

      this.activeItem.$triggerItem.classList.add("active")
      fadeIn(this.activeItem.$contentItem, this.duration, () => {
        this.activeItem.$contentItem.classList.add("active")
        this.isLocked = false
      })
    })
  }

  function setActiveTab(index) {
    if (this.isLocked) return

    if (typeof index !== "number") {
      return console.warn(`To change tab index should be a number, now is ${index}`)
    }

    if (this.items.length < index + 1 || index < 0) {
      return console.warn(`No one tab item with index ${index}, current items length is ${this.items.length} is`, this)
    }

    this.activeIndex = index
    this.changeTab()
  }

  const createTabItems = (tabs) => {
    const triggers = tabs.$tabs.querySelectorAll(".js-tab-btn")
    if (!triggers.length) {
      return console.warn(`No one tab item found in`, tabs)
    }

    const items = []

    triggers.forEach(($btn) => {
      const targetID = $btn.dataset?.tabTarget || ""
      const $targetItem = tabs.$tabs.querySelector(`#${targetID}`)

      items.push({
        $triggerItem: $btn,
        $contentItem: $targetItem,
        isActive: false
      })
    })

    return items.length ? items : []
  }

  const init = ($tabs) => {
    const tabs = {}

    tabs.$tabs = $tabs
    tabs.isLocked = false
    tabs.activeIndex = +tabs.$tabs.dataset?.activeIndex || 0
    tabs.duration = (+tabs.$tabs.dataset?.duration || duration) / 2
    tabs.items = createTabItems(tabs)

    tabs.activeItem = tabs.items[tabs.activeIndex]

    tabs.setActiveTab = setActiveTab.bind(tabs)
    tabs.changeTab = changeTab.bind(tabs)

    tabs.setActiveTab(tabs.activeIndex)

    tabs.items.forEach((item, index) => {
      item.$triggerItem.addEventListener("click", () => {
        tabs.setActiveTab(index)
      })
    })

    tabs_int.push(tabs)
  }

  // Init
  tabs.forEach(init)

  return tabs_int
}
