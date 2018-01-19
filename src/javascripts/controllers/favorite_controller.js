import { Controller } from "stimulus";
import initSiema from "components/slider/index.js";

export default class Favorite extends Controller {
  initialize() {

    const container = this.element.querySelector(
      ".catalog-item__slider-container"
    );
    const prev = this.targets.find('prev');
    const next = this.targets.find('next');

    const mySiema = initSiema({
      selector: ".favorite .catalog__inner",
      duration: 500,
      easing: "ease-in-out",
      perPage: {
        768: 3,
        1024: 4
      },
      startIndex: 0,
      draggable: true,
      multipleDrag: true,
      threshold: 20,
      loop: true,
      onInit: function() {},
      onChange: function() {}
    });

    prev.addEventListener('click', () => mySiema.prev());
    next.addEventListener('click', () => mySiema.next());

    if (window.matchMedia("screen and (max-width: 767px)").matches) {
      mySiema.destroy(true)
    }
  }
}
