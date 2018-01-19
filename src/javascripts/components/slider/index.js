import Siema from 'siema';

export class SiemaWithDots extends Siema {
  addDots() {
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

}

export default (options) => new SiemaWithDots(options);


