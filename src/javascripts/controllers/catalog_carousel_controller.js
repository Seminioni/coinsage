import { Controller } from "stimulus";
import initSiema from "components/slider/index.js";
import { sSize } from "utils/constants.js";

export default class CatalogCarousel extends Controller {
  initialize() {
    this.inited = false;

    const onEvents = () => {
      const condition = window.matchMedia(sSize)
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

  }
  onMobile() {
    return initSiema({
      selector: this.element.querySelector(
        ".catalog__inner"
      ),
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
  }
}
