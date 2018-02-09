import { Controller } from "stimulus";

export default class FileUploader extends Controller {
  initialize() {
    const inputElement = this.targets.find("fileInput");

    inputElement.addEventListener(
      "change",
      e => {
        this.target = e.target.files;
        const fileNames = Array.from(e.target.files).map(obj => obj.name);

        this.renderFileNames(fileNames, e.target.files);
      },
      false
    );
  }

  renderFileNames(names, kek) {
    const uploadsList = this.targets.find("uploads-list");

    uploadsList.innerHTML = "";

    function appendNames(array, i) {
      if (array[i] === undefined) {
        return;
      }
      const fileName = document.createElement("p");
      fileName.classList.add("file-uploader__uploads-item");
      fileName.innerText = array[i];
      fileName.setAttribute("data-value", array[i]);

      uploadsList.appendChild(fileName);

      return appendNames(array, ++i);
    }

    appendNames(names, 0);
  }
}
