const onSuccess = (form, data) => {
  console.log('Fetch is success');
  console.log(data);

  form.resetForm()
}

const onError = (form, error) => {
  console.log('Fetch with error');
  console.log(error);
}

const onFinally = () => {
  console.log('Fetch anyway ended');
}

function onSubmit(event) {
  event.preventDefault();

  const action = this.$form.getAttribute('action');
  const method = this.$form.getAttribute('method');
  const body = new FormData(this.$form);

  this.invalidFields = [];
  this.fields.forEach((field) => {
    field.validate();
    field.setValidStatus();

    if (!field.isValid) {
      this.isValid = false;
      this.invalidFields.push(field);
    }
  });

  if (this.isValid) {
    const fetch_options = { method };

    if (method.toLowerCase() !== 'GET') {
      fetch_options.body = body;
    }

    this.fields.forEach(field => {
      body.append(field.name, field.value);
    });

    fetch(action, fetch_options)
      .then(data => data.json())
      .then((data) => onSuccess(this, data))
      .catch((error) => onError(this, error))
      // .finally(() => onFinally(this))
  }
}

export { onSubmit };
