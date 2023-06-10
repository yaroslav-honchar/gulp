// ===== Private methods
const calcWidth = () => {
  const el_1 = document.createElement('div');
  el_1.style.width = '50px';
  el_1.style.height = '50px';
  el_1.style.overflow = 'scroll';
  el_1.style.position = 'absolute';
  el_1.style.top = '0';
  el_1.style.left = '0';
  el_1.style.zIndex = '-1';
  el_1.style.opacity = '0';
  el_1.style.pointerEvents = 'none';

  const el_2 = document.createElement('div');
  el_2.style.width = '100%';
  el_2.style.height = '100%';

  el_1.append(el_2);
  document.body.append(el_1);

  const x = el_1.offsetWidth - el_2.offsetWidth;
  const y = el_1.offsetHeight - el_2.offsetHeight;

  el_1.remove();

  return { x, y };
};

const setCssVars = ({ staticWidthY, isScrollbarYOnPage }) => {
  const root = document.documentElement.style;

  root.setProperty('--scrollbar-current-width-y', `${isScrollbarYOnPage ? staticWidthY : 0}px`);
  root.setProperty('--scrollbar-static-width-y', `${staticWidthY}px`);
};

const setOverflowHidden = (windowData) => {
  setCssVars(windowData);

  document.body.classList.add('scroll-locked');
};

const setOverflowVisible = (windowData) => {
  setCssVars(windowData);

  document.body.classList.remove('scroll-locked');
};

// ===== Common methods
const getScrollData = () => {
  const width = calcWidth();
  const windowData = {
    staticWidthY: width.x,
    isScrollbarYOnPage: document.body.offsetWidth < window.innerWidth
  };

  return windowData;
};

const scrollLock = () => {
  const windowData = getScrollData();

  setOverflowHidden(windowData);
};

const scrollUnLock = () => {
  const windowData = getScrollData();

  setOverflowVisible(windowData);
};

const scrollToggle = () => {
  const isLocked = document.body.classList.contains('scroll-locked');

  isLocked ? scrollUnLock() : scrollLock();
};

const isScrollLocked = () => document.body.classList.contains('scroll-locked');

export { scrollLock, scrollUnLock, scrollToggle, isScrollLocked };
