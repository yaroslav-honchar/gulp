import { refs } from '../refs';
const { header, headerHideClass, headerBackgroundClass } = refs;
let scrollPosition = Number.NEGATIVE_INFINITY;

const hideHeader = () => {
  const { pageYOffset } = window;
  pageYOffset > scrollPosition
    ? header.classList.add(headerHideClass)
    : header.classList.remove(headerHideClass);
  scrollPosition = pageYOffset;
};

const changeBackground = () =>
  window.pageYOffset > 10
    ? header.classList.add(headerBackgroundClass)
    : header.classList.remove(headerBackgroundClass);

export { hideHeader, changeBackground };
