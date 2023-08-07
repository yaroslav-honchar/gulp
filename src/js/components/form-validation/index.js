import { initForm } from "./form/init-form"

const formValidation = (props) => {
  const forms = document.querySelectorAll(".js-form")
  if (!forms.length) return []

  const forms_init = []

  // === Initialisation
  forms.forEach((...args) => {
    const from = initForm(...args, props)

    forms_init.push(from)
  })

  return forms_init
}

export { formValidation }
