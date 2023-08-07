export function validate() {
  this.invalidFields = []

  this.fields.forEach((field) => {
    field.validate()
    field.setValidStatus()

    if (!field.isValid) {
      this.isValid = false
      this.invalidFields.push(field)
    }
  })
}
