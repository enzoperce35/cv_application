export class formValidator {
  constructor(section, minorFields) {
    this.section = section
    this.minorFields = minorFields
  }

  minorFieldsAreEmpty() {
    return Object.values(this.minorFields).every(field => !field);
  }

  sectionIsRequired() {
    return this.section == '1';
  }

  require() {
    return this.sectionIsRequired() ? true : (this.minorFieldsAreEmpty() ? false : true)
  }

  emitDefaultMessage(e) {
    e.target.setCustomValidity('')
  }

  emitCustomMessage(e) {
    if (!this.sectionIsRequired()) {
      e.target.setCustomValidity(
        this.minorFieldsAreEmpty() ?
        '' :
        'Please fill out this field or clear out subsequent fields to void this section'
      )
    }
  };
}
