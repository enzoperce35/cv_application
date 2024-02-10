import React, { useState } from 'react';
import { FormValidator } from './validator';

function OptionItems({ prefix, section }) {
  const years = Array.from({ length: 100 }, (_, i) => new Date().getFullYear() - i);

  return (
    <>
      <option value="" disabled selected>{prefix.substr(4)}</option>

      {years.map((year) => <option key={prefix + section + year}>{year}</option>)}

      <option value="" aria-label="blank" />
    </>
  );
}

export default function EducationalExperience({ section }) {
  const [minorFields, setMinorFields] = useState({
    studyTitle: false,
    studyYearStart: false,
    studyYearEnd: false,
  });

  const validator = new FormValidator(section, minorFields);

  const changeFieldState = (event) => setMinorFields({
    ...minorFields,
    [event.target.id]: event.target.value !== '',
  });

  return (
    <div>
      <div className="input-fields">
        <div>
          <label htmlFor="school">
            School

            <input
              type="text"
              id="school"
              name={`school${section}`}
              required={validator.require()}
              onChange={(e) => validator.emitDefaultMessage(e)}
              onInvalid={(e) => validator.emitCustomMessage(e)}
            />
          </label>
        </div>

        <div>
          <label htmlFor="studyTitle">
            Title

            <input
              type="text"
              id="studyTitle"
              name={`studyTitle${section}`}
              onChange={(e) => changeFieldState(e)}
            />
          </label>

        </div>

        <div id="study-year">
          <span>Year</span>

          <div>
            <select
              defaultValue=""
              placeholder="Start"
              id="studyYearStart"
              name={`studyYearStart${section}`}
              onChange={(e) => changeFieldState(e)}
              aria-label="Year Start"
            >
              <OptionItems prefix="yearStart" section={section} />
            </select>

            <select
              defaultValue=""
              placeholder="End"
              id="studyYearEnd"
              name={`studyYearEnd${section}`}
              onChange={(e) => changeFieldState(e)}
              aria-label="Year End"
            >
              <OptionItems prefix="yearEnd" section={section} />
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}
