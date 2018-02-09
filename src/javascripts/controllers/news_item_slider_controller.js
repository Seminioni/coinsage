import { Controller } from "stimulus";
import initSiema from "components/slider/index.js";
import { M_SIZE } from "utils/constants.js";

(function() {
  var throttle = function(type, name, obj) {
    obj = obj || window;
    var running = false;
    var func = function() {
      if (running) {
        return;
      }
      running = true;
      requestAnimationFrame(function() {
        obj.dispatchEvent(new CustomEvent(name));
        running = false;
      });
    };
    obj.addEventListener(type, func);
  };

  throttle("resize", "optimizedResize");
})();

export default class CatalogItem extends Controller {
  initialize() {
    this.inited = false;

    const onEvents = () => {
      const condition = window.matchMedia(M_SIZE)
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
      selector: this.element,
      duration: 500,
      easing: "ease-in-out",
      perPage: 1,
      startIndex: 0,
      draggable: true,
      multipleDrag: false,
      threshold: 20,
      loop: true,
      onInit: function() {
        this.addDots(true);
        this.updateDots();
      },
      onChange: function() {
        this.updateDots();
      }
    });
  }
}
