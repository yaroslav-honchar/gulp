const getOffset = el => {
  const rect = el.getBoundingClientRect();
  return {
    rect: rect,
    dom: {
      bottom: rect.bottom + window.scrollY,
      left: rect.left + window.scrollX,
      top: rect.top + window.scrollY,
    },
  };
};

const getNumbersFromString = string => {
  return string.replace(/D/g, '');
};

const domItaration = target => {
  const domElements = [];
  let element = target;
  do {
    element = element.parentNode;
    domElements.push(element);
  } while (element);

  return domElements;
};

const getDomHeight = () => {
  var { body, html } = document;

  return Math.max(
    body.scrollHeight,
    body.offsetHeight,
    html.clientHeight,
    html.scrollHeight,
    html.offsetHeight
  );
};

export { getOffset, getNumbersFromString, domItaration, getDomHeight };
