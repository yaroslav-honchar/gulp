import { domItaration } from '../utils/helpers';

export default class Dropdown {
  constructor(options = {}) {
    if (options.dropdownSelector) {
      this.dropdowns = document.querySelectorAll(options.dropdownSelector);
      this.dropdownSelector = options.dropdownSelector;
      this.triggerSelector = options.triggerSelector && options.triggerSelector;
      this.triggerValueSelector =
        options.triggerValueSelector && options.triggerValueSelector;
      this.listSelector = options.listSelector && options.listSelector;
      this.linkSelector = options.linkSelector && options.linkSelector;
      this.openClass = options.openClass ? options.openClass : 'open';
      this.topClass = options.topClass ? options.topClass : 'top';
      this.inputSelector = options.inputSelector
        ? options.inputSelector
        : 'input';

      this.on =
        {
          init:
            options.on && options.on.init
              ? options.on.init.bind(this.on)
              : null,
          open:
            options.on && options.on.open
              ? options.on.open.bind(this.on)
              : null,
          close:
            options.on && options.on.close
              ? options.on.close.bind(this.on)
              : null,
          choose:
            options.on && options.on.choose
              ? options.on.choose.bind(this.on)
              : null,
        } || {};

      this.dropdowns.forEach(dropdown => {
        this.init(dropdown);
      });

      this.closeOnWindow();
      this.changeListPosution();
    }
  }

  init = dropdown => {
    const { triggerSelector, listSelector, linkSelector, open, close, choose } =
      this;

    const trigger = dropdown.querySelector(triggerSelector);
    const list = dropdown.querySelector(listSelector);

    trigger.addEventListener('click', () => {
      open(dropdown);
    });

    list.addEventListener('click', ({ target }) => {
      if (!linkSelector) return;

      choose(dropdown, target);
    });

    this.on.init && this.on.init(this, dropdown);
  };

  closeOnWindow = () => {
    const { close } = this;

    window.addEventListener('click', ({ target }) => {
      const clickedElements = domItaration(target);
      let dropdownClicked = false;

      this.dropdowns.forEach(dropdown => {
        clickedElements.forEach(dom => {
          if (dropdown === dom) {
            dropdownClicked = true;
            return;
          }
        });
      });

      this.dropdowns.forEach(dropdown => {
        if (!dropdownClicked) close(dropdown);
      });
    });
  };

  calcListPosution = () => {
    const { dropdowns, listSelector, topClass } = this;

    dropdowns.forEach(dropdown => {
      const { innerHeight } = window;
      const dropdownBottom = dropdown.getBoundingClientRect().bottom;
      const list = dropdown.querySelector(listSelector);
      const lisHeight = list.getBoundingClientRect().height;
      const listPositionBottom = dropdownBottom + lisHeight - innerHeight;

      if (listPositionBottom >= 10) {
        dropdown.classList.add(topClass);
      } else {
        dropdown.classList.remove(topClass);
      }
    });
  };

  changeListPosution = () => {
    const { calcListPosution } = this;
    calcListPosution();
    window.addEventListener('scroll', () => calcListPosution());
  };

  open = dropdown => {
    const { openClass } = this;

    dropdown.classList.toggle(openClass);
    this.on.open && this.on.open(this, dropdown);
  };

  close = dropdown => {
    const { openClass } = this;

    dropdown.classList.remove(openClass);
    this.on.close && this.on.close(this, dropdown);
  };

  choose = (dropdown, target) => {
    const { close, triggerValueSelector, inputSelector, chooseEvent } = this;
    const { dropdownLinkValue } = target.dataset;
    const valueEl = dropdown.querySelector(triggerValueSelector);
    const inputEl = dropdown.querySelector(inputSelector);

    if (dropdownLinkValue) {
      if (valueEl) valueEl.innerHTML = dropdownLinkValue;
      if (inputEl) inputEl.value = dropdownLinkValue;
    }

    close(dropdown);
    this.on.choose && this.on.choose(this, dropdown, target);
  };
}
