export function fetch({ onSuccess, onError, onFinally }) {
  if (!this.isValid) return

  const action = this.$form.getAttribute("action")
  const method = this.$form.getAttribute("method")
  const body = new FormData(this.$form)

  const fetch_options = { method }

  if (method.toUpperCase() !== "GET") {
    fetch_options.body = body
  }

  this.fields.forEach((field) => {
    body.append(field.name, field.value)
  })

  window
    .fetch(action, fetch_options)
    .then((data) => data.json())
    .then(onSuccess)
    .catch(onError)
    .finally(onFinally)
}
