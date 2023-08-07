import { getValidationType } from "./lib/get-validation-type"
import { onInput } from "./handlers/input-handle"
import { setValidStatus } from "./methods/validation-status-handlers"
import { resetField } from "./methods/reset-field"

const initFields = (fields, form) => {
  if (!fields.length) return []

  return [...fields].map(($field) => {
    const field = {}

    // Elements inside field
    const $input = $field.querySelector(".js-input")
    const $checkbox = $field.querySelector(".js-checkbox-input")
    const $radioGroup = $field.querySelector(".js-radio-group")

    field.form = form
    field.$field = $field
    field.isRequired = $field.classList.contains("is-required")
    field.$error = $field.querySelector(".js-error")
    field.type = $field.dataset.type
    field.isValid = !field.isRequired

    // === Methods
    field.setValidStatus = setValidStatus.bind(field)
    field.resetField = resetField.bind(field)

    // === Set field validator
    if (field.isRequired) {
      field.validate = getValidationType(field).bind(field)
    } else {
      field.validate = () => {
        field.isValid = true
      }
    }

    // === Init field with input or textarea element
    if ($input) {
      field.name = $input.name
      field.$input = $input
      field.value = $input.value
      field.onInput = onInput.bind(field)

      field.$input.oninput = field.onInput
    }

    // === Init field with checkbox element
    if ($checkbox) {
      field.name = $checkbox.name
      field.$checkbox = $checkbox
      field.value = $checkbox.value
      field.onChange = onInput.bind(field)

      field.$checkbox.onchange = field.onChange
    }

    // === Init field with radio group
    if ($radioGroup) {
      field.name = $radioGroup.dataset?.groupName
      field.radioGroup = {
        $radioGroup,
        items: $radioGroup.querySelectorAll(".js-radio-input")
      }
      field.value = ""
      field.onChange = onInput.bind(field)

      field.radioGroup.items.forEach(($radio) => {
        if ($radio.checked) {
          field.value = $radio.value
        }

        $radio.onchange = field.onChange
      })
    }

    // === Log warns
    if (field.form.devLogs && field.isRequired && !field.type) {
      console.warn(
        'The form field, is required and does not have required attribute "data-type" with validation type value. Default type will be < empty >',
        $field
      )
    }

    if (!field.type && field.isRequired) {
      field.type = "empty"
    }

    if (field.form.devLogs && field.isRequired && !field.$error) {
      console.warn(
        "The form field, is required and does not have any registered element to display error message",
        $field
      )
    }

    if (field.form.devLogs && field.$input && !field.name) {
      console.warn("The form field contains input, but input does not have any specific name", $field)
    }

    field.form.isValid = true

    return field
  })
}

export { initFields }
