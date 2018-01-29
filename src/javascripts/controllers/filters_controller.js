import { Controller } from "stimulus";
import { toggleClass, doScrolling, isElementInViewport } from "../utils";
import Dropdown from "../components/dropdown/index.js";

function findAncestor(el, cls) {
  while ((el = el.parentElement) && !el.classList.contains(cls));
  return el;
}

export default class Filters extends Controller {
  initialize() {
    this.initDropdowns(document.querySelectorAll(".select select"));

    this.getDropdowns().forEach(dropdown => {
      // dropdown.passedElement.addEventListener("showDropdown", event => {
      //   const dropdown = event.target.parentNode.nextSibling;
      //   const select = findAncestor(event.target.parentNode, 'select');

      //   if (!isElementInViewport(dropdown)) {
      //     const {y, height } = select.getBoundingClientRect();

      //     doScrolling(y - height - 30, 600);
      //   }
      // });
    });
  }
  initDropdowns(collection) {
    this.dropdowns = Array.from(collection).map(el => {
      return new Dropdown(el, {
        placeholder: true,
        placeholderValue: 'Введите город',
        shouldSort: false,
        searchEnabled: true,
        noResultsText: 'Ничего не найдено',
        resetScrollPosition: false,
      });
    });
  }
  getDropdowns() {
    return this.dropdowns;
  }

  resetDropdowns() {
    this.getDropdowns().forEach(dropdown => {
      dropdown.setValueByChoiceID(1);
    });
  }

  onOpenButtonClick(e) {
    e.preventDefault();
    if (window.matchMedia("screen and (max-width: 768px)").matches) {
      const header = findAncestor(this.element, "header");
      toggleClass(header, "filters--is-open");
    }

  }
  onResetButtonClick(e) {
    e.preventDefault();
    this.resetDropdowns();
  }
}
