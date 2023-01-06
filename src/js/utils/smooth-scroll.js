import { getOffset } from './helpers';

const header = document.querySelector('.header');

const anchorScrollHandler = event => {
  const targetId = event.currentTarget.getAttribute('href').replace(/#/gm, '');
  const targetSection = targetId ? document.querySelector(`#${targetId}`) : null;
  if (targetSection) {
    event.preventDefault();
    const targetSectionRect = getOffset(targetSection).dom;
    const headerHeight = header.getBoundingClientRect().height;
    window.scrollTo({
      top: targetSectionRect.top - headerHeight,
      behavior: 'smooth',
    });
  }
};

export default anchorScrollHandler;
