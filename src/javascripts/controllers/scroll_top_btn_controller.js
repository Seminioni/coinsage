import { Controller } from "stimulus";
import { doScrolling } from "utils/index.js";


export default class ScrollTopBtn extends Controller {
  onClick(e) {
    const { top } = e.target.getBoundingClientRect();
    doScrolling(top - window.pageYOffset, 1000)
  }
}
