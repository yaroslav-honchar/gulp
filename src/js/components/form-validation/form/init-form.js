import { Logger } from '../../../utils/Logger';
import { initFields } from '../field/init-fields';
import { onSubmit } from './on-submit';
import { resetForm } from './reset-form';

const initForm = (forms_init, $form, index) => {
  const form = {};
  form.devLogs = JSON.parse($form.dataset.devLogs || false);

  Logger.warn(
    form.devLogs && !$form.id,
    `The form, does not have id. To correct work of validation module, will be generated temporary id < form_${index} >`,
    $form
  );

  form.id = $form.id || `form_${index}`;
  form.$form = $form;
  form.isValid = true;
  form.isDirty = false;
  form.isSubmited = false;
  form.fields = initFields($form.querySelectorAll('.js-field'), form);
  form.invalidFields = []
  form.onSubmit = onSubmit.bind(form);
  form.resetForm = resetForm.bind(form);

  $form.id = form.id;
  form.$form.addEventListener('submit', form.onSubmit);

  forms_init[form.id] = form;

  console.log(forms_init);
};

export { initForm };
