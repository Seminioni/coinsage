import { Controller } from "stimulus";
import { toggleClass, doScrolling, isElementInViewport } from "../utils";
import Dropdown from "../components/dropdown/index.js";
import { sSize } from "utils/constants.js";

function findAncestor(el, cls) {
  while ((el = el.parentElement) && !el.classList.contains(cls));
  return el;
}

export default class Filters extends Controller {
  initialize() {
    this.initDropdowns(document.querySelectorAll(".select select"));

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
    if (window.matchMedia(sSize).matches) {
      const header = findAncestor(this.element, "header");
      toggleClass(header, "filters--is-open");
    }

  }
  onResetButtonClick(e) {
    e.preventDefault();
    this.resetDropdowns();
  }
}
