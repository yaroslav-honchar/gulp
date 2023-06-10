const getElementOffset = ($el) => {
  const rect = $el.getBoundingClientRect();
  return {
    rect: rect,
    dom: {
      bottom: rect.bottom + window.scrollY,
      left: rect.left + window.scrollX,
      top: rect.top + window.scrollY
    }
  };
};

export { getElementOffset };
