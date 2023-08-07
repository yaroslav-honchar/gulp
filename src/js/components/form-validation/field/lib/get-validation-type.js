import { email } from "../validatiors/email"
import { empty } from "../validatiors/empty"
import { name } from "../validatiors/name"
import { number } from "../validatiors/number"
import { tel } from "../validatiors/tel"
import { password } from "../validatiors/password"
import { checkbox } from "../validatiors/checkbox"
import { radioGroup } from "../validatiors/radio-group"

const getValidationType = (field) => {
  switch (field.type) {
    case "empty":
      return empty
    case "email":
      return email
    case "name":
      return name
    case "number":
      return number
    case "password":
      return password
    case "tel":
      return tel
    case "checkbox":
      return checkbox
    case "radio-group":
      return radioGroup
  }
}

export { getValidationType }
