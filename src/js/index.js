import { select } from './components/select';
import { accordion } from './components/accordion';
import { header } from './modules/header';
import { formValidation } from './components/form-validation';

window.addEventListener('load', () => {
  // Show hidden elements
  document.querySelectorAll('.important_none')?.forEach(($el) => $el.classList.remove('important_none'));

  // ===== Components
  // All selects
  select();

  // All accordions
  accordion();

  // Forms
  formValidation();
  // ===== Components end

  // ===== Modules
  // Header
  const headerInit = header();
  // ===== Modules end

  // ===== Window listeners
  // Scroll
  window.addEventListener('scroll', (event) => {
    headerInit?.scrollHandle();
  });

  // Resize
  window.addEventListener('resize', (event) => {
    headerInit?.setCssVars();
  });
  // ===== Window listeners end
});
