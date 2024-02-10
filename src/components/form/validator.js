export class FormValidator {
  constructor(section, minorFields) {
    this.section = section;
    this.minorFields = minorFields;
    this.defaultMessage = '';
    this.errorMessage = 'Please fill out this field or clear out subsequent fields to void this section';
  }

  minorFieldsAreEmpty() {
    return Object.values(this.minorFields).every((field) => !field);
  }

  sectionIsRequired() {
    return this.section === '1';
  }

  require() {
    return this.sectionIsRequired() ? true : (!this.minorFieldsAreEmpty());
  }

  emitDefaultMessage(e) {
    e.target.setCustomValidity(this.defaultMessage);
  }

  emitCustomMessage(e) {
    if (!this.sectionIsRequired()) {
      e.target.setCustomValidity(
        this.minorFieldsAreEmpty()
          ? this.defaultMessage
          : this.errorMessage,
      );
    }
  }
}
