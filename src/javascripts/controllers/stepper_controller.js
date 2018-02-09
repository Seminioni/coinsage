import { Controller } from "stimulus";

export default class Stepper extends Controller {
  initialize() {
    this.input = this.targets.find("stepperInput");
  }
  onSideClick(e) {
    let inputVal = +this.input.value;

    if (e.currentTarget.classList.contains("stepper__side--right")) {
      inputVal += 1;
    } else {
      if (inputVal === 0) {
        return;
      }
      inputVal -= 1;
    }
    this.input.value = inputVal;
  }
  validateInput(e) {
    e.target.value = e.target.value.replace(/[^\d]/, '');
  }
}
