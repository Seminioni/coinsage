import { Controller } from "stimulus";
import initSiema from "components/slider/index.js";

export default class coinSlider extends Controller {
  initialize() {

    const mySiema = initSiema({
      selector: this.element.querySelector(".catalog-item__slider"),
      duration: 300,
      easing: "ease-out",
      perPage: 1,
      startIndex: 0,
      draggable: false,
      multipleDrag: false,
      threshold: 20,
      loop: true,
      onInit: function() {
        this.addDots();
        this.updateDots();
        this.addArrows();
      },
      onChange: function() {
        this.updateDots();
      }
    });

  }
}
