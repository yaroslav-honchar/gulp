const header = () => {
  const $header = document.querySelector('.header');
  if (!$header) return;

  // ===== System variables
  let currentScrollPosition = 0;

  // ===== Methods
  function setCssVars() {
    document.documentElement.style.setProperty('--header-height', `${$header.offsetHeight}px`);
  }

  function scrollHandle() {
    if (window.scrollY < currentScrollPosition || window.scrollY < $header.offsetHeight) {
      $header.classList.remove('hide');
    } else {
      $header.classList.add('hide');
    }

    currentScrollPosition = window.scrollY;
  }

  // ===== Init
  setCssVars();
  scrollHandle();

  return {
    $header,
    scrollHandle,
    setCssVars
  };
};

export { header };
