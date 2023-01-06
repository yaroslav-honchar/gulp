import { refs } from '../refs';
const { navbar, navbarToggler, navbarActiveClass } = refs;

const navbarClose = () => {
  navbarToggler.classList.remove(navbarActiveClass);
  navbar.classList.remove(navbarActiveClass);
};

const navbarHandle = () => {
  navbarToggler.classList.toggle(navbarActiveClass);
  navbar.classList.toggle(navbarActiveClass);
};

export { navbarHandle, navbarClose };
