export function submit(event) {
  event.preventDefault()

  // === Validation form
  this.validate()

  // === If form is valid send fetch request
  this.fetch({
    onSuccess: (data) => {
      console.log("Fetch is success")
      console.log(data)

      this.reset()
    },
    onError: (error) => {
      console.log("Fetch with error")
      console.log(error)
    },
    onFinally: () => {
      console.log("Fetch ended")
    }
  })
}
