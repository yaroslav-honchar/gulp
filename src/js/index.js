window.addEventListener("load", () => {
  // Show hidden elements
  document.querySelectorAll(".important_none")?.forEach(($el) => $el.classList.remove("important_none"))
})
