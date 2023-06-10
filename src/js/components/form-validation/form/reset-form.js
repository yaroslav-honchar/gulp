function resetForm() {
  this.isValid = true
  this.$form.reset()

  this.fields.forEach(field => {
    field.resetField()
  })
}

export { resetForm };
