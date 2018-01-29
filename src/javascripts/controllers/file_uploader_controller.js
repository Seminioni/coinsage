import { Controller } from "stimulus";
import Dropzone from "dropzone";

export default class FileUploader extends Controller {
  initialize() {
    var myDropzone = new Dropzone(this.targets.find("uploader"), {
      url: "/file-upload",
      paramName: "file",
      createImageThumbnails: false,
      // init: function() {
      //   var submitButton = document.querySelector("#submit-all");
      //   myDropzone = this; // closure

      //   submitButton.addEventListener("click", function() {
      //     myDropzone.processQueue(); // Tell Dropzone to process all queued files.
      //   });

      //   // You might want to show the submit button only when
      //   // files are dropped here:
      //   this.on("addedfile", function() {
      //     // Show submit button here and/or inform user to click it.
      //   });
      // }
    });
  }
}
