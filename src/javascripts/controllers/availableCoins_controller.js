import { Controller } from "stimulus";
import initSiema from "components/slider/index.js";

export default class availableCoins extends Controller {
  initialize() {

    const sliderContainers = this.element.querySelectorAll(
      ".catalog-item__slider-container"
    );

    sliderContainers.forEach(container => {
      const slider = container.querySelector(".catalog-item__slider");
      const prev = container.querySelector(".arrow--prev");
      const next = container.querySelector(".arrow--next");

      const mySiema = initSiema({
        selector: slider,
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
        },
        onChange: function() {
          this.updateDots();
        }
      });

      prev.addEventListener("click", () => mySiema.prev());
      next.addEventListener("click", () => mySiema.next());
    });

  }
}
