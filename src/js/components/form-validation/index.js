import { initForm } from './form/init-form';

const formValidation = () => {
  const forms = document.querySelectorAll('.js-form');
  if (!forms.length) return;

  const forms_init = {};

  // Init
  forms.forEach(($form, index, arr) => initForm(forms_init, $form, index, arr));

  return forms_init;
};

export { formValidation };
