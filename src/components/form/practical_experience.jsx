import { useState } from "react";
import { formValidator } from "./validator";

export default function PracticalExperience({section}) {
  const [minorFields, setMinorFields] = useState({
    position: false,
    responsibility: false
  });

  const validator = new formValidator(section, minorFields);

  const changeFieldState = (event) => setMinorFields({
    ...minorFields,
    [event.target.id]: event.target.value === '' ? false : true }
  )

  return (
    <div>
      <div className="input-fields">
        <label id="contacts-header">Company</label>

        <div id="company">
          <div className="company-item">
            <label htmlFor="company" hidden={true}>Company</label>

            <input
              type="text"
              id={'company'}
              placeholder="Name"
              name={'company' + section}
              required={validator.require()}
              onChange={(e) => validator.emitDefaultMessage(e)}
              onInvalid={(e) => validator.emitCustomMessage(e)}
            />
          </div>

          <div className="company-item">
            <label htmlFor="position" hidden={true}>Position</label>

            <input
              type="text"
              id={'position'}
              placeholder="Position"
              name={'position' + section}
              onChange={(e) => changeFieldState(e)}
            />
          </div>
        </div>

        <div>
          <label>Responsibility</label>

          <textarea
            type="text"
            id={'responsibility'}
            name={'responsibility' + section}
            minLength={50}
            maxLength={200}
            onChange={(e) => changeFieldState(e)}
          />
        </div>
      </div>
    </div>
  )
}
