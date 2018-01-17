// src/controllers/header_controller.js
import { Controller } from "stimulus"
import { toggleClass } from "../utils"

export default class Header extends Controller {
  connect() {
    var scrollpos = window.scrollY;

    const header = document.querySelector('.header');
    const headerTop = document.querySelector('.header__top');

    document.addEventListener('scroll', function() {
      scrollpos = window.scrollY;

      if(scrollpos >= header.getBoundingClientRect().height) {
        if (!headerTop.classList.contains('is-scrolling')) {
          headerTop.classList.add('is-scrolling');
        }
      } else {
        if (headerTop.classList.contains('is-scrolling')) {
          headerTop.classList.remove('is-scrolling');
        }
      }
    })
  }
  toggleMobileMenu() {
    toggleClass(this.targets.find('burgerBtn'), 'active');
    toggleClass(this.targets.find('mobileMenu'), 'active');
    toggleClass(document.body, 'menu-is-open');
  }
  onBurgerBtnClick(e) {
    e.preventDefault();
    this.toggleMobileMenu()
  }
  onMobileMenuExitCross() {
    this.toggleMobileMenu()
  }
}
