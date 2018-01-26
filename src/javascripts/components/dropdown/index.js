import Choises from "choices.js";

export default class Dropdown extends Choises {

  setValueByChoiceID(value) {
    if (!this.isTextElement) {
      const choices = this.store.getChoices();
      // Loop through each value and

      [value].forEach((val) => {
        const foundChoice = choices.find((choice) => {
          // Check 'value' property exists and the choice isn't already selected
          return choice.id === val
        });

        if (foundChoice) {
          if (!foundChoice.selected) {
            this._addItem(
              foundChoice.value,
              foundChoice.label,
              foundChoice.id,
              foundChoice.groupId,
              foundChoice.customProperties,
              foundChoice.placeholder,
              foundChoice.keyCode
            );

          } else if (!this.config.silent) {
            console.warn('Attempting to select choice already selected');
          }
        } else if (!this.config.silent) {
          console.warn('Attempting to select choice that does not exist');
        }
      });
    }
    return this;
  }

}
