import { Controller } from "stimulus"

export default class Stepper extends Controller {
  onSideClick(e) {
    const input = this.targets.find('stepperInput');
    let inputVal = +input.value;

    if (e.currentTarget.classList.contains('stepper__side--right')) {
      inputVal += 1;
    } else {
      if (inputVal === 0) {
        return
      }
      inputVal -= 1;
    }
    input.value = inputVal;
  }
}
