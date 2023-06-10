import { email } from './handlers/email';
import { empty } from './handlers/empty';
import { name } from './handlers/name';
import { number } from './handlers/number';
import { tel } from './handlers/tel';
import { password } from './handlers/password';
import { checkbox } from './handlers/checkbox';
import { radioGroup } from './handlers/radio-group';

const getValidationType = (field) => {
  switch (field.type) {
    case 'empty':
      return empty.bind(field);
    case 'email':
      return email.bind(field);
    case 'name':
      return name.bind(field);
    case 'number':
      return number.bind(field);
    case 'password':
      return password.bind(field);
    case 'tel':
      return tel.bind(field);
    case 'checkbox':
      return checkbox.bind(field);
    case 'radio-group':
      return radioGroup.bind(field);
  }
};

export { getValidationType };
