import { Controller } from "stimulus";
import Tabby from "Tabby";
import { toggleClass, getSiblingsOf } from "../utils"

export default class Tabs extends Controller {
  initialize() {
    Tabby.init({
      selectorToggle: "[data-tab]", // Tab toggle selector
      selectorToggleGroup: "[data-tabs]", // Tab toggle group selector
      selectorContent: "[data-tabs-pane]", // Tab content selector
      selectorContentGroup: "[data-tabs-content]", // Tab content group selector
      toggleActiveClass: "tabs__link--active", // Class added to active toggle elements
      contentActiveClass: "tabs-pane--active", // Class added to active tab content areas
      initClass: "js-tabby", // Class added to <html> element when initiated
      stopVideo: true, // [Boolean] If true, stop videos when tab closes
    });
  }

  onMobileTabHeadingClick(e) {
    toggleClass(this.targets.find('inner'), 'tabs__inner--active');
    toggleClass(e.currentTarget, 'tabs__mobile-heading--active');
  }

  onTabsLinkClick(e) {
    this.targets.find('heading').textContent = e.target.textContent;
    toggleClass(this.targets.find('inner'), 'tabs__inner--active');
  }

}
