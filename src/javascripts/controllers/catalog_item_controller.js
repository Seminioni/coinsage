import { Controller } from "stimulus";
import initSiema from "components/slider/index.js";
import Drift from "drift-zoom";
import initModal from "components/modal/index.js";
import { mSize } from "utils/constants.js";

export default class CatalogItem extends Controller {
  initialize() {
    const condition = window.matchMedia(mSize)
      .matches;

    this.modal = initModal({
      onOpen: this.onModalOpen.bind(this),
      onBeforeClose: this.onModalBeforeClose.bind(this),
      clickOutside: false
    });

    if (condition) {
      this.initDesktop();
    } else {
      this.initMobile();
    }

  }
  onModalOpen() {
    const sliderContainer = document.createElement("div");

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

    this.getSiema({
      selector: sliderContainer,
      onInit: function() {
        this.addDots();
        this.updateDots();
        this.addArrows();
      },
      onChange: function() {
        this.updateDots();
      }
    });

    this.initDriftZooms();
  }

  onModalBeforeClose() {
    document
      .querySelectorAll(".drift-zoom-pane")
      .forEach(drift => drift.remove());
  }
  initDriftZooms() {
    document.querySelectorAll(".modal .catalog-item__img-item").forEach(img => {
      new Drift(img, {
        paneContainer: document.querySelector(".modal .modal__slider"),
        inlinePane: true,
        containInline: true
      });
    });
  }
  initMobile() {
    this.getSiema({
      selector: this.targets.find("slider"),
      draggable: true,
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
  initDesktop() {
    this.getSiema({
      selector: this.targets.find("slider"),
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
  }

  getSiema(options) {
    const settings = Object.assign(
      {
        duration: 500,
        easing: "ease-in-out",
        perPage: 1,
        startIndex: 0,
        draggable: false,
        multipleDrag: false,
        threshold: 20,
        loop: true
      },
      options
    );

    return initSiema(settings);
  }

  openModal(e) {
    e.preventDefault();

    this.modal.open("#modal-1");
  }
}
