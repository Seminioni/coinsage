import { Controller } from "stimulus";
import initSiema from "components/slider/index.js";
import Drift from "drift-zoom";
import initModal from "components/modal/index.js";

export default class CatalogItem extends Controller {
  initialize() {
    this.modal = initModal({
      onOpen: () => {
        const sliderContainer = document.createElement("div");
        const arrowPrev = this.targets.find('prev');
        const arrowNext = this.targets.find('next');



        sliderContainer.classList.add("modal__slider");

        const cardSliderImages = this.element.querySelectorAll(
          ".catalog-item__img .catalog-item__img-item"
        );

        cardSliderImages.forEach(image => {
          const newImage = image.cloneNode();
          newImage.src = newImage.dataset.zoom;
          sliderContainer.insertAdjacentElement("beforeend", newImage);
        });


        const modalContent = document.querySelector(".modal .modal-content");

        if (modalContent.children.length === 0) {
          document
            .querySelector(".modal .modal-content")
            .appendChild(sliderContainer);
        } else {
          modalContent.innerHTML = "";
          document
            .querySelector(".modal .modal-content")
            .appendChild(sliderContainer);
        }

        const mySiema = initSiema({
          selector: sliderContainer,
          duration: 500,
          easing: "ease-in-out",
          perPage: 1,
          startIndex: 0,
          draggable: false,
          multipleDrag: false,
          threshold: 20,
          loop: true,
          onInit: function() {
            this.addDots();
            this.updateDots();
            this.addArrows()
          },
          onChange: function() {
            this.updateDots();
          }
        });

        document.querySelectorAll(".modal .catalog-item__img-item").forEach(img => {
            new Drift(img, {
              paneContainer: document.querySelector('.modal .modal__slider'),
              inlinePane: true,
              containInline: true,
            });
        })
      },
      clickOutside: false
    });

    if (window.matchMedia("screen and (min-width: 767px)").matches) {
      this.initDesktop();
    } else {
      this.initMobile();
    }
  }
  initMobile() {
    const container = this.targets.find("slider");

    const prev = this.targets.find("prev");
    const next = this.targets.find("next");

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

    prev.addEventListener("click", () => mySiema.prev());
    next.addEventListener("click", () => mySiema.next());
  }
  initDesktop() {
    const container = this.targets.find("slider");

    const prev = this.targets.find("prev");
    const next = this.targets.find("next");

    const mySiema = initSiema({
      selector: container,
      duration: 500,
      easing: "ease-in-out",
      perPage: 1,
      startIndex: 0,
      draggable: false,
      multipleDrag: false,
      threshold: 20,
      loop: false,
      onInit: function() {
        this.addDots();
        this.updateDots();
        this.addPreviews(document.querySelector(".catalog-item__preview"));
        this.updatePreviews(document.querySelector(".catalog-item__preview"));
      },
      onChange: function() {
        this.updateDots();
        this.updatePreviews(document.querySelector(".catalog-item__preview"));
      }
    });

    prev.addEventListener("click", () => mySiema.prev());
    next.addEventListener("click", () => mySiema.next());
  }

  openModal(e) {
    e.preventDefault();

    this.modal.open("#modal-1");
  }
}
