import { useState } from "react";
import {formValidator} from "./validator";

function OptionItems({prefix, section}) {
  const years = Array.from({ length: 100 }, (_, i) => new Date().getFullYear() - i);

  return (
    <>
      <option value="" disabled selected>{prefix.substr(4)}</option>

      {years.map((year) => {
        return <option key={prefix + section + year}>{year}</option>
      })}

      <option value=""></option>
    </>
  )
}

export default function EducationalExperience({section}) {
  const [minorFields, setMinorFields] = useState({
    studyTitle: false,
    studyYearStart: false,
    studyYearEnd: false
  });

  const validator = new formValidator(section, minorFields);

  const changeFieldState = (event) => setMinorFields({
    ...minorFields,
    [event.target.id]: event.target.value === '' ? false : true }
  )

  return (
    <div>
      <div className="input-fields">
        <div>
          <label>School</label>

          <input
            type="text"
            id={'school'}
            name={'school' + section}
            required={validator.require()}
            onChange={(e) => validator.emitDefaultMessage(e)}
            onInvalid={(e) => validator.emitCustomMessage(e)}
          />
        </div>

        <div>
          <label>Title</label>

          <input
            type='text'
            id={'studyTitle'}
            name={'studyTitle' + section}
            onChange={(e) => changeFieldState(e)}
          />
        </div>

        <div id="study-year">
          <label>Year</label>

          <div>
            <select
              defaultValue=''
              placeholder="Start"
              id={'studyYearStart'}
              name={'studyYearStart' + section}
              onChange={(e) => changeFieldState(e)}
            >
              <OptionItems prefix='yearStart' section={section} />
            </select>

            <select
              defaultValue=''
              placeholder="End"
              id={'studyYearEnd'}
              name={'studyYearEnd' + section}
              onChange={(e) => changeFieldState(e)}
            >
              {<OptionItems prefix='yearEnd' section={section} />}
            </select>
          </div>
        </div>
      </div>
    </div>
  )
}
