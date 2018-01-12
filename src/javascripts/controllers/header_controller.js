// src/controllers/header_controller.js
import { Controller } from "stimulus"
import { toggleClass } from "../utils"

export default class Header extends Controller {
  toggleMobileMenu() {
    toggleClass(this.targets.find('burgerBtn'), 'active');
    toggleClass(this.targets.find('mobileMenu'), 'active');
  }
  onBurgerBtnClick(e) {
    e.preventDefault();
    this.toggleMobileMenu()
  }
  onMobileMenuExitCross() {
    this.toggleMobileMenu()
  }
}
