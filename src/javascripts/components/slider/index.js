import Siema from 'siema';

export class SiemaWithDots extends Siema {
  addArrows() {
    this.arrowLeft = document.createElement('span');
    this.arrowRight = document.createElement('span');
    this.arrowLeft.classList.add('arrow', 'arrow--prev');
    this.arrowRight.classList.add('arrow', 'arrow--next');

    this.selector.parentNode.insertBefore(this.arrowLeft, this.selector.nextSibling);
    this.selector.parentNode.insertBefore(this.arrowRight, this.selector.nextSibling);

    this.arrowLeft.addEventListener('click', () => this.prev())
    this.arrowRight.addEventListener('click', () => this.next())
  }

  addDots() {
    const pagination = document.querySelector('.catalog-item__pagination');

    if (pagination) {
      pagination.remove()
    }
    // create a contnier for all dots
    // add a class 'dots' for styling reason
    this.dots = document.createElement('div');
    this.dots.classList.add('catalog-item__pagination');

    // loop through slides to create a number of dots
    for(let i = 0; i < this.innerElements.length; i++) {
      // create a dot
      const dot = document.createElement('div');

      // add a class to dot
      dot.classList.add('catalog-item__pagination-item');

      // add an event handler to each of them
      dot.addEventListener('click', () => {
        this.goTo(i);
      })

      // append dot to a container for all of them
      this.dots.appendChild(dot);
    }

    // add the container full of dots after selector
    this.selector.parentNode.insertBefore(this.dots, this.selector.nextSibling);
  }

  updateDots() {
    // loop through all dots
    for(let i = 0; i < this.dots.querySelectorAll('div').length; i++) {
      // if current dot matches currentSlide prop, add a class to it, remove otherwise
      const addOrRemove = this.currentSlide === i ? 'add' : 'remove';
      this.dots.querySelectorAll('div')[i].classList[addOrRemove]('catalog-item__pagination-item--active');
    }
  }

  addPreviews(container) {

    for(let i = 0; i < this.innerElements.length; i++) {
      const preview = document.createElement('div');

      preview.classList.add('catalog-item__preview-item');

      preview.appendChild(document.importNode(this.innerElements[i],true));

      preview.addEventListener('click', () => {
        this.goTo(i);
      })

      container.appendChild(preview);
    }
  }

  updatePreviews(container) {
    // loop through all dots
    for(let i = 0; i < container.querySelectorAll('.catalog-item__preview-item').length; i++) {
      // if current dot matches currentSlide prop, add a class to it, remove otherwise
      const addOrRemove = this.currentSlide === i ? 'add' : 'remove';
      container.querySelectorAll('.catalog-item__preview-item')[i].classList[addOrRemove]('catalog-item__preview-item--active');
    }
  }


}

export default (options) => new SiemaWithDots(options);


