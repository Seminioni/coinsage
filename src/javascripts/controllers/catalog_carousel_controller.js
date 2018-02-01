import { Controller } from "stimulus";
import initSiema from "components/slider/index.js";
import { sSize } from "utils/constants.js";

export default class CatalogCarousel extends Controller {
  initialize() {

    const container = this.element.querySelector(
      ".catalog__inner"
    );

    const mySiema = initSiema({
      selector: container,
      duration: 500,
      easing: "ease-in-out",
      perPage: {
        768: 3,
        1024: 4
      },
      startIndex: 0,
      draggable: false,
      multipleDrag: false,
      threshold: 20,
      loop: true,
      onInit: function() {
        this.addArrows()
      },
      onChange: function() {}
    });


    if (window.matchMedia(sSize).matches) {
      mySiema.destroy(true)
    }
  }
}
