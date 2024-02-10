import React, { useState } from 'react';
import { FormValidator } from './validator';

export default function PracticalExperience({ section }) {
  const [minorFields, setMinorFields] = useState({
    position: false,
    responsibility: false,
  });

  const validator = new FormValidator(section, minorFields);

  const changeFieldState = (event) => setMinorFields({
    ...minorFields,
    [event.target.id]: event.target.value !== '',
  });

  return (
    <div>
      <div className="input-fields">

        <div id="company">
          <span className="head-names">Company</span>

          <div>
            <div className="company-item">
              <label htmlFor="company">
                <span className="sub-names">Company</span>

                <input
                  type="text"
                  id="company"
                  placeholder="Name"
                  name={`company${section}`}
                  required={validator.require()}
                  onChange={(e) => validator.emitDefaultMessage(e)}
                  onInvalid={(e) => validator.emitCustomMessage(e)}
                />
              </label>
            </div>

            <div className="company-item">
              <label htmlFor="position">
                <span className="sub-names">Position</span>

                <input
                  type="text"
                  id="position"
                  placeholder="Position"
                  name={`position${section}`}
                  onChange={(e) => changeFieldState(e)}
                />
              </label>
            </div>
          </div>
        </div>

        <div>
          <label htmlFor="responsibility">
            Responsibility

            <textarea
              type="text"
              id="responsibility"
              name={`responsibility${section}`}
              minLength={50}
              maxLength={200}
              onChange={(e) => changeFieldState(e)}
            />
          </label>
        </div>
      </div>
    </div>
  );
}
