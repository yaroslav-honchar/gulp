import { slideUp, slideToggle } from '../utils/slideIn.js';

const accordion = () => {
  const accordions = document.querySelectorAll('.js-accordion');
  if (!accordions.length) return;

  // System variables
  let isLocked = false;
  const duration = 500;

  // Methods
  const clickHandle = ({ target, currentTarget }, items) => {
    const clickedButton = target.classList.contains('js-accordion-toggler') || target.closest('js-accordion-toggler');
    if (!clickedButton || isLocked) return;

    isLocked = true;

    const $currentItem = target.closest('.js-accordion-item');
    const $currentContent = $currentItem.querySelector('.js-accordion-content');

    if (currentTarget.dataset?.type === 'single') {
      items.forEach(($item) => {
        const $content = $item.querySelector('.js-accordion-content');

        if ($currentContent !== $content) {
          slideUp($content, duration);
          $item.classList.remove('active');
        }
      });
    }

    $currentItem.classList.toggle('active');
    slideToggle($currentContent, duration, () => {
      isLocked = false;
    });
  };

  const init = ($accordion) => {
    const items = $accordion.querySelectorAll('.js-accordion-item');

    $accordion.addEventListener('click', (event) => clickHandle(event, items));
  };

  // init
  accordions.forEach(init);
};

export { accordion };
