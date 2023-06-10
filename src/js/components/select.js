const select = () => {
  const selects = document.querySelectorAll('.js-select');
  if (!selects.length) return;

  // System variables
  const selects_init = [];

  // Methods
  function open() {
    this.$select.classList.add('active');
    this.isOpen = true;
  }

  function close() {
    this.$select.classList.remove('active');
    this.isOpen = false;
  }

  function toggle() {
    this.isOpen ? this.close() : this.open();
  }

  function onSelect(event) {
    const { currentTarget } = event;
    const targetValue = currentTarget.dataset?.value;
    const $triggerValue = this.$trigger.querySelector('.js-select-trigger-value');

    if (!targetValue) {
      return console.warn(`Clicked button element does not have attribute data-value`, currentTarget);
    }

    if ($triggerValue) {
      $triggerValue.innerHTML = targetValue;
    } else {
      this.$trigger.innerHTML = targetValue;
    }

    if (this.$input) {
      this.$input.value = targetValue;
    }

    this.close();
  }

  const init = ($select, index) => {
    $select.id = $select.id || `select_${index}`;

    const select = {};
    select.$select = $select;
    select.$trigger = $select.querySelector('.js-select-trigger');
    select.$dropdown = $select.querySelector('.js-select-dropdown');
    select.id = $select.id;
    select.type = $select.dataset.type || 'dropdown';
    select.isOpen = false;
    select.open = open.bind(select);
    select.close = close.bind(select);
    select.toggle = toggle.bind(select);

    if (!select.$trigger) {
      return console.warn(`Can not initialize select ${select.$select} with out trigger`);
    }

    if (!select.$dropdown) {
      return console.warn(`Can not initialize select ${select.$select} with out dropdown list`);
    }

    if (select.type === 'select') {
      select.$input = $select.querySelector('.js-select-input');
      select.buttons = $select.querySelectorAll('.js-select-btn');
      select.onSelect = onSelect.bind(select);

      if (!select.buttons.length) {
        return console.warn('Your select buttons list is empty in select component', select.$select);
      }

      if (!select.$input) {
        console.warn(
          'Your select component does not have any registered input element with class ".js-select-input"',
          select.$select
        );
      }

      select.buttons.forEach(($btn) => $btn.addEventListener('click', select.onSelect));
    }

    select.$trigger.addEventListener('click', select.toggle);
    selects_init.push(select);
  };

  // Init
  selects.forEach(init);

  window.addEventListener('click', ({ target }) => {
    selects_init.forEach((select) => {
      if (!select.$select.contains(target)) {
        select.close();
      }
    });
  });

  return {
    selects: selects_init
  };
};

export { select };
