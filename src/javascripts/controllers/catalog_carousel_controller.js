import { Controller } from "stimulus";
import initSiema from "components/slider/index.js";
import { S_SIZE } from "utils/constants.js";

export default class CatalogCarousel extends Controller {
  initialize() {
    this.inited = false;

    const onEvents = () => {
      const condition = window.matchMedia(S_SIZE)
      .matches;

      if (!condition && !this.inited) {
        this.slider = this.onMobile();
        this.inited = !this.inited;
      }

      if (condition && this.inited) {
        this.slider.destroy(true);
        this.inited = !this.inited;
      }
    }

    ["load", "optimizedResize"].forEach(function(e) {
      window.addEventListener(e, onEvents, false);
    });

    this.element.classList.remove('is-initing');
  }
  onMobile() {
    const slider = this.element.querySelector(
      ".catalog__inner"
    );

    return initSiema({
      selector: slider,
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
        this.addArrows();
      },
      onChange: function() {}
    });
  }
}
