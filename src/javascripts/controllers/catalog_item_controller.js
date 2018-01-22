import { Controller } from "stimulus";
import initSiema from "components/slider/index.js";

export default class CatalogItem extends Controller {
  initialize() {
    const container = this.targets.find('slider');

    const prev = this.targets.find('prev');
    const next = this.targets.find('next');

    const mySiema = initSiema({
      selector: container,
      duration: 500,
      easing: "ease-in-out",
      perPage: 1,
      startIndex: 0,
      draggable: true,
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



    prev.addEventListener('click', () => mySiema.prev());
    next.addEventListener('click', () => mySiema.next());

  }
}
