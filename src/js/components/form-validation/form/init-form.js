import { initFields } from "../field/init-fields"
import { submit } from "./handlers/submit-handle"
import { fetch } from "./methods/fetch"
import { reset } from "./methods/reset"
import { validate } from "./methods/validate"

const initForm = ($form, index, arr, props) => {
  const form = {}

  // === Log developer warnings
  form.devLogs = JSON.parse($form.dataset?.devLogs || false)
  if (form.devLogs && !$form.id) {
    console.warn(
      `The form, does not have id. To correct work of validation module, will be generated temporary id < form_${index} >`,
      $form
    )
  }

  // === Set form ID
  $form.id = $form.id || `form_${index}`
  form.id = $form.id
  form.$form = $form

  // === Boolean
  form.isValid = true

  // === Fields
  form.fields = initFields($form.querySelectorAll(".js-field"), form)
  form.invalidFields = []

  // === Handlers
  form.submit = submit.bind(form)

  // === Methods
  form.fetch = fetch.bind(form)
  form.reset = reset.bind(form)
  form.validate = validate.bind(form)

  // === Add listeners
  form.$form.addEventListener("submit", form.submit)

  return form
}

export { initForm }
