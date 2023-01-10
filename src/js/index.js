import Modal from './modules/modal';
import Dropdown from './modules/dropdown';
import FormValidation from './modules/form-validation';
import flatpickr from 'flatpickr';
import IMask from 'imask';

window.addEventListener('load', () => {
  // Modal init
  new Modal({
    modalSelector: '[data-modal]',
    triggerSelector: '[data-modal-trigger]',
    closeSelector: '[data-modal-close]',
    modalActiveClass: 'show',
    closeOnLightbox: true,
    closeOnEsc: true,
    disableScrollbarElement: true,
    // on: {
    //   beforeInit: e => {
    //     console.log(e, 'modal will init');
    //   },
    //   init: e => {
    //     console.log(e, 'modal was init');
    //   },
    //   beforeOpen: (instance, modal, trigger) => {
    //     console.log(instance, modal, trigger, 'modal will open');
    //   },
    //   afterOpen: (instance, modal, trigger) => {
    //     console.log(instance, modal, trigger, 'modal was close');
    //   },
    //   beforeClose: (instance, modal, trigger) => {
    //     console.log(instance, modal, trigger, 'modal will open');
    //   },
    //   afterClose: (instance, modal, trigger) => {
    //     console.log(instance, modal, trigger, 'modal was open');
    //   },
    // },
  });

  // Dropdown init
  new Dropdown({
    dropdownSelector: '[data-dropdown]',
    triggerSelector: '[data-dropdown-tigger]',
    triggerValueSelector: '[data-dropdown-tigger]',
    listSelector: '[data-dropdown-body]',
    linkSelector: '[data-dropdown-link]',
    inputSelector: '[data-dropdown-input]',
    openClass: 'dropdown--open',
    topClass: 'dropdown--top',
    on: {
      //   init: (instance, dropdown) => {
      //     console.log(instance, dropdown);
      //   },
      //   open: (instance, dropdown) => {
      //     console.log(instance, dropdown);
      //   },
      //   close: (instance, dropdown) => {
      //     console.log(instance, dropdown);
      //   },
      choose: (instance, dropdown, target) => {
        const parent = dropdown.closest('[data-validation-status]');
        parent && parent.classList.remove('invalid');
      },
    },
  });

  // FormValidation instance
  new FormValidation({
    formSelector: 'form[data-form-validation]',
    requiredSelector: '[data-required]',
    validationStatusTarget: '[data-validation-status]',
    invalidClass: 'invalid',
    validClass: 'valid',
    trimTel: true,
    trimName: true,
    inputFileValidate: true,
    inputName: {
      trim: true,
      regExp: /[^a-z A-Z а-я А-я Ї ї І і ]/g,
    },
    inputTel: {
      trim: true,
      regExp: /[^0-9() +-]/g,
    },
    inputNumber: {
      trim: true,
      regExp: /[^0-9]/g,
    },
    inputMail: {
      validate: true,
      regExp: /\S+@\S+\.\S+/,
    },
    on: {
      // init: (instance, form) => {
      //   console.log('instance: ', instance);
      //   console.log('form: ', form);
      //   flatpickr;
      //   flatpickr('[data-flatpickr]');
      //   IMask;
      //   const phoneMasksInputs = form.querySelectorAll('[data-imask]');
      //   const IMaskOptions = {
      //     mask: '+38 (000) 000 00 00',
      //     lazy: false,
      //     placeholderChar: '*',
      //   };
      //   phoneMasksInputs.length &&
      //     phoneMasksInputs.forEach(input => {
      //       const phoneMask = IMask(input, IMaskOptions);
      //       if (!IMaskOptions.lazy) {
      //         phoneMask.el.input.placeholder = phoneMask._value;
      //         phoneMask.el.input.value = '';
      //       }
      //     });
      // },
      input: (event, instance) => {
        console.log('event: ', event);
        console.log('instance: ', instance);
      },
      submit: (event, instance) => {
        console.log('event: ', event);
        console.log('instance: ', instance);
      },
    },
  });
});
