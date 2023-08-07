const pf = (value, toF = 1) => parseFloat(value.toString()).toFixed(toF)
const ifEl = ($el, value) => ($el ? value : 0)

export const setStickyPosition = () => {
  const sections = document.querySelectorAll(".js-sticky")
  if (!sections.length) return

  // Scroll handle
  const setSticky = ($section) => {
    const mobile = +$section.dataset?.mobile || 1024
    if (window.innerWidth <= mobile) return

    // Elements
    const $header = document.querySelector(".header")
    const $parent = $section.querySelector(".js-sticky-parent")
    const $target = $section.querySelector(".js-sticky-target")

    // Rect values
    const parentRect = $parent?.getBoundingClientRect()
    const targetRect = $target?.getBoundingClientRect()
    const headerRect = $header?.getBoundingClientRect()

    // Styles properties
    const parentStyles = window.getComputedStyle($parent)
    const parentPaddingTop = parseInt(parentStyles.paddingTop)
    const parentPaddingBottom = parseInt(parentStyles.paddingBottom)

    // Calc values
    const headerHeightWithGapTop = ifEl($header, headerRect?.height + 10)
    const parentOnTop = pf(parentRect.top - parentPaddingTop - ifEl($header, headerRect?.height - 10))
    const targetBotOnParentBot = pf(
      parentRect.bottom - parentPaddingBottom - targetRect.height - ifEl($header, headerRect?.height)
    )

    // Set css variables
    document.documentElement.style.setProperty("--current-header-height", `${ifEl($header, headerHeightWithGapTop)}px`)

    // Set logic
    if (parentOnTop <= 0 && targetBotOnParentBot > 10) {
      $target.classList.add("sticky")
      $target.classList.remove("scrolled")
    } else if (parentOnTop > 0 && targetBotOnParentBot > 10) {
      $target.classList.remove("sticky")
      $target.classList.remove("scrolled")
    } else if (parentOnTop <= 0 && targetBotOnParentBot <= 10) {
      $target.classList.remove("sticky")
      $target.classList.add("scrolled")
    }
  }

  const scrollHandle = () => {
    sections.forEach(setSticky)
  }

  // Init
  scrollHandle()
  window.addEventListener("scroll", scrollHandle)

  return {
    scrollHandle
  }
}
