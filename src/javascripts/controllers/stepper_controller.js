import { Controller } from "stimulus";

export default class Stepper extends Controller {
  static targets = ["input"]

  up() {
    this.input.instance.value = this.input.value + 1;
  }

  down() {
    if (this.input.value === 0) {
      return;
    } else {
      this.input.instance.value = this.input.value - 1;
    }
  }

  validateInput(e) {
    e.target.value = e.target.value.replace(/[^\d]/, '');
  }

  get input() {
    return {
      instance: this.inputTarget,
      value: +this.inputTarget.value
    }
  }
}
